<template>
  <div class="flex flex-row">
    <div class="w-full" style="padding-top: 60px">
      <div class="q-pa-lg py-8 w-full" style="background: #24292e">
        <p class="text-xl md:text-3xl text-rose-400 font-black">
          {{ dataDetail.nama_program }}
        </p>
        <br />
        <p class="text-slate-100 text-md md:text-xl">
          {{ dataKelas["deskripsi_singkat"] }}
        </p>
      </div>
    </div>
    <div class="flex flex-col-reverse md:flex-row">
      <div class="w-full md:w-3/4 px-8 pt-4 md:pl-8 md:pr-4 md:py-8">
        <div class="text-3xl pt-2">
          <span class="font-bold">Tentang Program</span>
          <div
            class="border p-3 mt-3 rounded-lg border-gray-300"
            v-html="dataDetail.silabus"
          ></div>
        </div>
      </div>
      <div class="w-full md:w-1/4 px-8 pt-8 md:pl-4 md:pr-8 md:py-8">
        <div class="border rounded-lg border-gray-300">
          <img :src="dataDetail.thumbnail" class="rounded-t-lg" />
          <div class="p-3">
            <div class="bg-rose-400 text-slate-100 p-3 rounded-lg">
              <p class="text-center text-bold">Pelaksanaan Bootcamp</p>
              <p class="text-center text-slate-100">
                {{ formatDate(dataDetail.tanggal_mulai) }} sampai
                {{ formatDate(dataDetail.tanggal_selesai) }}
              </p>
            </div>
          </div>
          <div class="px-3 flex flex-row">
            <div class="w-1/12"><p>Rp</p></div>
            <div class="w-11/12 flex flex-row">
              <div class="w-full">
                <p class="line-through" v-if="dataDetail.harga_coret != 0">
                  {{ formatThousandsDecimal(dataDetail.harga_coret) }}
                </p>
                <p class="text-xl text-bold">
                  {{ formatThousandsDecimal(dataDetail.biaya) }}
                </p>
              </div>
              <div class="w-1/2 text-lg font-semithin text-gray-500">
                {{ dataDetail.jumlah_pertemuan }}x Pertemuan
              </div>
              <div class="w-1/2 text-lg font-semithin text-gray-500">
                {{ dataDetail.durasi_jam * 60 }} Menit
              </div>
            </div>
          </div>
          <div class="p-3 font-bold">
            Program ini disertai
            <q-list class="pt-3" dense>
              <q-item
                v-for="(data, index) in dataDetail.daftar_layanan"
                :key="index"
              >
                <q-item-section avatar>
                  <q-icon color="primary" name="check" />
                </q-item-section>

                <q-item-section>{{ data }}</q-item-section>
              </q-item>
            </q-list>
          </div>
        </div>
      </div>
    </div>
    <div class="flex w-full font-bold px-8">
      <p class="text-3xl">Coba Paket Belajar Lainnya</p>
    </div>
    <div class="flex w-full px-8 pt-8 md:pl-4 md:pr-8 md:py-8">
      <PackageCard
        v-for="(program, index) in dataRelated"
        :key="index"
        :dataPackage="program"
        class="w-full md:w-1/5 p-4"
      />
    </div>
  </div>
</template>
<script>
import axios from "axios";
import dayjs from "dayjs";
import PackageCard from "../components/PackageCard.vue";
export default {
  components: {
    PackageCard,
  },
  data() {
    return {
      dataDetail: {},
      dataKelas: {},
      dataRelated: {},
    };
  },
  methods: {
    getData() {
      axios
        .get("https://axcelio.id/api/program/" + this.$route.params.slug)
        .then((res) => {
          console.log(res);
          this.dataDetail = res.data.data;
          this.dataKelas = res.data.data.kelas;
          this.dataRelated = res.data.data.related;
        });
    },
    formatDate(date) {
      return dayjs(date).format("DD/MM/YYYY");
    },
    formatThousandsDecimal(number) {
      const checker = new Intl.NumberFormat().format(number).split(".");
      let res;
      if (checker.length === 2) {
        if (checker[1].length === 1) {
          res = new Intl.NumberFormat().format(number) + "0";
        } else {
          res = new Intl.NumberFormat().format(number);
        }
      } else {
        res = new Intl.NumberFormat().format(number) + ".00";
      }

      return res;
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
