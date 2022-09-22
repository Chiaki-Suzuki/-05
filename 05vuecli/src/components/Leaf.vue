<template>
  <div class="leaf" id="leaf">
    <div class="leafwhite">
      <h1>Leafとは</h1>
      <div class="leafimg">
        <div class="leafp">
          <p class="bigp">素敵な時間を過ごしてほしい</p>
          <p class="leftp">
            私たちは、ご来店いただいたお客様に<br />
            木の温もりを感じて頂いたり、窓から<br />
            見える自然界の癒しの景色を眺めながら<br />
            ホッとして頂けるような空間の提供を<br />
            目指しています。
          </p>
          <p class="rightp">
            空いた時間をお気に入りの時間に。<br />
            ドックカフェコーナーもテラスに<br />
            あるので可愛い愛犬とご一緒に<br />
            お食事をお楽しみいただけます。
          </p>
        </div>
      </div>
    </div>
  </div>
  <!-- leaf end -->
</template>

<script>
export default {
  name: "Leaf",
};
</script>

<style>
.leaf {
  width: 100%;
  margin: 0 auto;
  text-align: center;
  background-image: url(../images/backs2.png);
  background-repeat: no-repeat;
  background-size: cover;
  padding: 3% 0 3% 0;
}

.leaf p {
  line-height: 1.5em;
  text-align: left;
}

.leafwhite {
  background-color: #fff;
  width: 95%;
  height: 95%;
  margin: 0 auto;
  text-align: center;
}

.leaf h1 {
  margin-bottom: 40px;
  padding-top: 40px;
}

.leafimg {
  height: 400px;
  background-image: url(../images/backh.png);
  background-repeat: no-repeat;
  background-size: 60%;
  background-position: 40% 0;
  margin-bottom: 5%;
}

.bigp {
  font-size: 1.4em;
  font-weight: bold;
  margin: 0 0 4% 58%;
  padding-top: 2%;
}

.leftp {
  margin: 0 0 2% 51%;
}

.rightp {
  margin: 0 0 0 68%;
}
/*-------------------------
  SP
-------------------------*/
@media screen and (max-width: 767px) {
  .leafimg {
    background-size: 80%;
  }
  .bigp {
    font-size: 1em;
    margin: 0 0 4% 45%;
    width: 60%;
  }
  .leftp {
    margin: 0 0 2% 30%;
  }
  .rightp {
    margin: 0 0 0 50%;
  }
}
</style>
