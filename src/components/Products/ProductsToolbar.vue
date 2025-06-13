<template>
  <q-toolbar
    class="bg-primary text-white shadow-2 q-pa-md row justify-between items-center q-l-md q-r-md justify-between"
  >
    <div class="row q-gutter-y-sm q-gutter-x-lg items-center">
      <q-input
        dark
        dense
        standout
        v-model="searchTerm"
        placeholder="Pesquisar..."
        class="col-11 col-sm-auto"
        style="min-width: 180px"
      >
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
      </q-input>

      <q-select
        dark
        dense
        standout
        v-model="selectedFilter"
        :options="optionsFilter"
        label="Filtrar por"
        class="col-11 col-sm-auto"
        style="min-width: 180px"
        behavior="menu"
      />
    </div>

    <q-btn
      class="gt-xs"
      unelevated
      color="white"
      text-color="primary"
      icon="add"
      label="Cadastrar Produto"
      @click="registerProduct"
    />

    <!-- <q-tooltip class="bg-secondary xs-only">Cadastrar Produto</q-tooltip> -->
  </q-toolbar>
</template>
<script setup>
import { ref, watch } from 'vue'

const searchTerm = ref('')
const selectedFilter = ref('Nome') // Inicia com o valor padrão
const optionsFilter = ['Nome', 'Categoria', 'Marca', 'SKU']

const emit = defineEmits(['filters-changed'])

watch([searchTerm, selectedFilter], ([newSearch, newFilter]) => {
  console.log(`Emitindo: Tipo=${newFilter}, Valor=${newSearch}`)

  // Emite um objeto com os novos valores
  emit('filters-changed', {
    type: newFilter,
    value: newSearch,
  })
})

const registerProduct = () => {
  alert('Botão Cadastrar Clicado!')
}
</script>
