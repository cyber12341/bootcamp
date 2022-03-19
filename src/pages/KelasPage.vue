<template>
  <div class="flex flex-row">
    <div class="w-full px-8 mt-8" style="padding-top: 60px">
      <div class="text-3xl text-rose-400 text-bold text-center">Kelas</div>
    </div>
    <div class="flex flex-row w-full mt-4">
      <ClassCard
        v-for="(dataKelas, index) in dataKelas"
        :key="index"
        :dataKelas="dataKelas"
        class="w-full md:w-1/5 p-4"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ClassCard from "../components/ClassCard.vue";

export default {
  name: "PageIndex",

  components: { ClassCard },
  data() {
    return {
      dataKelas: [],
    };
  },
  methods: {
    getClass() {
      axios.get("https://axcelio.id/api/kelas").then((res) => {
        console.log(res);
        this.dataKelas = res.data.data;
      });
    },
  },

  mounted() {
    this.getClass();
  },
};
</script>
