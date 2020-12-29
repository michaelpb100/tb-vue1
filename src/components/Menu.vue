<template>
  <!-- <nav id="ml-menu" class="menu"  :class="menuOpen ? 'menu' : ''"> -->
  <!-- <nav> -->
  <nav id="ml-menu" class="menu" :class="menuOpen ? 'menu--show' : 'menu--hide'">
    <button class="action action--close fa fa-times" aria-label="Close Menu"></button>

    <!-- <div class="menu__wrap">
            <ul  aria-label="All">
                <li ><a class="menu__link" id="home" href="#">What we do</a></li>
                <li ><a class="menu__link" id="services" href="#">Services</a></li>
                <li ><a class="menu__link" id="contact" href="#">Contact</a></li>
                <li ><a class="menu__link" data-submenu="submenu-4"
                        aria-owns="submenu-4" href="#">Our Work</a></li>
            </ul>
            <ul data-menu="submenu-4" id="submenu-4" class="menu__level" tabindex="-1" role="menu" aria-label="Previous Jobs">
                <li ><a class="menu__link" id="TrailerRepair" href="#">Trailer Repair</a></li>
                <li ><a class="menu__link" id="Gates" href="#">Railings and Gates</a></li>
            </ul>
        </div> -->

    <div class="menu__wrap">
      <!-- <ul data-menu="main" class="menu__level" tabindex="-1" role="menu" aria-label="All"> -->
      <ul data-menu="main" class="menu__level" tabindex="-1" role="menu" aria-label="All">
        <li><a class="menu__link" id="home" href="#">What we do</a></li>
        <li><a class="menu__link" id="services" href="#">Services</a></li>
        <li><a class="menu__link" id="contact" href="#">Contact</a></li>
        <div>OUR WORK</div>
        <li><a class="menu__link" aria-owns="submenu-4" href="#">Trailer Repair</a></li>
        <li><a class="menu__link" aria-owns="submenu-4" href="#">Railings and Gates</a></li>
      </ul>
      <!-- <ul data-menu="submenu-4" id="submenu-4" class="menu__level" tabindex="-1" role="menu" aria-label="Previous Jobs">
                <li ><a class="menu__link" id="TrailerRepair" href="#">Trailer Repair</a></li>
                <li ><a class="menu__link" id="Gates" href="#">Railings and Gates</a></li>
            </ul> -->
    </div>
  </nav>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from "vue-property-decorator";

  @Component
  export default class Menu extends Vue {
    private menuOpen = true;
    @Prop() private mobileMode!: boolean;
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .menu {
    position: fixed;
    top: 60px;
    left: 0;
    width: 300px;
    height: calc(100vh - 30px);
    // display: none;
    // background: #ffffff;
    background: blue;
  }

  .menu--hide {
    display: none;
  }

  .menu--show {
    display: block;
  }

  .menu__wrap {
    position: absolute;
    top: 3.5em;
    bottom: 0;
    overflow: hidden;
    width: 100%;
  }

  .menu__level {
    position: absolute;
    top: 0;
    left: 0;
    // visibility: hidden;
    overflow: hidden;
    overflow-y: scroll;
    width: calc(100% + 50px);
    height: 100%;
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  .menu__level:focus {
    outline: none;
  }

  .menu__level--current {
    visibility: visible;
  }

  .menu__item {
    display: block;
    width: calc(100% - 50px);
  }

  .menu__link {
    font-weight: 600;
    position: relative;
    display: block;
    padding: 1em 2.5em 1em 1.5em;
    /* color: #bdbdbd; */
    color: black;
    -webkit-transition: color 0.1s;
    transition: color 0.1s;
  }

  .menu__link[data-submenu]::after {
    content: "\e904";
    font-family: "feather";
    position: absolute;
    right: 0;
    padding: 0.25em 1.25em;
    color: #2a2b30;
  }

  .menu__link:hover,
  .menu__link:focus,
  .menu__link[data-submenu]:hover::after,
  .menu__link[data-submenu]:focus::after {
    color: #5c5edc;
  }

  .menu__link--current::before {
    content: "\00B7";
    font-size: 1.5em;
    line-height: 0;
    position: absolute;
    top: 50%;
    left: 0.5em;
    height: 4px;
    color: #5c5edc;
  }

  [class^="animate-"],
  [class*=" animate-"] {
    visibility: visible;
  }

  // .menu {
  // 		z-index: 1000;
  // 		top: 0;
  // 		width: 100%;
  // 		height: 100vh;
  // 		-webkit-transform: translate3d(-100%, 0, 0);
  // 		transform: translate3d(-100%, 0, 0);
  // 		-webkit-transition: -webkit-transform 0.3s;
  // 		transition: transform 0.3s;
  // 	}
  // 	.menu--open {
  // 		-webkit-transform: translate3d(0, 0, 0);
  // 		transform: translate3d(0, 0, 0);
  // 	}

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
    // display: none;
    color: #45464e;
  }
</style>
