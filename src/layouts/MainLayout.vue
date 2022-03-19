<template>
  <q-layout class="bg-grey-1" view="hHh lpR fFf">
    <q-header class="text-white q-px-lg" style="background: #24292e">
      <q-toolbar class="q-py-sm q-px-md">
        <q-btn
          dense
          flat
          round
          icon="menu"
          @click="toggleLeftDrawer"
          v-if="$q.screen.lt.sm"
        />

        <q-space v-if="$q.screen.lt.sm" />
        <router-link to="/">
          <q-btn
            round
            dense
            flat
            :ripple="false"
            icon="home"
            size="19px"
            color="rose-400"
            class="q-mr-sm no-hover"
            no-caps
          >
          </q-btn>
          <span class="q-px-sm text-weight-bold text-rose-400">ByteDream</span>
        </router-link>
        <div
          v-if="$q.screen.gt.xs"
          class="GL__toolbar-link q-ml-xs q-gutter-md text-body2 text-weight-bold row items-center no-wrap"
        >
          <router-link to="/"> Home </router-link>
          <router-link to="/kelas"> Bootcamp </router-link>
          <router-link to="/blog"> Blog </router-link>
        </div>

        <q-space />
      </q-toolbar>
    </q-header>
    <q-drawer
      v-model="leftDrawerOpen"
      side="left"
      overlay
      behavior="mobile"
      bordered
      v-if="$q.screen.lt.sm"
    >
      <!-- drawer content -->
      <q-list class="pt-3" bordered>
        <q-item>
          <q-item-section>
            <router-link to="/"> Home </router-link>
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section>
            <router-link to="/kelas"> Bootcamp </router-link>
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section>
            <router-link to="/blog"> Blog </router-link>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
    <q-page-container class="no-padding">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";
export default {
  name: "MyLayout",
  data() {
    return {
      leftDrawerOpen: ref(false),
    };
  },
  methods: {
    toggleLeftDrawer() {
      console.log(this.leftDrawerOpen);
      this.leftDrawerOpen = !this.leftDrawerOpen;
    },
  },
};
</script>

<style lang="scss" scope>
.GL {
  &__select-GL__menu-link .default-type {
    visibility: hidden;
  }
  &:hover {
    background: #0366d6;
    color: white;
    .q-item__section--side {
      color: white;
    }
    .default-type {
      visibility: visible;
    }
  }
  &__toolbar-link a {
    color: white;
    text-decoration: none;
  }
  &:hover {
    opacity: 0.7;
  }
  &__menu-link:hover {
    background: #0366d6;
    color: white;
  }
  &__menu-link-signed-in,
  &__menu-link-status {
    &:hover & > div {
      background: white !important;
    }
  }
  &__menu-link-status {
    color: $blue-grey-6;
    &:hover {
      color: $light-blue-9;
    }
  }
  &__toolbar-select.q-field--focused {
    width: 450px !important;
    .q-field__append {
      display: none;
    }
  }
}
</style>
