function Menu() {
  // empty constructor
}

Menu.profile = [
  {
    category: 'fastfood',
    categoryName: '现炒快餐',
    list: [
      { id: 'mapodoufufan', name: '麻婆豆腐饭🌶️🌶️', price: 10 },
      { id: 'shousibaocaifan', name: '手撕包菜饭🌶️', price: 10 },
      { id: 'suanlatudousifan', name: '酸辣土豆丝饭🌶️', price: 10 },
      { id: 'qingjiaochaodanfan', name: '青椒炒蛋饭🌶️', price: 12 },
      { id: 'xihongshichaodanfan', name: '西红柿炒蛋饭', price: 12 },
      { id: 'suancaichaodanfan', name: '酸菜炒蛋饭', price: 12 },
      { id: 'suancaitoupianfan', name: '酸菜肉片饭', price: 12 },
      { id: 'qingjiaoroupianfan', name: '青椒肉片饭🌶️', price: 12 },
      { id: 'muerroupianfan', name: '木耳肉片饭', price: 12 },
      { id: 'qieziroumofan', name: '茄子肉末饭', price: 12 },
      { id: 'waipocairoumofan', name: '外婆菜肉末饭🌶️', price: 12 },
      { id: 'suandoujiaoroumofan', name: '酸豆角肉末饭🌶️', price: 12 },
      { id: 'tudouroupianfan', name: '土豆肉片饭', price: 12 },
      { id: 'qincaixiangganfan', name: '芹菜香干饭', price: 12 },

      { id: 'kuguachaodanfan', name: '苦瓜炒蛋饭', price: 13 },
      { id: 'youxianxiangganfan', name: '攸县香干饭🌶️🌶️', price: 13 },
      { id: 'doujiaorousifan', name: '豆角肉丝饭', price: 13 },
      { id: 'xiaosunrousifan', name: '小笋肉丝饭🌶️', price: 13 },
      { id: 'fuzhuroupianfan', name: '腐竹肉片饭', price: 13 },
      { id: 'yuxiangqiezifan', name: '鱼香茄子饭🌶️', price: 13 },
      { id: 'xiangxiwaipicaifan', name: '湘西外婆菜饭🌶️', price: 13 },
      { id: 'jianjiaohuiguoroufan', name: '尖椒回锅肉饭🌶️', price: 13 },
      { id: 'xiangganhuiguoroufan', name: '香干回锅肉饭🌶️', price: 15 },
      { id: 'doujiaohuiguoroufan', name: '豆角回锅肉饭', price: 15 },
      { id: 'zhusunhuiguoroufan', name: '竹笋回锅肉饭🌶️', price: 15 },
      { id: 'suancaihuiguoroufan', name: '酸菜回锅肉饭', price: 15 },
      { id: 'jiachangdoufufan', name: '家常豆腐饭🌶️', price: 15 },
      { id: 'yuxiangrousifan', name: '鱼香肉丝饭🌶️', price: 15 },
      { id: 'suancaixiaosunrousifan', name: '酸菜小笋肉丝饭🌶️', price: 15 },
      { id: 'liangguaroupianfan', name: '凉瓜肉片饭', price: 15 },

      { id: 'jiachangxiaochaojifan', name: '家常小炒鸡饭🌶️🌶️', price: 15 },
      { id: 'nongjiaxiaochaoroufan', name: '农家小炒肉饭🌶️🌶️', price: 15 },
      { id: 'suanlajizafan', name: '酸辣鸡杂饭🌶️', price: 15 },
      { id: 'xianggurousifan', name: '香菇肉丝饭🌶️', price: 15 },
      { id: 'xiangguhuajifan', name: '香菇滑鸡饭', price: 15 },
      { id: 'luobuganlaroufan', name: '萝卜干腊肉饭🌶️', price: 16 },
      { id: 'jianjiaolaroufan', name: '尖椒腊肉饭🌶️', price: 16 },
      { id: 'xiangganlaroufan', name: '香干腊肉饭🌶️', price: 16 },
      { id: 'doujiaolaroufan', name: '豆角腊肉饭', price: 16 },
      { id: 'yansunlaroufan', name: '烟笋腊肉饭🌶️', price: 16 },
      { id: 'xianggularoufan', name: '香菇腊肉饭', price: 16 },
      { id: 'liangguaniuroufan', name: '凉瓜牛肉饭', price: 18 },
      { id: 'xiangguniuroufan', name: '香菇牛肉饭', price: 18 },
      { id: 'yansunniuroufan', name: '烟笋牛肉饭🌶️', price: 18 },
      { id: 'yeshanjiaoniuroufan', name: '野山椒牛肉饭🌶️🌶️', price: 18 }
    ],
  },

  {
    category: 'curedfood',
    categoryName: '烧腊类',
    list: [
      { id: 'ludoufufan', name: '卤豆腐饭', price_min: 10, price_max: 15 },
      { id: 'kejiaxianjifan', name: '客家咸鸡饭', price_min: 10, price_max: 15 },
      { id: 'luwuhuaroufan', name: '卤五花肉饭', price_min: 10, price_max: 15 },
      { id: 'zhuzhoufan', name: '猪肘饭', price_min: 10, price_max: 15 },
      { id: 'shaoyafan', name: '烧鸭饭', price_min: 12, price_max: 15 },
      { id: 'lushouroufan', name: '卤瘦肉饭', price_min: 12, price_max: 15 },
      { id: 'shousijifan', name: '手撕鸡饭', price_min: 12, price_max: 15 },
      { id: 'baiqiejifan', name: '白切鸡饭', price_min: 12, price_max: 15 },
      { id: 'zhuerfan', name: '猪耳饭', price_min: 13, price_max: 18 },
      { id: 'chashaofan', name: '叉烧饭', price_min: 13, price_max: 18 },
      { id: 'luweishuangpinfan', name: '卤味双拼饭', price_min: 15, price_max: 20 },
      { id: 'yatuifan', name: '鸭腿饭', price_min: 15, price_max: 20 }
    ]
  },
  
];

Menu.prototype = {
  getAll: function () {
    return Menu.profile;
  },

  getByCategory: function (category) {
    var cat;
    for (var i = 0, N = Menu.profile.length; i < N; i++) {
      if (category === Menu.profile[i].category) {
        return Menu.profile[i];
      }
    }
  },
}

module.exports = Menu;
