(function () {
  var messageDom = document.querySelector('#message')

  function getQueryString(key) {
    var reg = new RegExp('(^|&)' + key + '=([^&]*)(&|$)', 'i')
    var r = window.location.search.substr(1).match(reg)
    if (r != null) return unescape(r[2])
    else return null
  }

  var message = getQueryString('message')
  var type = getQueryString('type') || ' alert-success'
  console.log(type)
  if (!message) {
    messageDom.parentNode.removeChild(messageDom)
  } else {
    messageDom.className += type

    var messages = [
      '',
      'Email 格式错误!',
      '哪儿来的的奸细!',
      '点餐失败！:(\n你确定你有选菜单吗？别逗我, - -||',
      '点餐成功！',
      '点餐失败！服务器错误。。。'
    ]
    messageDom.innerHTML = messages[message]
    setTimeout(function () {
      messageDom.parentNode.removeChild(messageDom)
    }, 3000)
  }
})();
