<template>
  <main>
    <div class="mainimg">
      <img src="images/slide2.png" alt="カフェLeafの紹介画像">
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
</style>
