const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const Menu = require('./menu.js')

const emailValidator = require('email-validator')

const jsonfile = require('jsonfile')
const fs = require('fs')

app.use(express.static('public'))
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
// cookie
app.use(cookieParser())

app.get('/hello', function (req, res) {
  res.send('Hello World!')
})

app.post('/post_order', function (req, res) {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');

  const email = req.body.email || req.cookies.email;
  if (!emailValidator.validate(email)) {
    res.write('Email 格式错误!');
    res.end();
    return;
  }
  if (!email.endsWith('@bolorobo.com') && !email.endsWith('@belledu.com')){
    res.write('哪儿来的的奸细!');
    res.end();
    return;
  }

  // set email to cookie
  res.cookie('email', email, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: false });

  const menus = new Menu().getAll();
  const fastfood = menus[0];
  const curedfood = menus[1];

  const orders = [];
  const extra = req.body.extra;

  for (var key in req.body) {
    if (key === 'email') {
      continue
    } else if (key.endsWith('_price')) {

      // 更新浮动菜品的价格
      for (var i = 0; i < curedfood.list.length; i++) {
        if (req.body[key] != curedfood.list[i].price_min &&
          curedfood.list[i].id === key.substring(0, key.length - 6)) {
          curedfood.list[i].price = req.body[key];
          // console.log('update: ' + curedfood.list[i].price);
        }
      }
    } else {
      if (req.body[key] > 0) {
        var price = -1;
        for (var i = 0; i < fastfood.list.length; i++) {
          if (fastfood.list[i].id === key) {
            price = fastfood.list[i].price;
            break;
          }
        }
        if (price < 0) {
          for (var i = 0; i < curedfood.list.length; i++) {
            if (curedfood.list[i].id === key) {
              price = curedfood.list[i].price;
              if (!price) price = curedfood.list[i].price_min;
              break;
            }
          }
        }

        orders.push({
          id: key,
          count: parseInt(req.body[key]),
          price: parseInt(price)
        });
      }
    }
  }

  console.log(orders);
  console.log(email + ' ' + extra);

  if (orders.length === 0) {
    res.write('点餐失败！:(\n你确定你有选菜单吗？别逗我, - -||')
    res.end();
    return;
  }

  write(email, orders, extra, function () {
    res.write('点餐成功！');
    res.end();
  }, function () {
    res.write('点餐失败！服务器错误。。。');
    res.end();
  });
})

app.get('/summary', function (req, res) {
  res.setHeader('Content-Type', 'text/json; charset=utf-8');
  read(function (arr) {
    res.write(JSON.stringify(arr));
    res.end();
  });
})

app.listen(5000, function () {
  console.log('app listening on port 5000...')
})

function write(email, orders, extra, ok, fail) {
  const jsonFile = './data/' + today() + '.json';
  // jsonfile.read
  read(function (arr) {
    let isContains = false;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].email === email) {
        arr[i].email = email;
        arr[i].menu = orders;
        arr[i].extra = extra;

        isContains = true; // update it
        break;
      }
    }
    if (!isContains) arr.push({
      email: email,
      menu: orders,
      extra: extra
    }); // insert it

    jsonfile.writeFile(jsonFile, arr, function (err) {
      if (!err) ok();
      else fail(err)
    });
  });
}

function read(cb) {
  const jsonFile = './data/' + today() + '.json';
  // fs.closeSync(fs.openSync(jsonFile, 'r'));
  jsonfile.readFile(jsonFile, function (err, obj) {
    if (err) cb([]);
    else {
      obj = obj || [];
      cb(obj);
    }
  });
}

function today() {
  var dateObj = new Date();
  var month = dateObj.getUTCMonth() + 1; //months from 1-12
  var day = dateObj.getUTCDate();
  var year = dateObj.getUTCFullYear();

  return year + "_" + month + "_" + day;
}
