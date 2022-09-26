<template>
  <section class="recommend">
    <div class="recommendbox">
      <h1>おすすめメニュー</h1>
      <p>今の気分に合わせて、あなたにぴったりのメニューをご紹介します。</p>
      <div class="qbox" v-if="status === 1">
        <h2>今の気分は？</h2>
        <button class="btn" v-on:click="q1('vasty')">がっつり食べたい</button>
        <button v-on:click="q1('relax')">ゆっくり落ち着きたい</button>
      </div>
      <!---------- がっつり ---------->
      <div class="qbox" v-if="status === 2">
        <h2>何が食べたい？</h2>
        <button v-on:click="q2('western')">洋食</button>
        <button v-on:click="q2('japanese')">和食</button>
      </div>
      <!-- 洋食 -->
      <div class="qbox" v-if="status === 4">
        <h2>好きな食材は？</h2>
        <button v-on:click="q4('cheese')">たっぷりチーズ</button>
        <button v-on:click="q4('tomato')">たっぷりトマト</button>
        <button v-on:click="q4('chicken')">チキンもありかも・・</button>
      </div>
      <!-- 和食 -->
      <div class="qbox" v-if="status === 5">
        <h2>どれが好き？</h2>
        <button v-on:click="q4('gem')">こだわりの逸品</button>
        <button v-on:click="q4('vege')">野菜を採りたい</button>
        <button v-on:click="q4('old')">昔ながらの味</button>
      </div>
      <!---------- ゆっくり ---------->
      <div class="qbox" v-if="status === 3">
        <h2>何が食べたい？</h2>
        <button v-on:click="q3('cake')">ケーキ</button>
        <button v-on:click="q3('cafe')">ドリンク</button>
      </div>
      <!-- ケーキ -->
      <div class="qbox" v-if="status === 6">
        <h2>好きな味は？</h2>
        <button v-on:click="q4('rich')">濃厚な味わい</button>
        <button v-on:click="q4('bitter')">ちょっと大人なビター</button>
        <button v-on:click="q4('fragrant')">香り豊かな味わい</button>
        <button v-on:click="q4('banana')">バナナ！</button>
      </div>
      <!-- ドリンク -->
      <div class="qbox" v-if="status === 7">
        <h2>好きな味は？</h2>
        <button v-on:click="q4('coffee')">定番のアレ</button>
        <button v-on:click="q4('snazzy')">オシャレな味</button>
        <button v-on:click="q4('discerning')">こだわりの味</button>
        <button v-on:click="q4('mild')">優しい味</button>
      </div>
      <!---------- 結果 ---------->
      <div class="qbox" v-if="status === 8">
        <h2>あなたに<br class="pcoff">ぴったりなのは…</h2>
        <img v-bind:src="image" />
        <h3>{{ name }}</h3>
        <h4>￥{{ price }}</h4>
        <p>です！</p>
        <button class="reset" v-on:click="reset">もう一度やる</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Recommend",
  data: () => {
    return {
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
    }
  },
  methods: {
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
};
</script>

<style scoped>
h2 {
  font-size: 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  line-height: 1.5;
  width: 100%;
}

.pcoff {
  display: none;
}
/*-------------------------
  レコメンド機能
-------------------------*/
.recommend {
  padding: 60px 0;
  text-align: center;
  background-color: #daefd3;
  opacity: 0.8;
  background-image: radial-gradient(#80c269 0.5px, transparent 0.5px),
    radial-gradient(#80c269 1px, #daefd3 1px);
  background-size: 20px 20px;
  background-position: 0 0, 10px 10px;
}

.recommend .recommendbox {
  width: 95%;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
  background-color: #fff;
}

.recommend .recommendbox .qbox {
  width: 100%;
  margin: 40px 0 20px;
}

.recommend .recommendbox .qbox h2 {
  margin-bottom: 20px;
}

.recommend .recommendbox .qbox button {
  font-size: 18px;
  padding: 10px 20px;
  border: 0;
  border-radius: 50em;
  background-color: #eee;
  cursor: pointer;
  transition: 0.3s;
}

.recommend .recommendbox .qbox button:hover {
  opacity: 0.6;
}

.recommend .recommendbox .qbox button:not(:first-of-type) {
  margin-left: 10px;
}

.recommend .recommendbox .qbox .reset {
  margin-top: 10px;
  font-size: 12px;
  background-color: #2b1f12;
  color: #fff;
}

.recommend .recommendbox .qbox img {
  border-radius: 50%;
  width: 190px;
  height: 180px;
  margin-bottom: 10px;
}

.recommend .recommendbox .qbox h3 {
  margin-bottom: 10px;
}
/*-------------------------
  SP
-------------------------*/
@media screen and (max-width: 767px) {
  .pcoff {
    display: block;
  }

  .recommend .recommendbox p {
    line-height: 25px;
  }

  .recommend .recommendbox .qbox button {
    margin-bottom: 10px;
  }
}
</style>
