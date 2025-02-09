<template>
  <div id="app">
    <Header />
    <div class="main">
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Helpers from './helpers';

export default Vue.extend({
  name: 'App',
  components: {
    Header, Footer
  }
});

// Preload heavy images or gifs that are used in other pages
Helpers.preloadImages([
  "img/projects/tower_of_heck_thumb.jpg",
  "img/projects/core_affiliates_thumb.jpg",
  "img/projects/core_bootcamp_thumb.jpg",
  "img/projects/core_invitational_thumb.png",
  "img/projects/crayta_ignition_thumb.jpg",
  "img/projects/cloudflight_coding_contest_thumb.jpg",
  "img/projects/hash_code_thumb.jpg",
  "img/projects/codingame_thumb.jpg",
  "img/projects/twitchplayzhs_thumb.jpg",
  "img/projects/accelerator_thumb.jpg",
  "img/projects/pogo_pirates_thumb.jpg",
  "img/projects/troll_obby_thumb.jpg",
  "img/projects/daigoro_thumb.jpg",
  "img/projects/sky_island_adventure_thumb.jpg",
  "img/projects/arcade_planet_thumb.jpg",
  "img/projects/monkey_minigames_thumb.jpg",
  "img/projects/mad_balls_arena_thumb.jpg",
  "img/projects/hulin_island_thumb.jpg",
]);

</script>

<style lang="less">

@import './css/projects.less';
@import './css/variables.less';
@import './css/global-styles.less';

html, body {
  margin: 0px;
  background-color: @bodyBgColor;
}

#app {
  background-color: @contentBgColor;
  color: @textColor;

  font-family: 'Karla', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  font-size: 1.1em;
  line-height: 1.6em;
  text-align: justify;
}

h1, h2, h3, h4, h5 {
  text-align: left;
}

a {
  color: @textColor;
  text-decoration: none;
  opacity: 0.5;
}
a:hover, .router-link-exact-active {
  opacity: 1;
}

h1 {
  font-size: 2.5em;
  font-weight: 100;
  margin-top: -10px;
  margin-bottom: 40px;
  margin-left: -2px; // hack to make it "seem" more aligned with smaller text content
  line-height: 1.1em;
}

.main {
    padding: 12px;
  }

@media only screen and (min-width: 620px){

  #app {
    text-align: left;
    line-height: 1.8em;
  }

  h1 {
    margin-top: 0.67em;
    margin-bottom: 80px;
    line-height: 0.7em;
  }

  .main {
    padding: 0px 40px 40px 180px;
  }

  .main, .header, .footer {
    max-width: 1200px;
    margin: 0 auto;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.2s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

</style>
