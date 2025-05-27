<template>
  <q-item clickable :to="link" tag="router-link">
    <q-item-section avatar>
      <q-icon :name="icon" class="material-symbols-outlined" />
    </q-item-section>
    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup>
defineProps({
  icon: String,
  title: String,
  link: String,
})
</script>
