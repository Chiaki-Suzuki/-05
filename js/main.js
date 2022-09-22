let app = new Vue({
  el: '#app',
  data: {
    lunch: [],
    lunchAnno: '※プラス200円でコーヒーまたは紅茶が付きます。',
    food: [],
    foodAnno: '※ランチタイムにはプラス200円でコーヒーまたは紅茶が付きます。',
    sweets: [],
    sweetsAnno: '※ケーキを注文されたお客様は、プラス200円でコーヒーまたは紅茶が付きます。',
    drink: [],
    drinkAnno: '※200円でおかわりができます。',
    menuOrder: 'all',
    // ここからレコメンド用
    ans1: '',
    ans2: '',
    ans3: '',
    image: '',
    name: '',
    price:'',
    status: 1,
    menu: {
      vasty: {
        western: {
          cheese: {
            image: 'images/lunch1.jpg',
            name: 'Wチーズのピザランチ',
            price: '880'
          },
          tomato: {
            image: 'images/lunch2.jpg',
            name: 'トマトとチーズのピザランチ',
            price: '880'
          },
          chicken: {
            image: 'images/food3.jpg',
            name: '焼きリゾット',
            price: '850'
          }
        },
        japanese: {
          gem: {
            image: 'images/food2.jpg',
            name: '自家製ドライカレー',
            price: '900'
          },
          vege: {
            image: 'images/food1.jpg',
            name: '自家製スープカレー',
            price: '900'
          },
          old: {
            image: 'images/food4.jpg',
            name: 'ナポリタン',
            price: '750'
          }
        }
      },
      relax: {
        cake: {
          rich: {
            image: 'images/sweet1.jpg',
            name: 'チーズケーキ',
            price: '500'
          },
          bitter: {
            image: 'images/sweet2.jpg',
            name: 'フォンダショコラ',
            price: '500'
          },
          fragrant: {
            image: 'images/sweet3.jpg',
            name: 'ダージリンとハーブのケーキ',
            price: '480'
          },
          banana: {
            image: 'images/sweet4.jpg',
            name: 'バナナケーキ',
            price: '450'
          }
        },
        cafe: {
          coffee: {
            image: 'images/drink1.jpg',
            name: 'コーヒー',
            price: '380'
          },
          snazzy: {
            image: 'images/drink2.jpg',
            name: 'ラベンダーティー',
            price: '530'
          },
          discerning: {
            image: 'images/drink3.jpg',
            name: '手作りジンジャエール',
            price: '480'
          },
          mild: {
            image: 'images/drink4.jpg',
            name: 'カフェラテ',
            price: '520'
          }
        }
      }
    }
  },
  // created: function () {
  mounted: function () {
    // JSON呼び出し・注釈を表示後に配列に格納
    this.jsonFunc('lunch', this.lunch, this.lunchAnno);
    this.jsonFunc('food', this.food, this.foodAnno);
    this.jsonFunc('sweets', this.sweets, this.sweetsAnno);
    this.jsonFunc('drink', this.drink, this.drinkAnno);
  },
  methods: {
    // JSON読み込み
    async jsonFunc(kind, emptyArray, annotation) {
      let url = `json/${kind}.json`;
      await axios.get(url).then((x) => {
        this.annotationDisp(x.data, emptyArray, annotation);
      });
    },
    // 注釈を表示
    annotationDisp: function (data, array, words) {
      for (i = 0; i < data.length; i++){
        if (data[i].annotation === '1') {
          data[i].annotation = words;
        }
        // 注釈なし
        else if (data[i].annotation === '0') {
          data[i].annotation = '';
        }
        // 空の配列にJSONを格納
        array.push(data[i]);
      }
    },
    // 今の気分は？
    q1: function (ans) {
      this.ans1 = ans;
      if (ans === 'vasty') {
        this.status = 2;
      } else if (ans === 'relax') {
        this.status = 3;
      }
    },
    // 何が食べたい？
    q2: function (ans) {
      this.ans2 = ans;
      if (ans === 'western') {
        this.status = 4;
      } else if (ans === 'japanese') {
        this.status = 5;
      }
    },
    q3: function (ans) {
      this.ans2 = ans;
      if (ans === 'cake') {
        this.status = 6;
      } else if (ans === 'cafe') {
        this.status = 7;
      }
    },
    // 好きな食材（味）は？
    q4: function (ans) {
      this.ans3 = ans;
      this.status = 8;
      this.image = this.menu[this.ans1][this.ans2][this.ans3].image
      this.name = this.menu[this.ans1][this.ans2][this.ans3].name
      this.price = this.menu[this.ans1][this.ans2][this.ans3].price
    },
    reset: function () {
      this.status = 1;
    }
  }
})
