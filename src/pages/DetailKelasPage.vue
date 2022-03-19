<template>
  <div class="flex flex-row">
    <q-img
      :src="dataDetail.banner"
      class="w-full h-screen flex flex-row items-center justify-center"
    >
      <div class="absolute-full text-subtitle2 flex flex-center">
        <p class="text-5xl w-full text-center text-white">
          {{ dataDetail.nama_kelas }}<br />
          <span class="text-2xl font-light">{{
            dataDetail.deskripsi_singkat
          }}</span>
        </p>
      </div>
    </q-img>
    <div class="flex w-full text-5xl text-center justify-center font-bold py-8">
      <p class="text-3xl text-rose-400">
        Pilih Paket Belajar <br />
        <span class="text-2xl font-light text-slate-800"
          >Sesuaikan minat dengan harga terjangkau</span
        >
      </p>
    </div>
    <div class="flex w-full">
      <package-card
        v-for="(program, index) in dataDetail.program"
        :key="index"
        :dataPackage="program"
        class="w-full md:w-1/5 p-4"
      />
    </div>
  </div>
</template>
<script>
import axios from "axios";
import PackageCard from "../components/PackageCard.vue";
export default {
  components: {
    PackageCard,
  },
  data() {
    return {
      dataDetail: {},
    };
  },
  methods: {
    getData() {
      axios
        .get("https://axcelio.id/api/kelas/" + this.$route.params.slug)
        .then((res) => {
          console.log(res);
          this.dataDetail = res.data.data;
        });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style lang="scss" scoped>
.background {
  &:before {
    content: "";
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(to bottom right, #000, #000);
    opacity: 0.3;
  }
}
</style>
