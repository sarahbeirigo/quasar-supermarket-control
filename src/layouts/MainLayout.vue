<template>
  <q-layout view="lHh Lpr lFf">
    <MyHeader :leftDrawerOpen="leftDrawerOpen" @toggle-drawer="leftDrawerOpen = !leftDrawerOpen" />
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Menu </q-item-label>
        <MySidebar />
      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
    <MyFooter />
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import MyHeader from 'components/MyHeader.vue'
import MyFooter from 'components/MyFooter.vue'
import MySidebar from 'components/MySidebar.vue'

const leftDrawerOpen = ref(false)
</script>
