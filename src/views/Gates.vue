<template>
<div>
     <transition-group name="thumbnailfade" tag="div">
      <img v-for="thumb in filteredImages" :key="thumb.id" 
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
      this.images = [{'name':'HomeBackDoor.jpg', 'alt':'The Dolomites', 'filter':'nature', 'id':'image1' },
               {'name':'schoolRail.jpg', 'alt':'It is a bird on a tree!', 'filter':'animals', 'id':'image2' }, 
               {'name':'door.jpg', 'alt':'I will live here someday', 'filter':'nature', 'id':'image3' },
               {'name':'HomeFrontDoor.jpg', 'alt':'Friendly bear', 'filter':'animals', 'id':'image4' },
               {'name':'Shannon_Airport2.png', 'alt':'A worthy hike', 'filter':'nature', 'id':'image5' } ];
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#filters {
  width: 500px;
  margin: 30px auto;
}

#filters span {
  margin: 15px;
}

img {
  width: 270px;
  height: 180px;
  margin: 20px;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.4s ease;
}

.thumbnailfade-leave-active,
.thumbnailfade-enter-active {
  transition: all 0.4s ease;
}

.thumbnailfade-enter-active {
  transition-delay: 0.4s;
}

.thumbnailfade-enter,
.thumbnailfade-leave-to {
  opacity: 0;
}

</style>
