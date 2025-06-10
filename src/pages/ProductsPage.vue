<template>
  <q-page>
    <ProductsToolbar />
    <div class="justify-center q-pa-md">
      <ProductList />
    </div>
  </q-page>
</template>

<script setup>
import ProductsToolbar from 'src/components/Products/ProductsToolbar.vue'
import ProductList from 'src/components/Products/ProductList.vue'
</script>

