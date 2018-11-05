<template>
  <div class="home">
    <NavBar></NavBar>
    <MainPage></MainPage>
    <!-- <AboutUs></AboutUs> -->
    <FooterView></FooterView>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import MainPage from "@/components/MainPage.vue";
// import AboutUs from "@/components/Aboutus.vue";
import FooterView from "@/components/FooterView.vue";

export default {
  name: "home",
  components: {
    NavBar,
    MainPage,
    // AboutUs,
    FooterView
  }
};
</script>

<style lang="scss">
</style>
