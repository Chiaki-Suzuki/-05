<template>
  <section class="menu" id="menu">
    <div class="menuwhite">
      <h1>メニュー</h1>
      <div class="menu_seatch">
        <p>表示変更：</p>
        <select id="search" v-model="menuOrder">
          <option value="all">全ての商品</option>
          <option value="lunch">ランチ</option>
          <option value="food">フード</option>
          <option value="sweets">スウィーツ</option>
          <option value="drink">ドリンク</option>
        </select>
      </div>
      <div class="lunch" v-if="menuOrder === 'lunch' | menuOrder === 'all'">
        <h2>ランチ</h2>
        <figure v-for="lunchItem in lunch" v-bind:key="lunchItem.name">
          <img v-bind:src="lunchItem.image" v-bind:alt="lunchItem.name">
          <figcaption>
            <h3>{{ lunchItem.name }}</h3>
            <p>{{ lunchItem.desc }}</p>
            <h4>￥{{ lunchItem.price }}</h4>
            <p>{{ lunchItem.annotation }}
            </p>
          </figcaption>
        </figure>
      </div><!-- lunch end -->
      <div class="food" v-if="menuOrder === 'food' | menuOrder === 'all'">
        <h2>フード</h2>
        <figure v-for="foodItem in food" v-bind:key="foodItem.name">
          <img v-bind:src="foodItem.image" v-bind:alt="foodItem.name">
          <figcaption>
            <h3>{{ foodItem.name }}</h3>
            <p>{{ foodItem.desc }}</p>
            <h4>￥{{ foodItem.price }}</h4>
            <p>{{ foodItem.annotation }}
            </p>
          </figcaption>
        </figure>
      </div><!-- food end -->
      <div class="sweet" v-if="menuOrder === 'sweets' | menuOrder === 'all'">
        <h2>スウィーツ</h2>
        <figure v-for="sweetsItem in sweets" v-bind:key="sweetsItem.name">
          <img v-bind:src="sweetsItem.image" v-bind:alt="sweetsItem.name">
          <figcaption>
            <h3>{{ sweetsItem.name }}</h3>
            <p>{{ sweetsItem.desc}}</p>
            <h4>￥{{ sweetsItem.price }}</h4>
            <p>{{ sweetsItem.annotation }}
            </p>
          </figcaption>
        </figure>
      </div><!-- sweet end -->
      <div class="drink" v-if="menuOrder === 'drink' | menuOrder === 'all'">
        <h2>ドリンク</h2>
        <figure v-for="drinkItem in drink" v-bind:key="drinkItem.name">
          <img v-bind:src="drinkItem.image" v-bind:alt="drinkItem.name">
          <figcaption>
            <h3>{{ drinkItem.name }}</h3>
            <h4>￥{{ drinkItem.price }}</h4>
            <p>{{ drinkItem.annotation }}
            </p>
          </figcaption>
        </figure>
      </div><!-- drink end -->
    </div>
  </section>
</template>

<script>
export default {
  name: 'Drink',
};
</script>

<style>
/*-------------------------
  メニュー
-------------------------*/
.menu {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  text-align: center;
  background-image: url(../assets/images/backd.png);
  background-repeat: no-repeat;
  background-size: cover;
  padding: 3% 0 3% 0;

}

.menuwhite {
  background-color: #fff;
  width: 95%;
  height: 95%;
  margin: 0 auto;
  text-align: center;
  /*padding-top: 50px;*/
}

.menu .menu_seatch {
  margin: 0 auto 30px;
}

.menu .menu_seatch p {
  margin: 0 auto;
  text-align: center;
}

.menu .menu_seatch select {
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.menu h1 {
  margin-bottom: 40px;
  padding-top: 40px;
}

.menu figure {
  display: inline-block;
  margin: 20px 20px 0 20px;
  overflow: hidden;
  height: 380px;
}

.menu figure img {
  text-align: center;
  border-radius: 50%;
  width: 190px;
  height: 180px;
  margin-bottom: 10px;
}

.menu figcaption {
  text-align: center;
}

.menu p {
  width: 250px;
  text-align: left;
  font-size: 0.9em;
  line-height: 1.2em;
  padding: 5px;
}

.lunch,
.food,
.sweet {
  margin-bottom: 100px;
}

.drink h3 {
  width: 260px;
}
/*-------------------------
  SP
-------------------------*/
@media screen and (max-width: 767px) {
  .menu{
    margin: 20px auto 0 auto;
  }

  .menu figure{
    height:auto;
  }

  .menu p{
    width:80%;
    margin: 0 auto;
  }

  .lunch, .food, .sweet{
    margin-bottom: 50px;
  }

  .drink h3{
    width: 400px;
  }

  .drink p{
    width: 54%;
  }
}
</style>
