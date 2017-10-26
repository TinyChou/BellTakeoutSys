(function () {
  $.ajax({
    url: '/summary'
  }).done(function (data) {

    render(data);
  });

  var menu = new Menu().getAll();

  function render (data) {
    var container = document.getElementById('summaryContainer');
    container.innerHTML = '';

    /*
    eg:
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    */
    for (var i = 0; i < data.length; i++) {
      var tr = document.createElement('tr');
      container.appendChild(tr);

      var th = document.createElement('th');
      th.setAttribute('scope', 'row');
      th.innerHTML = i + 1;
      tr.appendChild(th);

      var td = document.createElement('td');
      td.innerHTML = data[i].email;
      tr.appendChild(td);

      td = document.createElement('td');
      td.innerHTML = formatOrders(data[i].menu);
      tr.appendChild(td);

      td = document.createElement('td');
      td.innerHTML = data[i].extra;
      tr.appendChild(td);
    }

    renderSummary(data);
  }

  function renderSummary(data) {
    var container = document.getElementById('summaryText');
    container.innerHTML = '';


    var orderMap = {};
    for (var i = 0; i < data.length; i++) {
      for (var j = 0; j < data[i].menu.length; j++) {
        var item = data[i].menu[j];
        if (orderMap[item.id]) {
          orderMap[item.id].count += item.count;
        } else {
          orderMap[item.id] = item;
        }
      }
    }

    function formatOrderMap(m) {
      var str = '';
      var num = 0;
      for (var key in m) {
        str += getNameById(key);
        str += '¥' + m[key].price;
        str += ' x' + m[key].count;
        str += '<br/>';
        num += m[key].price * m[key].count;
      }
      str += '<h3>总金额: ¥' + num + '</h3>';
      str += '<br/>';

      return str;
    }

    container.innerHTML = formatOrderMap(orderMap);
  }

  function getNameById (id) {
    for (var i = 0, N = menu.length; i < N; i++) {
      var category = menu[i];
      for (var j = 0, M = category.list.length; j < M; j++) {
        var item = category.list[j];
        if (item.id === id) {
          return item.name;
        }
      }
    }
  }

  function formatOrders (orders) {
    var str = '';
    for (var i = 0; i < orders.length; i++) {
      str += getNameById(orders[i].id);
      str += '¥' + orders[i].price;
      str += ' x' + orders[i].count;
      str += '<br/>';
    }
    return str;
  }
})();
