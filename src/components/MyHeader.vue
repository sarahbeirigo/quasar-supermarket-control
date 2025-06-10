<template>
  <q-header elevated>
    <q-toolbar class="q-pa-md">
      <q-btn flat dense round icon="menu" aria-label="Menu" @click="$emit('toggle-drawer')" />
      <q-toolbar-title> Supermarket Control </q-toolbar-title>
      <div>
        <q-btn label="Login" color="primary" icon="person" @click="entrar" />
      </div>
    </q-toolbar>
  </q-header>
</template>

<script setup>
defineProps({
  leftDrawerOpen: Boolean,
})
defineEmits(['toggle-drawer'])
</script>
