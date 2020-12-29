<template>
  <div class="contactBar">
    <div class="phone"><i class="fa fa-phone" aria-hidden="true"></i><a class="contactIcon" href="tel:+353879554650">087 955 4650</a></div>
    <div class="mail">
      <i class="fa fa-envelope" aria-hidden="true"></i
      ><a class="contactIcon" href="mailto:tombrooksengineering@gmail.com">tombrooksengineering@gmail.com</a>
    </div>
    <button
      onclick="window.location.href = 'https://maps.app.goo.gl/
    YeKn7usWHGaX4GuF6';"
      class="mapButton"
    >
      <img class="mapImage" height="20px" width="20px" src="../../public/images/map2.png" />
    </button>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";

  @Component
  export default class Header extends Vue {
    //   @Prop() private msg!: string;
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .mapButton {
    height: 20px;
    width: 20px;
    margin: 0px;
    padding: 0px;
    background: none;
    border: 0px;
    outline: none;
    /* border: none; */
  }
  .mapImage:hover {
    /* border: 2px black solid; */
    opacity: 0.5;
    /* margin: 0px;
	padding: 0px; */
    /* background-color: transparent; */
    /* border: none; */
  }
  .contactIcon {
    margin-left: 5px;
    text-decoration: none;
    color: #fff;
    outline: none;
  }

  .contactBar {
    /* background-color: #2C2C2C; */
    /* background-color: #3b3d4a; */
    background-color: #3b3d4a;
    width: 100%;
    height: 35px;
    z-index: 30;
    text-align: center;
    color: blanchedalmond;
    padding-top: 5px;
    padding-bottom: 5px;

    /* display: inline; */
  }

  .phone,
  .mail {
    display: inline;
    margin-right: 10px;
    font-size: 12px;
  }

  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
