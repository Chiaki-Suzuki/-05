<template>
  <div class="contact" id="contact">
    <div class="hukidashi">
      <p>
        カフェ『Leaf』は様々な会合のプランやママさんランチなども受付ております。<br />
        ぜひお気軽にお問い合わせ下さい。
      </p>
    </div>
    <div class="infd">
      <img src="../assets/images/line.png" />
      <p><span class="telicon">お問い合わせ・ご予約</span>042-569-6509</p>
      <img src="../assets/images/line.png" />
    </div>
    <!-- sns start -->
    <div class="sns">
      <a href="#"
        ><img src="../assets/images/iconi.jpg" alt="インスタグラムのアイコン"
      /></a>
      <a href="#"
        ><img src="../assets/images/iconf.png" alt="フェイスブックのアイコン"
      /></a>
      <a href="#"
        ><img src="../assets/images/icona.png" alt="アメーバブログのアイコン"
      /></a>
    </div>
    <!-- sns end -->
    <div class="top">
      <a href="#top"><img src="../assets/images/topimg.png" /></a>
    </div>
  </div>
  <!-- contact end -->
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style>
.contact {
  width: 100%;
  margin: 50px auto 0 auto;
  text-align: center;
}

.hukidashi {
  height: 200px;
  background-image: url(../assets/images/hukidashi.png);
  background-repeat: no-repeat;
  background-size: 600px 150px;
  background-position: 50%;
}

.hukidashi p {
  padding-top: 55px;
  color: #fff;
  line-height: 1.5em;
}

.infd p {
  font-size: 2em;
  margin: 10px 0;
}

.infd img {
  width: 700px;
}

.telicon:after {
  content: url(../assets/images/icont.png);
  position: relative;
  top: 5px;
  margin: 0 10px 0 20px;
}

.sns {
  width: 100%;
  margin: 40px auto 40px auto;
  text-align: center;
}

.sns img {
  overflow: hidden;
  height: 60px;
  margin: 20px;
}

.sns img:hover {
  opacity: 0.7;
}

.top {
  position: relative;
}

.top img {
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 4%;
  opacity: 0.7;
}

.top img:hover {
  opacity: 1;
}
/*-------------------------
  SP
-------------------------*/
@media screen and (max-width: 767px) {
  .hukidashi {
    background-size: 90% 70%;
  }
  .hukidashi p {
    width: 80%;
    padding-top: 30px;
    margin: 50px auto 0 auto;
    text-align: center;
  }
  .infd p {
    font-size: 1em;
  }
  .infd img {
    width: 80%;
  }
  .sns img {
    height: 50px;
  }
  .top img {
    width: 8%;
  }
}
</style>
