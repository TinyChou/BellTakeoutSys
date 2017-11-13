(function () {
  function setCookie(c_name,value,expiredays){
    var exdate=new Date()
    exdate.setDate(exdate.getDate()+expiredays)
    document.cookie=c_name+ "=" +escape(value)+
    ((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
  }

  function getCookie(c_name){
    if (document.cookie.length>0){
      c_start=document.cookie.indexOf(c_name + "=")
      if (c_start!=-1){
        c_start=c_start + c_name.length+1
        c_end=document.cookie.indexOf(";",c_start)
        if (c_end==-1) c_end=document.cookie.length
        return unescape(document.cookie.substring(c_start,c_end))
      }
    }
    return ""
  }

  var emailInput = document.getElementById('inputEmail');
  function checkCookie(){
    var email = getCookie('email');
    if (email) emailInput.value = email;
  }
  checkCookie();


  var container = document.getElementById('menuContainer');
  container.innerHTML = ''; // remove all children firstly

  var menu = new Menu();
  var categories = menu.getAll();
  var categoriesCount = categories.length;

  var summary = document.getElementById('summary');

  for (var i = 0, N = categoriesCount; i < N; i++) {
    var category = categories[i];
    var categoryName = category.categoryName;
    var list = category.list;

    // category container
    var domCategory = document.createElement('div');
    domCategory.setAttribute('class', 'form-group');
    container.appendChild(domCategory);

    // category label eg: <label>菜单<span class="badge badge-success">现炒快餐</span></label>
    var domCatLabel = document.createElement('label');
    domCatLabel.appendChild(document.createTextNode('菜单'));
    var domCatBadge = document.createElement('span');
    domCatBadge.setAttribute('class', i % 2 === 0 ? 'badge badge-info' : 'badge badge-success');
    domCatBadge.innerHTML = categoryName;
    domCatLabel.appendChild(domCatBadge);
    domCategory.appendChild(domCatLabel);

    // food container eg: <div class="form-row align-items-center"></div>
    var domFoodContainer = document.createElement('div');
    domFoodContainer.setAttribute('class', 'form-row align-items-center');
    domCategory.appendChild(domFoodContainer);

    var listCount = list.length;
    for (var j = 0, M = listCount; j < M; j++) {
      var food = list[j];
      var foodName = food.name;

      // eg: <div class="col-auto"></div>
      var domFood = document.createElement('div');
      domFood.setAttribute('class', 'col-auto');
      domFoodContainer.appendChild(domFood);

      // eg: <label class="mr-sm-2" for="inlineFormCustomSelect">麻婆豆腐饭</label>
      var domFoodLabel = document.createElement('label');
      domFoodLabel.setAttribute('class', 'mr-sm-2');
      // domFoodLabel.innerHTML = foodName;
      domFood.appendChild(domFoodLabel);

      /*
      <select class="custom-select mb-2 mr-sm-2 mb-sm-0" id="inlineFormCustomSelect">
        <option value="0" selected>0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
      */
      if (!!food.price) {
        var domFoodSelect = document.createElement('select');
        domFoodSelect.setAttribute('class', 'custom-select mb-2 mr-sm-2 mb-sm-0');
        domFoodSelect.setAttribute('id', 'inlineFormCustomSelect' + j);
        domFoodSelect.setAttribute('name', food.id);
        domFood.appendChild(domFoodSelect);

        domFoodLabel.innerHTML = foodName + '  ¥' + food.price;

        for (var k = 0; k <= 10; k++) {
          var option = document.createElement('option');
          option.setAttribute('value', k);
          option.innerHTML = k + '份';
          if (k == 0) option.setAttribute('selected', true);
          domFoodSelect.appendChild(option);
        }
      } else if (!!food.price_min && !!food.price_max) {
        var domFoodPriceSelect = document.createElement('select');
        domFoodPriceSelect.setAttribute('class', 'custom-select mb-2 mr-sm-2 mb-sm-0');
        domFoodPriceSelect.setAttribute('id', 'inlineFormCustomPriceSelect' + j);
        domFoodPriceSelect.setAttribute('name', food.id + '_price');
        domFood.appendChild(domFoodPriceSelect);
        domFoodLabel.innerHTML = foodName;

        for (var k = food.price_min; k <= food.price_max; k++) {
          var option = document.createElement('option');
          option.setAttribute('value', k);
          option.innerHTML = '¥' + k;
          if (k == 0) option.setAttribute('selected', true);
          domFoodPriceSelect.appendChild(option);
        }

        var domFoodSelect = document.createElement('select');
        domFoodSelect.setAttribute('class', 'custom-select mb-2 mr-sm-2 mb-sm-0');
        domFoodSelect.setAttribute('id', 'inlineFormCustomSelect' + j);
        domFoodSelect.setAttribute('name', food.id);
        domFood.appendChild(domFoodSelect);

        for (var k = 0; k <= 10; k++) {
          var option = document.createElement('option');
          option.setAttribute('value', k);
          option.innerHTML = k + '份';
          if (k == 0) option.setAttribute('selected', true);
          domFoodSelect.appendChild(option);
        }
      }
    }
  }
})();
