<template>
  <div id="app">
    <!-- <img :src="image" class="image" alt="..." /> -->
    <!-- <img :src="process.env.BASE_URL + 'favicon.ico'" class="image" alt="..." /> -->
    <img class="image" v-for="(image, i) in images" :src="image" :key="i" @click="index = i" />
    <vue-gallery-slideshow :images="images" :index="index" @close="index = null"></vue-gallery-slideshow>
  </div>
  <!-- <div class="bd-example carousel-resizable">
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
  </div> -->
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  import VueGallerySlideshow from "vue-gallery-slideshow";

  @Component({
    components: { VueGallerySlideshow }
  })
  export default class Gates extends Vue {
    private images: Array<string>;
    private index = 0;
    // private image;
    // private image = "https://picsum.photos/id/1005/600/200";

    beforeCreate() {
      const basePath = process.env.BASE_URL;
      this.images = [
         basePath  +"images/HomeBackDoor.jpg",
         basePath  +"images/schoolRail.jpg",
         basePath  +"images/door.jpg",
         basePath  +"images/HomeFrontDoor.jpg",
         basePath  +"images/Shannon_Airport2.png"
      ];
      console.log(this.images[0]);
      this.index = 0;
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
