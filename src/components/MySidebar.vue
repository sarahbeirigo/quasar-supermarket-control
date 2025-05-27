<template>
  <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
    <q-list>
      <SidebarItem v-for="link in linksList" :key="link.title" v-bind="link"/>
    </q-list>
  </q-drawer>
</template>

<script setup>
import SidebarItem from './SidebarItem.vue'
import { ref } from 'vue'
const leftDrawerOpen = ref(true) // ou false, dependendo se quer aberta por padrão

const linksList = [
  { title: 'Home', icon: 'home', link: '/' },
  { title: 'Products', icon: 'grocery', link: '/Products' },
  { title: 'Sales', icon: 'finance', link: '/Sales' },
  { title: 'Settings', icon: 'settings', link: '/Settings' },
]
</script>
