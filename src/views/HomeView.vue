<template>
  <body>
    <NavMenu />
    <section>
      <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
        <!-- <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="0" class="active"
              aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="1"
              aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="2"
              aria-label="Slide 3"></button>
          </div> -->
        <div class="carousel-inner">
          <div v-for="(blog, index) in blogs.slice(-3)" :key="blog.id" class="carousel-item" :class="{'active': index === 0}"
            data-bs-interval="5000">
            <img v-bind:src="blog.thumbnail_img" class="d-block w-100" alt="...">
            <div class="carousel-caption d-md-block">
              <h5>{{ blog.title }}</h5>
              <a v-bind:href="`detail/${blog.id}`">View More</a>
              <!-- <p>Some representative placeholder content for the first slide.</p> -->
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval"
          data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </section>
    <!-- Blog section -->
    <section id="blog">
      <h1 class="text-light text-center my-4 "><span class="text-danger">All</span>Blog</h1>
      <div class="container">

        <div v-for="blog in blogs" :key="blog.id">

          <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col p-4 d-flex flex-column position-static">
              <!-- <strong class="d-inline-block mb-2 text-primary-emphasis">{{ blog.location }}</strong> -->
              <h3 class="mb-0">{{ blog.title }}</h3>

              <div class="mb-1 text-body-secondary">{{ blog.postdate }}</div>
              <p class="card-text mb-auto" v-html="`${blog.content.substring(0, 30)}...`"></p>
              <a v-bind:href="`detail/${blog.id}`" class="icon-link gap-1 icon-link-hover stretched-link">
                <!-- <a v-bind:href="`detail/${blog.id}`" class="icon-link gap-1 icon-link-hover stretched-link"> -->
                เพิ่มเติม
                <svg class="bi">
                  <use xlink:href="#chevron-right"></use>
                </svg>
              </a>
            </div>
            <div class="col-auto d-none d-lg-block blog-thumbnail">
              <!-- <img :src="BlogPicture(blog.pic_path)" width="400" height="250" alt=""> -->
              <img :src="blog.thumbnail_img" width="400" height="250" alt="">

            </div>
          </div>
        </div>
      </div>

    </section>
  </body>
</template>

<script>
import BlogsData from '../blogs.json'
// import 'axi'
import NavMenu from '@/components/NavMenuComponent.vue';
export default {
  components: {
    NavMenu
  },
  data() {
    return {
      blogs: BlogsData.blogs,
    }
  },
  // methods: {
  //   BlogPicture: function (pic_path) {
  //     return require("@/src/" + pic_path)
  //   },
  // },


  //   methods: {
  //   letterIcon: function(picture) {
  //     return require("@/src/" + picture);
  //   },
  // },

  mounted: function () {
    console.log(this.blogs);
    console.log(this.BlogPicture());
  }
}

</script>

<style></style>