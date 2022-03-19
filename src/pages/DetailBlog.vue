<template>
  <div class="flex justify-center">
    <div class="w-full md:w-1/2 flex flex-col">
      <div class="w-full" style="padding-top: 60px">
        <div class="q-pa-lg py-8 w-full">
          <p
            class="text-2xl py-3 md:text-3xl text-rose-400 font-bold text-center"
          >
            {{ blogDetail.judul }}
          </p>
          <q-img :src="blogDetail.thumbnail" fit="cover" />
        </div>
      </div>
      <div class="w-full q-pa-lg text-justify" v-html="blogDetail.isi"></div>

      <div class="w-full font-bold px-8">
        <p class="text-3xl text-center text-rose-400">Blog Lainnya</p>
      </div>
      <div class="flex w-full px-8 pt-8 md:pl-4 md:pr-8 md:py-8">
        <blog-card
          v-for="(dataBlog, index) in blogLain"
          :key="index"
          :dataBlog="dataBlog"
          class="w-full md:w-1/3 p-4"
        />
      </div>
      -->
    </div>
  </div>
</template>
<script>
import axios from "axios";
import BlogCard from "../components/BlogCard.vue";
export default {
  components: {
    BlogCard,
  },
  data() {
    return {
      blogDetail: {},
      blogLain: [],
    };
  },
  methods: {
    getData() {
      axios
        .get("https://axcelio.id/api/blog/" + this.$route.params.slug)
        .then((res) => {
          console.log(res);
          this.blogDetail = res.data.data;
          this.blogLain = res.data.data.related;
        });
    },
  },
  mounted() {
    this.getData();
  },

  watch: {
    "$route.params.slug"(to, from) {
      this.getData();
    },
  },
};
</script>
