<template>
  <main>
    <div class="mainimg">
      <img src="../assets/images/slide2.png" alt="カフェLeafの紹介画像">
    </div>
    <Recommend></Recommend>
    <Menu></Menu>
    <News></News>
    <Leaf></Leaf>
    <Shop></Shop>
    <Recruit></Recruit>
    <Contact></Contact>
  </main>
</template>

<script>
import Recommend from '../components/Recommend.vue'
import Menu from '../components/Menu.vue'
import News from '../components/News.vue'
import Leaf from '../components/Leaf.vue'
import Shop from '../components/Shop.vue'
import Recruit from '../components/Recruit.vue'
import Contact from '../components/Contact.vue'

export default {
  name: "Header",
  components: {
    Recommend,
    Menu,
    News,
    Leaf,
    Shop,
    Recruit,
    Contact
  }
};
</script>

<style>
.mainimg {
  width: 100%;
}

.mainimg img {
  display: block;
  margin: 0 auto;
  text-align: center;
  width: 100%;
  height: 60%;
}

@media screen and (max-width: 768px) {
  .mainimg img {
    display: block;
    margin: 20px auto 0 auto;
    text-align: center;
    width: 100%;
  }
}
</style>
