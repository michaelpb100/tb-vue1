<template>
  <div class="home">
    <div class="imageContainer">
      <img class="rounded" src="../../public/images/Drill.jpg" width="100%" />
    </div>
    <div class="indentedContent">
      <h1 class="h1">What we do</h1>
      <p>
        We are a leading Specialist Engineering Metal Fabrication company located outside Ennis in Co. Clare.
        <a class="googleMapsAnchor" href="https://maps.app.goo.gl/YeKn7usWHGaX4GuF6"> Click to View on Google Maps</a><br />
        We specialise in safety hand railings, decorative gates and truck/van/ car body repairs. We also provide a general wedding service.<br />
      </p>
      <p>
        Take a look at "Our Work" page to see a small sample of our prior work. Tom is a fully CAD certified
      </p>
      <div class="divider"></div>
    </div>
    <div class="indentedContent">
      <h1 class="h1">How can we help you?</h1>
      <p>
        We work closely with new and existing customers to deliver workable solutions to produce great results. Contact us today for a free quotation.
      </p>
      <div class="divider"></div>
      <p></p>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";

  @Component({
    components: {}
  })
  export default class Home extends Vue {}
</script>

<style scoped>
  @import "../styles/demo.css";
</style>
