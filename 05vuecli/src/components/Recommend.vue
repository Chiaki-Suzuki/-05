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
        <h2>あなたにぴったりなのは…</h2>
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
};
</script>

<style>
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
  .recommend .recommendbox p {
    line-height: 25px;
  }

  .recommend .recommendbox .qbox button {
    margin-bottom: 10px;
  }
}
</style>
