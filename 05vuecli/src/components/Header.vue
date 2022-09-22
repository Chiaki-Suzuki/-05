<template>
  <header>
    <nav class="pcnav">
      <span class="inf">
        <p><a href="#contact">お問い合わせ</a></p>
      </span>
      <div class="navmenu">
        <div class="navli"><img src="images/logob.png" /></div>
        <div class="navli">
          <span class="nava"><a href="#menu">メニュー</a></span>
        </div>
        <div class="navli">
          <span class="nava"><a href="#leaf">Leafとは</a></span>
        </div>
        <div class="navli">
          <span class="nava"><a href="#shop">店舗情報</a></span>
        </div>
        <div class="navli">
          <span class="nava"><a href="#recruit">採用情報</a></span>
        </div>
      </div>
      <!--navmenu end-->
    </nav>
    <nav class="spnav">
      <div class="navmenu2">
        <div class="navli2"><img src="images/logob.png" /></div>
        <span class="inf2">
          <p><a href="#contact">お問い合わせ</a></p>
        </span>
        <ul>
          <li>
            <span class="nava2"><a href="#menu">メニュー</a></span>
          </li>
          <li>
            <span class="nava2"><a href="#leaf">Leafとは</a></span>
          </li>
          <li>
            <span class="nava2"><a href="#shop">店舗情報</a></span>
          </li>
          <li>
            <span class="nava2"><a href="#recruit">採用情報</a></span>
          </li>
        </ul>
      </div>
      <!--navmenu end-->
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
nav .inf a {
  color: #2b1f12;
  position: absolute;
  top: 40%;
  right: 19.5%;
  /*float: right;*/
}

nav .inf a:hover {
  color: #815629;
}

nav {
  width: 100%;
  height: 130px;
  position: relative;
}

.nava a {
  text-decoration: none;
  background-color: #2b1f12;
  padding: 0.2em 3.6vw;
  color: #fff;
  margin: 0.2em;
  display: block;
}

.nava a:hover {
  background-color: #815629;
}

nav img {
  margin: 0 0.2em;
}

.navmenu {
  margin: 0 5%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.nava {
  margin-bottom: 10%;
}

.spnav {
  display: none;
}

/*-------------------------
  SP
-------------------------*/
@media screen and (max-width: 767px) {
  .spnav {
    display: block;
  }

  nav .inf2 p {
    margin: 0;
  }
  nav .inf2 a {
    color: #2b1f12;
    float: none;
    position: static;
    margin: 0 auto 5px auto;
    text-align: center;
    display: block;
  }
  nav .inf2 a:hover {
    color: #815629;
  }
  .nava2 a {
    text-decoration: none;
    background-color: #2b1f12;
    padding: 0.2em 3.6vw;
    color: #fff;
    margin: 0 0.2em;
    display: inline;
  }
  .nava2 a:hover {
    background-color: #815629;
  }
  .navmenu2 {
    position: relative;
  }
  .nava {
    margin-bottom: 10%;
  }
  header {
    width: 100%;
    height: 145px;
  }
  nav img {
    margin: 0 auto 12px auto;
    text-align: center;
    display: block;
  }
  nav .inf2 a {
    color: #2b1f12;
  }
  .spnav ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: space-around;
    height: 70px;
  }
  nav li {
    margin: 1% 1%;
    background-color: #2b1f12;
    padding: 0.5em 2em;
  }
  nav li a {
    text-decoration: none;
    background-color: #2b1f12;
    padding: 0.2em 4vw;
    color: #fff;
    margin: 5em;
  }
  .pcnav {
    display: none;
  }
}
</style>
