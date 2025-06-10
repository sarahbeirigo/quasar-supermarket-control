<template>
  <q-toolbar
    class="bg-primary text-white shadow-2 q-pa-md row justify-between items-center q-l-md q-r-md justify-between"
  >
    <div class="row q-gutter-y-sm q-gutter-x-lg items-center">
      <q-input
        dark
        dense
        standout
        v-model="textoPesquisa"
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
        v-model="filtroSelecionado"
        :options="opcoesFiltro"
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
      @click="cadastrarProduto"
    />
    <!-- <q-tooltip class="bg-secondary xs-only">Cadastrar Produto</q-tooltip> -->
  </q-toolbar>
</template>

<script setup>
import { ref } from 'vue'

const textoPesquisa = ref('')
const filtroSelecionado = ref(null)
const opcoesFiltro = ['Nome', 'Categoria', 'Marca']
const cadastrarProduto = () => {
  alert('Botão "Adicionar Produto" foi clicado!')
  console.log('Valor da pesquisa:', textoPesquisa.value)
  console.log('Valor do filtro:', filtroSelecionado.value)
}
</script>
