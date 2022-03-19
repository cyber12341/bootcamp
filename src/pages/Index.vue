<template>
  <q-page class="flex flex-row">
    <div
      class="q-pa-lg window-height window-width flex flex-center border-radius row"
      style="background: #24292e; padding-top: 64px"
    >
      <div
        class="col-md-6 q-pa-xs md:q-pa-xl text-center sm:text-left text-slate-100 col-xs-12"
      >
        <p class="text-3xl md:text-5xl mb-8 font-bold">
          Belajar coding dan design <span class="text-rose-400">dari nol</span>.
        </p>
        <p class="text-3xl md:text-5xl mb-8 font-bold">
          Praktis dan
          <span class="text-rose-400">berorientasi industri</span>.
        </p>
        <p class="text-3xl md:text-5xl font-bold">
          <span class="text-rose-400">Tanpa batasan</span> latar belakang dan
          usia.
        </p>
      </div>
      <img
        src="~assets/image/blogging.svg"
        class="col-md-6"
        v-if="$q.screen.gt.sm"
      />
    </div>
    <div
      class="q-pa-lg q-pt-xl window-width flex flex-row"
      style="padding-top: 80px"
    >
      <div class="basis-full">
        <p
          class="text-6xl font-bold text-rose-400 underline text-center mb-8 underline-offset-8"
        >
          Pilihan Kelas
        </p>
        <p class="text-2xl text-center font-light">
          Gabung ke kelas yang sesuai dengan Minat dan Tujuan
        </p>
      </div>
      <div class="flex flex-row w-full mt-4">
        <class-card
          v-for="(dataKelas, index) in dataKelas"
          :key="index"
          :dataKelas="dataKelas"
          class="w-full md:w-1/5 p-4"
        />
      </div>
    </div>
  </q-page>
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
<style lang="scss" scoped>
.border-radius {
  border-bottom-left-radius: 100px;
}
</style>
