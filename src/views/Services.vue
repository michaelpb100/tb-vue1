<template>
  <div class="indentedContent">
    <h1 class="h1">
      Services:
    </h1>
    <ul class="mainList">
      <li class="serviceItem">Hand Railings / Safety railings</li>
      <li class="serviceItem">Ornamental gates</li>
      <li class="serviceItem">All Steel work including stainless steel and aluminium work</li>
      <li class="serviceItem">Truck trailer repair</li>
      <li class="serviceItem">Car, Van and jeep and body and chassis repair</li>
      <li class="serviceItem">Car Trailer, Livestock trailer, horsebox and plant trailer repair and service</li>
    </ul>
    <p>
      Please feel free to contact us by phone or email to discuss your ideas, plans and requirements or just an informal chat about what we can
      deliver.
    </p>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";

  @Component
  export default class Services extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "../styles/demo.css";
</style>
