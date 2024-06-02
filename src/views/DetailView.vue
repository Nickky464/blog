<script setup>
import NavMenu from '@/components/NavMenuComponent.vue';

</script>
<template>

    <body data-bs-theme="dark">

        <NavMenu />
        <div class="container blog-detail" data-bs-theme="dark">
            <div v-if="blog">
                <h2>{{ blog.title }}</h2>
                <p v-html="blog.content"></p>
                <!-- <p>Location: {{ blog.location }}</p> -->
                <div class="row cols-sm-8 g-5 py-4 justify-content-center">
                    <img v-for="pic_path in blog.img" :key="pic_path" :src="pic_path" class=" rounded d-block"
                        alt="Image">
                </div>
                <p>Posted by: {{ blog.postedby }}</p>
                <p>Blog Date: {{ blog.blogdate }}</p>
                <p>Credit: <a :href="blog.crediturl">{{ blog.creditname }}</a></p>
            </div>
            <div v-else>
                <p>Loading...</p>
            </div>
        </div>
    </body>
</template>

<script>
import BlogData from '../blogs.json'
export default {
    data() {
        return {
            blog: null,
        };
    },
    mounted() {
        this.fetchBlogData();
        console.log(this.blog)
    },
    methods: {
        fetchBlogData() {
            // Fetch data from JSON file or API endpoint
            // For simplicity, I'll simulate the data fetching process here
            const blogId = this.$route.params.id;
            const blog = BlogData.blogs.find(blog => blog.id === blogId);
            if (blog) {
                this.blog = blog;
                // console.log(blog.pic_path)
            } else {
                console.error("Blog not found");
            }
        },

    }
};
</script>

<style scoped>
/* Add your styles here */
</style>