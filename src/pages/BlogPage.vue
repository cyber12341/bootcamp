<template>
  <div class="flex flex-row">
    <div class="w-full px-8 mt-8" style="padding-top: 60px">
      <div class="text-3xl text-rose-400 text-bold text-center">Blog Post</div>
    </div>
    <div class="flex flex-row w-full mt-4">
      <blog-card
        v-for="(dataBlog, index) in dataBlog"
        :key="index"
        :dataBlog="dataBlog"
        class="w-full md:w-1/5 p-4"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import BlogCard from "../components/BlogCard.vue";

export default {
  name: "PageIndex",

  components: { BlogCard },
  data() {
    return {
      dataBlog: [],
    };
  },
  methods: {
    getClass() {
      axios.get("https://axcelio.id/api/blog").then((res) => {
        console.log(res);
        this.dataBlog = res.data.data.data;
      });
    },
  },

  mounted() {
    this.getClass();
  },
};
</script>
