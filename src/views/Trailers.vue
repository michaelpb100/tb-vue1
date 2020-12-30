<template>
  <div>
    <transition-group name="thumbnailfade" tag="div">
      <img
        class="img"
        v-for="thumb in filteredImages"
        :key="thumb.id"
        :height="thumb.height"
        :width="thumb.width"
        @click="showLightbox(thumb.name)"
        :src="thumbnailDir + thumb.name"
        :alt="thumb.alt"
        :title="thumb.alt"
      />
    </transition-group>

    <lightbox ref="lightbox" :images="images" :directory="thumbnailDir" :filter="galleryFilter" :timeoutDuration="5000"></lightbox>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  import VueGallerySlideshow from "vue-gallery-slideshow";

  @Component({
    components: { VueGallerySlideshow }
  })
  export default class Traliers extends Vue {
    private images: Array<any>;
    private thumbnailDir: string;
    private galleryFilter = "all";

    showLightbox(imageName) {
      const lightbox: any = this.$refs.lightbox;
      lightbox.show(imageName);
    }

    updateFilter(filterName) {
      this.galleryFilter = filterName;
    }

    get filteredImages() {
      if (this.galleryFilter === "all") {
        return this.images;
      } else {
        return this.images.filter(image => image.filter === this.galleryFilter);
      }
    }

    beforeCreate() {
      this.thumbnailDir = process.env.BASE_URL + "images/";
      this.images = [
        { name: "RedTrailer.jpg", alt: "Cattle Truck", filter: "nature", id: "image1", height: "180px", width: "270px" },
        { name: "Trailer_1.jpg", alt: "Car Transporter", filter: "animals", id: "image2", height: "180px", width: "240px" },
        { name: "Trailer_2.jpg", alt: "Car Transporter", filter: "nature", id: "image3", height: "180px", width: "170px" },
        { name: "Trailer_3.jpg", alt: "Tipper Trailer", filter: "nature", id: "image4", height: "180px", width: "140px" },
        { name: "Trailer_4.jpg", alt: "Tipper Trailer", filter: "nature", id: "image5", height: "180px", width: "200px" },
        { name: "Trailer_5.jpg", alt: "Tipper Trailer", filter: "nature", id: "image6", height: "180px", width: "240px" },
        { name: "Trailer_6.jpg", alt: "Tipper Trailer", filter: "nature", id: "image7", height: "180px", width: "240px" },
        { name: "Co_1.jpg", alt: "Tipper Trailer Overhaul", filter: "nature", id: "image8", height: "180px", width: "140px" },
        { name: "Co_4.jpg", alt: "Tipper Trailer Overhaul", filter: "nature", id: "image9", height: "180px", width: "240px" },
        { name: "Co_5.jpg", alt: "Tipper Trailer Overhaul", filter: "nature", id: "image10", height: "180px", width: "140px" },
        { name: "Co_6.jpg", alt: "Tipper Trailer Overhaul", filter: "nature", id: "image11", height: "180px", width: "240px" },
        { name: "Co_7.jpg", alt: "Tipper Trailer Overhaul", filter: "nature", id: "image12", height: "180px", width: "170px" },
        { name: "Co_2.jpg", alt: "Tipper Trailer Overhaul", filter: "nature", id: "image13", height: "180px", width: "170px" },
        { name: "Co_3.jpg", alt: "Tipper Trailer Overhaul", filter: "nature", id: "image14", height: "180px", width: "170px" },
        { name: "MM_1.jpg", alt: "Low Loader Overhaul", filter: "nature", id: "image15", height: "180px", width: "170px" },
        { name: "MM_2.jpg", alt: "Low Loader Overhaul", filter: "nature", id: "image16", height: "180px", width: "170px" },
        { name: "MM_3.jpg", alt: "Low Loader Overhaul", filter: "nature", id: "image17", height: "180px", width: "170px" },
        { name: "MM_4.jpg", alt: "Low Loader Overhaul", filter: "nature", id: "image18", height: "180px", width: "170px" }
      ];
    }
  }
</script>

<style scoped lang="scss">
  @import "../styles/imageViewer.css";
</style>
