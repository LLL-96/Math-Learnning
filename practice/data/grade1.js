// grade1 题库数据 - 按需加载
registerGradeData({
  'grade1-unit1': {
    title: '准备课 - 数一数',
    questions: [
      {
        type: 'choice',
        question: '数一数，下面有几个苹果？ 🍎🍎🍎🍎🍎',
        options: ['3个', '4个', '5个', '6个'],
        answer: 2,
        explanation: '一个一个数：1、2、3、4、5，共有5个苹果。'
      },
      {
        type: 'choice',
        question: '比一比，哪边的星星多？<br>⭐⭐⭐⭐ &nbsp;&nbsp; vs &nbsp;&nbsp; ⭐⭐⭐',
        options: ['左边多', '右边多', '一样多', '无法比较'],
        answer: 0,
        explanation: '左边有4颗星星，右边有3颗星星，4 > 3，所以左边多。'
      },
      {
        type: 'fill',
        question: '数一数，从1数到10，第7个数是____。',
        answer: '7',
        explanation: '从1开始数：1、2、3、4、5、6、7，第7个数就是7。'
      },
      {
        type: 'choice',
        question: '下面哪种方法数物体最准确？',
        options: ['随便数', '一个一个按顺序数', '跳着数', '倒着数'],
        answer: 1,
        explanation: '一个一个按顺序数（点数法）是最准确的数数方法，不会漏数也不会重复。'
      }
    ]
  },
  'grade1-unit2': {
    title: '位置 - 上下左右前后',
    questions: [
      {
        type: 'choice',
        question: '小猫在桌子的____面。（假设小猫在桌子下方）',
        options: ['上', '下', '左', '右'],
        answer: 1,
        explanation: '当小猫在桌子下方时，我们说小猫在桌子的下面。'
      },
      {
        type: 'choice',
        question: '小明面向北方，他的后面是____方。',
        options: ['东', '南', '西', '北'],
        answer: 1,
        explanation: '面向北方时，后面就是南方，左面是西方，右面是东方。'
      },
      {
        type: 'fill',
        question: '写字时，通常用____手拿笔。',
        answer: '右',
        explanation: '大多数人习惯用右手写字，但也有左撇子用左手写字。'
      }
    ]
  },
  'grade1-unit3': {
    title: '1~5的认识和加减法',
    questions: [
      {
        type: 'choice',
        question: '3 + 2 = ?',
        options: ['4', '5', '6', '7'],
        answer: 1,
        explanation: '3加2，可以从3往后数2个：4、5，所以3+2=5。'
      },
      {
        type: 'choice',
        question: '5 - 1 = ?',
        options: ['3', '4', '5', '6'],
        answer: 1,
        explanation: '5减1，可以从5往前数1个：4，所以5-1=4。'
      },
      {
        type: 'fill',
        question: '2 + ____ = 5',
        answer: '3',
        explanation: '5减2等于3，所以2+3=5。'
      },
      {
        type: 'choice',
        question: '比较大小：4 ____ 2',
        options: ['<', '>', '='],
        answer: 1,
        explanation: '4比2大，所以用大于号">"，4 > 2。'
      }
    ]
  },
  'grade1-unit4': {
    title: '认识图形（一）',
    questions: [
      {
        type: 'choice',
        question: '下面哪个是正方体？',
        options: ['📦', '⚽', '🥫', '📱'],
        answer: 0,
        explanation: '📦盒子是正方体，有6个正方形的面。'
      },
      {
        type: 'choice',
        question: '球可以____。',
        options: ['站稳', '滚动', '叠高', '立起来'],
        answer: 1,
        explanation: '球是圆的，可以到处滚动，不能站稳。'
      },
      {
        type: 'choice',
        question: '圆柱有几个面？',
        options: ['1个', '2个', '3个', '4个'],
        answer: 2,
        explanation: '圆柱有3个面：上面、下面（两个圆）和侧面（曲面）。'
      }
    ]
  },
  'grade1-unit5': {
    title: '6~10的认识和加减法',
    questions: [
      {
        type: 'choice',
        question: '8 - 3 = ?',
        options: ['4', '5', '6', '7'],
        answer: 1,
        explanation: '8减3，从8往前数3个：7、6、5，所以8-3=5。'
      },
      {
        type: 'fill',
        question: '6 + 4 = ____',
        answer: '10',
        explanation: '6和4组成10，所以6+4=10。'
      },
      {
        type: 'choice',
        question: '10可以分成3和____。',
        options: ['6', '7', '8', '9'],
        answer: 1,
        explanation: '10-3=7，所以10可以分成3和7。'
      }
    ]
  },
  'grade1-unit6': {
    title: '11~20各数的认识',
    questions: [
      {
        type: 'choice',
        question: '15里面有____个十和____个一。',
        options: ['1个十和5个一', '5个十和1个一', '1个十和1个一', '5个十和5个一'],
        answer: 0,
        explanation: '15 = 10 + 5，所以是1个十和5个一。'
      },
      {
        type: 'fill',
        question: '1个十和8个一合起来是____。',
        answer: '18',
        explanation: '1个十是10，8个一是8，10+8=18。'
      },
      {
        type: 'choice',
        question: '12 + 3 = ?',
        options: ['13', '14', '15', '16'],
        answer: 2,
        explanation: '12加3，从12往后数3个：13、14、15，所以12+3=15。'
      },
      {
        type: 'choice',
        question: '18 - 5 = ?',
        options: ['11', '12', '13', '14'],
        answer: 2,
        explanation: '18减5，从18往前数5个：17、16、15、14、13，所以18-5=13。'
      }
    ]
  },
  'grade1-unit7': {
    title: '认识钟表',
    questions: [
      {
        type: 'choice',
        question: '钟面上有____个数字。',
        options: ['10个', '11个', '12个', '13个'],
        answer: 2,
        explanation: '钟面上有12个数字：1、2、3、4、5、6、7、8、9、10、11、12。'
      },
      {
        type: 'choice',
        question: '短针叫____，长针叫____。',
        options: ['时针、分针', '分针、时针', '秒针、时针', '时针、秒针'],
        answer: 0,
        explanation: '短针是时针，走得慢；长针是分针，走得快。'
      },
      {
        type: 'choice',
        question: '分针指向12，时针指向6，是____时。',
        options: ['5时', '6时', '7时', '12时'],
        answer: 1,
        explanation: '分针指向12，时针指向几就是几时，所以是6时。'
      },
      {
        type: 'fill',
        question: '分针指向12，时针指向9，是____时。',
        answer: '9',
        explanation: '分针指向12，时针指向9，就是9时。'
      }
    ]
  },
  'grade1-unit8': {
    title: '20以内的进位加法',
    questions: [
      {
        type: 'choice',
        question: '9 + 5 = ?',
        options: ['13', '14', '15', '16'],
        answer: 1,
        explanation: '用凑十法：把5分成1和4，9+1=10，10+4=14。'
      },
      {
        type: 'choice',
        question: '8 + 7 = ?',
        options: ['14', '15', '16', '17'],
        answer: 1,
        explanation: '用凑十法：把7分成2和5，8+2=10，10+5=15。'
      },
      {
        type: 'fill',
        question: '7 + 6 = ____',
        answer: '13',
        explanation: '用凑十法：把6分成3和3，7+3=10，10+3=13。'
      },
      {
        type: 'choice',
        question: '9 + 9 = ?',
        options: ['17', '18', '19', '20'],
        answer: 1,
        explanation: '用凑十法：把第二个9分成1和8，9+1=10，10+8=18。'
      },
      {
        type: 'choice',
        question: '6 + 8 = ?',
        options: ['13', '14', '15', '16'],
        answer: 1,
        explanation: '用凑十法：把6分成4和2，8+2=10，10+4=14。'
      }
    ]
  },
  'grade1-unit1-2': {
    title: '认识图形（二）',
    questions: [
      {
        type: 'choice',
        question: '下面哪个是长方形？',
        options: ['🔵', '📐', '🔺', '⚽'],
        answer: 1,
        explanation: '📐是长方形，有四条边，四个直角。'
      },
      {
        type: 'choice',
        question: '正方形有____条边，____个角。',
        options: ['3条边，3个角', '4条边，4个角', '5条边，5个角', '6条边，6个角'],
        answer: 1,
        explanation: '正方形有4条边，4个直角。'
      },
      {
        type: 'choice',
        question: '圆形有____条边。',
        options: ['0条', '1条', '2条', '3条'],
        answer: 0,
        explanation: '圆形没有直的边，是圆圆的。'
      },
      {
        type: 'choice',
        question: '三角形有____条边。',
        options: ['2条', '3条', '4条', '5条'],
        answer: 1,
        explanation: '三角形有3条边，3个角。'
      }
    ]
  },
  'grade1-unit2-2': {
    title: '20以内的退位减法',
    questions: [
      {
        type: 'choice',
        question: '15 - 7 = ?',
        options: ['6', '7', '8', '9'],
        answer: 2,
        explanation: '用破十法：10-7=3，3+5=8。'
      },
      {
        type: 'choice',
        question: '13 - 8 = ?',
        options: ['4', '5', '6', '7'],
        answer: 1,
        explanation: '用破十法：10-8=2，2+3=5。'
      },
      {
        type: 'fill',
        question: '16 - 9 = ____',
        answer: '7',
        explanation: '想：9+7=16，所以16-9=7。'
      },
      {
        type: 'choice',
        question: '12 - 5 = ?',
        options: ['5', '6', '7', '8'],
        answer: 2,
        explanation: '用破十法：10-5=5，5+2=7。'
      }
    ]
  },
  'grade1-unit3-2': {
    title: '分类与整理',
    questions: [
      {
        type: 'choice',
        question: '把苹果、香蕉、橘子归为一类，是按____分类。',
        options: ['颜色', '形状', '种类', '大小'],
        answer: 2,
        explanation: '它们都是水果，按种类（水果类）分类。'
      },
      {
        type: 'choice',
        question: '把红色的球、红色的积木、红色的汽车归为一类，是按____分类。',
        options: ['颜色', '形状', '用途', '大小'],
        answer: 0,
        explanation: '它们都是红色的，按颜色分类。'
      },
      {
        type: 'choice',
        question: '下面哪个不属于同一类？🐱🐶🐭🚗',
        options: ['🐱', '🐶', '🐭', '🚗'],
        answer: 3,
        explanation: '🐱🐶🐭都是动物，🚗是汽车，不属于同一类。'
      }
    ]
  },
  'grade1-unit4-2': {
    title: '100以内数的认识',
    questions: [
      {
        type: 'choice',
        question: '36里面有____个十和____个一。',
        options: ['3个十和6个一', '6个十和3个一', '3个十和3个一', '6个十和6个一'],
        answer: 0,
        explanation: '36 = 30 + 6，所以是3个十和6个一。'
      },
      {
        type: 'fill',
        question: '5个十和7个一合起来是____。',
        answer: '57',
        explanation: '5个十是50，7个一是7，50+7=57。'
      },
      {
        type: 'choice',
        question: '从50数到60，一共要数____个数。',
        options: ['9个', '10个', '11个', '12个'],
        answer: 2,
        explanation: '50、51、52、53、54、55、56、57、58、59、60，共11个数。'
      },
      {
        type: 'choice',
        question: '最大的两位数是____。',
        options: ['90', '99', '100', '10'],
        answer: 1,
        explanation: '最大的两位数是99。'
      }
    ]
  },
  'grade1-unit5-2': {
    title: '认识人民币',
    questions: [
      {
        type: 'choice',
        question: '1元 = ____角。',
        options: ['10角', '100角', '5角', '50角'],
        answer: 0,
        explanation: '1元等于10角。'
      },
      {
        type: 'choice',
        question: '1角 = ____分。',
        options: ['1分', '10分', '100分', '5分'],
        answer: 1,
        explanation: '1角等于10分。'
      },
      {
        type: 'choice',
        question: '一支铅笔8角，付1元，应找回____。',
        options: ['1角', '2角', '8角', '9角'],
        answer: 1,
        explanation: '1元=10角，10-8=2角，应找回2角。'
      },
      {
        type: 'fill',
        question: '3元5角 = ____角。',
        answer: '35',
        explanation: '3元=30角，30+5=35角。'
      }
    ]
  },
  'grade1-unit6-2': {
    title: '100以内的加法和减法（一）',
    questions: [
      {
        type: 'choice',
        question: '35 + 20 = ?',
        options: ['45', '55', '65', '75'],
        answer: 1,
        explanation: '35+20，十位3+2=5，个位还是5，所以是55。'
      },
      {
        type: 'choice',
        question: '48 - 30 = ?',
        options: ['15', '18', '28', '38'],
        answer: 1,
        explanation: '48-30，十位4-3=1，个位还是8，所以是18。'
      },
      {
        type: 'fill',
        question: '26 + 3 = ____',
        answer: '29',
        explanation: '个位6+3=9，十位不变，所以是29。'
      },
      {
        type: 'choice',
        question: '52 - 8 = ?',
        options: ['42', '44', '46', '48'],
        answer: 1,
        explanation: '个位2不够减8，向十位借1，12-8=4，十位4，所以是44。'
      }
    ]
  },
  'grade1-unit7-2': {
    title: '找规律',
    questions: [
      {
        type: 'choice',
        question: '2、4、6、8、____，横线上应该填几？',
        options: ['9', '10', '11', '12'],
        answer: 1,
        explanation: '规律是每次加2，8+2=10。'
      },
      {
        type: 'choice',
        question: '🔴🔵🔴🔵🔴____，横线上应该画什么？',
        options: ['🔴', '🔵', '🔶', '🔷'],
        answer: 1,
        explanation: '规律是🔴🔵重复，🔴后面是🔵。'
      },
      {
        type: 'fill',
        question: '5、10、15、20、____，横线上应该填几？',
        answer: '25',
        explanation: '规律是每次加5，20+5=25。'
      },
      {
        type: 'choice',
        question: '30、25、20、15、____，横线上应该填几？',
        options: ['5', '10', '12', '14'],
        answer: 1,
        explanation: '规律是每次减5，15-5=10。'
      }
    ]
  },
});
