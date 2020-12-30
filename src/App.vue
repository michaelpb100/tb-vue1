<template>
  <div id="app">
    <Header />
    <ResponsiveNavigation background="#fff" link-color="#777" hoverBackground="#ddd" />
    <div class="outlet">
      <div class="header-image">
        <img alt="Tom Brooks Engineering" height="120" width="240" src="../public/images/tom-brooks-logo-wide.jpg" />
      </div>
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  import Header from "@/components/Header.vue";
  import ResponsiveNavigation from "@/components/ResponsiveNavigation.vue";

  @Component({
    components: {
      Header,
      ResponsiveNavigation
    }
  })
  export default class App extends Vue {}
</script>

<style lang="scss">
  @import "https://unpkg.com/ionicons@4.2.2/dist/css/ionicons.min.css";

  .outlet {
    position: relative;
    margin-left: 300px;
    // background: #42b983;
  }

  .header-image {
    display: flex;
    width: 300px;
    width: 100%;
    justify-content: flex-end;
    margin-right: 150px;
  }

  @media screen and (max-width: 759px) {
    .outlet {
      margin-left: 70px;
      // background: #42b983;
    }
    .header-image {
      display: none;
    }
  }

  .icon {
    font-family: "feather";
    font-weight: normal;
    font-style: normal;
    font-variant: normal;
    line-height: 1;
    text-transform: none;
    /* Better Font Rendering =========== */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    speak: none;
  }

  /* Open and close buttons */

  .action {
    position: absolute;
    display: block;
    margin: 0;
    padding: 50;
    cursor: pointer;
    border: none;
    background: none;
  }

  .action:focus {
    outline: none;
  }

  .action--close {
    font-size: 1.1em;
    top: 1.25em;
    right: 1em;
    display: none;
    color: #45464e;
  }

  #app {
    overflow-y: auto;
    height: 100vh;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
