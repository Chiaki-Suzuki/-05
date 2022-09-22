<template>
  <div class="recruit" id="recruit">
    <div class="recruitwhite">
      <!--div class="recruitimg"-->
      <h1>採用情報</h1>
      <span class="recb">
        <p>アルバイト募集中</p>
      </span>
      <p>
        カフェ『Leaf』では土日のランチタイムに<br />
        働ける仲間を募集中です。
      </p>
      <p>
        コーヒーの知識や経験などは問いません。<br />
        たくさんのご応募お待ちしております。
      </p>
      <img src="images/pan.png" />
      <h2>募集要項</h2>
      <table>
        <tr>
          <th>雇用形態</th>
          <td>東京都武蔵村山市三ツ藤1-119-11</td>
        </tr>
        <tr>
          <th>時給</th>
          <td>985円～</td>
        </tr>
        <tr>
          <th>休日</th>
          <td>平日</td>
        </tr>
        <tr>
          <th>勤務地</th>
          <td>武蔵村山市</td>
        </tr>
        <tr>
          <th>年齢</th>
          <td>18歳以上</td>
        </tr>
      </table>
      <!--/div-->
    </div>
  </div>
  <!-- recruit end -->
</template>

<script>
export default {
  name: "Recommend",
};
</script>

<style>
.recruit {
  width: 100%;
  margin: 50px auto 0 auto;
  text-align: center;
  background-image: url(../images/backc.png);
  background-repeat: no-repeat;
  background-size: cover;
  padding: 3% 0 3% 0;
  position: relative;
}

.recruit h1 {
  margin-bottom: 40px;
  padding-top: 40px;
}

.recruitwhite {
  background-color: #fff;
  width: 95%;
  height: 95%;
  margin: 0 auto;
  text-align: center;
}

.recruit p {
  margin: 20px 0;
}

.recruit h2 {
  margin-top: 70px;
}

.recb p {
  font-size: 1.3em;
}

.recruit table {
  margin-bottom: 40px;
}

.recruit img {
  position: absolute;
  top: 100px;
  left: -30px;
  width: 22%;
}
/*-------------------------
  SP
-------------------------*/
@media screen and (max-width: 767px) {
  .recruit p {
    margin: 20px auto;
    text-align: center;
    width: 78%;
  }
}
</style>
