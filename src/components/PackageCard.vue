<template>
  <div>
    <router-link
      :to="{ name: 'PackageDetailPage', params: { slug: dataPackage.slug } }"
    >
      <q-card class="my-card" style="height: 310px">
        <q-img :src="dataPackage.thumbnail">
          <q-chip
            v-if="dataPackage.status_pelaksanaan != null"
            dense
            :color="
              dataPackage.status_pelaksanaan == 'online' ? 'positive' : 'cyan'
            "
            size="14px"
            class="p-2 absolute right-0 mt-2 mr-2"
          >
            {{ dataPackage.status_pelaksanaan }}
          </q-chip>
        </q-img>
        <q-card-section class="mt-2">
          <div class="text-lg font-bold">
            {{ dataPackage.nama_program }}
          </div>
        </q-card-section>

        <q-card-section class="q-pt-none" style="height: 75px">
          <p class="ellipsis-2-lines overflow-hidden">
            <span class="font-semibold mr-2 text-lg">
              Rp
              {{
                dataPackage.biaya == 0
                  ? "Free"
                  : formatThousandsDecimalQty(dataPackage.biaya)
              }}
            </span>
            <span class="line-through" v-if="dataPackage.harga_coret != null">
              {{ formatThousandsDecimalQty(dataPackage.harga_coret) }}</span
            >
          </p>
        </q-card-section>
      </q-card>
    </router-link>
  </div>
</template>
<script>
export default {
  props: {
    dataPackage: Object,
  },
  data() {
    return {};
  },
  methods: {
    formatThousandsDecimalQty(number) {
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
};
</script>
