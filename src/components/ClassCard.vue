<template>
  <div>
    <router-link
      :to="{ name: 'DetailKelas', params: { slug: dataKelas.slug } }"
    >
      <q-card class="my-card" style="height: 310px">
        <q-img :src="dataKelas.banner" fit="cover" />
        <q-img
          :src="dataKelas.icon"
          style="width: 50px; background-color: #ffc11d; border-radius: 10px"
          class="absolute top-28 md:top-1/3 left-3 z-40 p-1"
        />
        <q-card-section class="mt-2">
          <div class="text-lg text-weight-bold">
            {{ dataKelas.nama_kelas }}
          </div>
        </q-card-section>

        <q-card-section class="q-pt-none" style="height: 75px">
          <p class="ellipsis-2-lines overflow-hidden">
            {{ dataKelas.deskripsi_singkat }}
          </p>
        </q-card-section>
      </q-card>
    </router-link>
  </div>
</template>
<script>
export default {
  props: {
    dataKelas: Object,
  },
  data() {
    return {};
  },
};
</script>
