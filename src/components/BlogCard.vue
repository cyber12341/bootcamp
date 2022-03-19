<template>
  <div>
    <router-link :to="{ name: 'DetailBlog', params: { slug: dataBlog.slug } }">
      <q-card class="my-card" style="height: 310px">
        <q-img :src="dataBlog.thumbnail" fit="cover" style="height: 150px" />
        <q-card-section class="mt-2">
          <div class="text-lg text-weight-bold">
            {{ dataBlog.judul }}
          </div>
        </q-card-section>

        <q-card-section class="q-pt-none" style="height: 75px">
          <p class="ellipsis-2-lines overflow-hidden">
            {{ dataBlog.deskripsi_singkat }}
          </p>
        </q-card-section>
      </q-card>
    </router-link>
  </div>
</template>
<script>
export default {
  props: {
    dataBlog: Object,
  },
  data() {
    return {};
  },
};
</script>
