<template>
  <Header />
  <div>
    <router-view />
  </div>
  <Footer />
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
#app {
  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR");
  font-family: "Noto Sans KR", sans-serif;
  max-width: 1140px;
  width: 100%;
  margin: auto;
}

h1 {
  font-weight: 300;
}
</style>
