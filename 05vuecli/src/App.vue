<template>
  <div id="app">
    <component is="style">
      h1:before {
        content: url(/images/iconmin.png);
        position: relative;
        top: 5px;
        margin-right: 5px;
      }

      h2:after {
        content: url(/images/lines.png);
        position: relative;
        bottom: 4px;
        margin: 0 10px 0 20px;
      }

      h2:before {
        content: url(/images/lines.png);
        position: relative;
        bottom: 4px;
        margin: 0 20px 0 10px;
      }
      @media screen and (max-width: 768px) {
        h2::before,
        h2::after {
          content: url(images/linemin.png);
          position: relative;
          bottom: 4px;
        }
      }
    </component>
    <Header></Header>
    <Contents></Contents>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Contents from "./components/Contents.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Contents,
    Footer,
  }
};
</script>

<style>
/*-------------------------
  グローバル
-------------------------*/
body {
  margin: 0;
  line-height: 1;
}

ul, ol {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

p {
  color: #2b1f12;
  margin: 0;
}

h1 {
  color: #2b1f12;
  font-size: 2em;
  margin: 10px;
}

h3 {
  color: #2b1f12;
  font-size: 1.1em;
}

h4 {
  color: #2b1f12;
  font-size: 1em;
  margin-bottom: 10px;
}

table {
  margin: 10px auto 10px auto;
  text-align: center;
  /*border: solid 1px #2b1f12;*/
}

th {
  width: 80px;
  vertical-align: middle;
  padding: 15px;
  text-align: left;
  font-weight: normal;
  /*border: solid 1px #2b1f12;*/
}

td {
  width: 250px;
  padding: 15px;
  text-align: left;
  /*border: solid 1px #2b1f12;*/
}

/* micro clearfx */
.cf:before,
.cf:after {
  content: "";
  display: table;
}

.cf:after {
  clear: both;
}

.cf {
  zoom: 1;
}

/*-------------------------
  SP
-------------------------*/
@media screen and (max-width:767px) {
h1{
    font-size: 1.6em;
}

th{
    vertical-align: top;
    padding: 0 2% 4% 3%;
    font-size: 90%;
}
td{
    padding: 0 3% 4% 0;
    font-size: 90%;
}

}
</style>
