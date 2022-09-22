<template>
  <div class="new">
    <h1>最新情報</h1>
    <div class="scroll">
      <div class="newcom">
        <p>
          <time datetime="2018-10-01">2018年10月1日</time
          >今年もハロウィンの季節がやってきましたね！<br />
          リーフでも暖炉の上に、ハロウィンの飾り付けをしました(*^-^*)
        </p>
        <p>
          お食事されながら、ハロウィン気分を味わっていただけたら良いなぁっと思います。
        </p>
      </div>
      <div class="newcom">
        <p>
          <time datetime="2018-08-11">2018年08月11日</time
          >夏期休業のお知らせ。<br />
          誠に申し訳ございませんが、下記の期間　お休みさせていただきます。
        </p>
        <p>
          08月15日～08月17日<br />
          尚、08月18日から、通常通り営業しております。
        </p>
      </div>
      <div class="newcom">
        <p>
          <time datetime="2018-07-22">2018年07月22日</time
          >お店のテラスなどで、バーベキューが出来るコーナーを設置しました！
        </p>
        <p>
          食材やドリンクなど、お持ち込みいただければ<br />
          場所代とガス代のみお支払い頂きますので、ご自由にお使い下さいませ。<br />
          なお、その際には事前にご連絡下さいませ。
        </p>
      </div>
    </div>
    <!-- new end -->
  </div>
</template>

<script>
export default {
  name: "News",
};
</script>

<style>
.new {
  width: 100%;
  height: 23em;
  margin: 100px auto 0 auto;
  text-align: center;
  background-image: url(../assets/images/curry.png);
  background-repeat: no-repeat;
  background-position: 0 100px;
  /*background-size: ;*/
}

.new .newcom {
  border-bottom: #2b1f12 dotted 1px;
  width: 100%;
  text-align: center;
  margin: 10px auto;
  padding: 5px 0 5px 0;
}

.newcom p {
  text-align: left;
}

.scroll {
  height: 200px;
  overflow: auto;
  padding: 0 10px 10px 10px;
  width: 50%;
  text-align: center;
  margin: 10px auto;
  background-color: #f1dfc3;
}

/*スクロールバーの横幅指定*/
.scrollArea.deco::-webkit-scrollbar {
  width: 15px;
}

/*スクロールバーの背景色・角丸指定*/
.scrollArea.deco::-webkit-scrollbar-track {
  border-radius: 10px;
  background: #f2f2f2;
}

/*スクロールバーの色・角丸指定*/
.scrollArea.deco::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: #09c9d9;
}

/*-------------------------
  SP
-------------------------*/
@media screen and (max-width: 767px) {
.new {
  background-position: -30px 240px;
  background-size: 70%;
}
  .scroll {
    width: 80%;
  }
}
</style>
