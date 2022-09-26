<template>
  <div class="shop" id="shop">
    <h1>店舗情報</h1>
    <img src="../assets/images/cake.png" />
    <div class="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.1312873425413!2d139.37798171460713!3d35.74757773393907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018e009793bfae5%3A0xd8d6f698840deeda!2z44CSMjA4LTAwMjEg5p2x5Lqs6YO95q2m6JS15p2R5bGx5biC5LiJ44OE6Jek77yR5LiB55uu77yR77yR77yZ4oiS77yR77yR!5e0!3m2!1sja!2sjp!4v1564368977426!5m2!1sja!2sjp"
        width="400"
        height="300"
        frameborder="0"
        style="border: 0"
        allowfullscreen
      ></iframe>
    </div>
    <div class="shopinfo">
      <p>カフェ『Leaf』</p>
      <table>
        <tr>
          <th>住所</th>
          <td>東京都武蔵村山市三ツ藤1-119-11</td>
        </tr>
        <tr>
          <th>TEL</th>
          <td>042-569-6509</td>
        </tr>
        <tr>
          <th>営業時間</th>
          <td>
            月曜～木曜　11：00～20：00<br />
            金曜～日曜　11：00～21：00
          </td>
        </tr>
        <tr>
          <th>定休日</th>
          <td>水曜日</td>
        </tr>
      </table>
      <span class="kome">
        <p>※駐車場は少し離れた所にあります。</p>
      </span>
    </div>
  </div>
  <!-- shop end -->
</template>

<script>
export default {
  name: "Shop",
};
</script>

<style>
.shop {
  width: 100%;
  margin: 100px auto 140px auto;
  text-align: center;
  position: relative;
}

.shop h1 {
  margin-bottom: 40px;
}

.shop p {
  /*margin:0 400px 0 0;*/
  font-size: 1.2em;
  font-weight: bold;
}

.kome p {
  margin: 0 auto;
  text-align: center;
  font-size: 1em;
  font-weight: normal;
}

.shop img {
  position: absolute;
  top: -180px;
  right: 0;
  width: 26%;
}

.map {
  float: left;
  margin-left: 15%;
}

.shopinfo {
  margin-right: 15%;
}
/*-------------------------
  SP
-------------------------*/
@media screen and (max-width: 767px) {
  .shop p {
    font-size: 1em;
  }
  .kome p {
    font-size: 90%;
  }
  .shop h1 {
    margin-bottom: 10px;
  }
  .map {
    float: unset;
    margin: 0 auto 20px auto;
    text-align: center;
  }
  iframe {
    width: 90%;
  }
  .shopinfo {
    margin: 0 auto;
    text-align: center;
  }
}
</style>
