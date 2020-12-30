<template>
<div>
     <transition-group name="thumbnailfade" tag="div">
      <img class="img" v-for="thumb in filteredImages" :key="thumb.id" :height="thumb.height" :width="thumb.width"
           @click="showLightbox(thumb.name)"  :src="thumbnailDir + thumb.name" :alt="thumb.alt" :title="thumb.alt" />
    </transition-group>

    <lightbox ref="lightbox"
      :images="images"
      :directory="thumbnailDir"
      :filter="galleryFilter"
      :timeoutDuration="5000"
    ></lightbox>
</div>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  import VueGallerySlideshow from "vue-gallery-slideshow";

  @Component({
    components: { VueGallerySlideshow }
  })
  export default class Gates extends Vue {
    private images : Array<any>;
    private thumbnailDir: string;
    private galleryFilter = "all";


    showLightbox(imageName) {
      const lightbox : any = this.$refs.lightbox;
      lightbox.show(imageName);
    }

    updateFilter(filterName) {
      this.galleryFilter = filterName;
    }

    get filteredImages() {
      if (this.galleryFilter === 'all') {
        return this.images;
      } else {
        return this.images.filter(image => image.filter === this.galleryFilter);
      }
    }


    beforeCreate() {
      this.thumbnailDir = process.env.BASE_URL + "images/";
      this.images = [{'name':'HomeBackDoor.jpg', 'alt':'Wheelchair Ramp', 'filter':'nature', 'id':'image1', 'height':'180px', 'width':'270px' },
               {'name':'schoolRail.jpg', 'alt':'Wheelchair Ramp for school', 'filter':'animals', 'id':'image2', 'height':'180px', 'width':'270px' }, 
               {'name':'door.jpg', 'alt':'Fire door', 'filter':'nature', 'id':'image3', 'height':'180px', 'width':'140px' },
               {'name':'HomeFrontDoor.jpg', 'alt':'Wheelchair Ramp', 'filter':'animals', 'id':'image4', 'height':'180px', 'width':'140px' },
               {'name':'Shannon_Airport2.png', 'alt':'Shannon Airport Safetly Rail', 'filter':'nature', 'id':'image5', 'height':'180px', 'width':'240px' } ];
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "../styles/imageViewer.css";

</style>
