<template>
  <div class="bd-example carousel-resizable">
    <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="4"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../assets/HomeBackDoor.jpg" class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5></h5>
            <p></p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="../assets/schoolRail.jpg" class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5></h5>
            <p></p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="../assets/door.jpg" class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5></h5>
            <p></p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="../assets/HomeFrontDoor.jpg" class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5></h5>
            <p></p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="../assets/Shannon_Airport2.png" class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5></h5>
            <p></p>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";

  @Component
  export default class Gates extends Vue {
    //   @Prop() private msg!: string;
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
