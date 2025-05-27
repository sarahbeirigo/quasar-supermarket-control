<template>
  <q-toolbar class="bg-primary text-white shadow-2 q-pt-md q-pb-md">
    <q-input
      dark
      dense
      standout
      v-model="textoPesquisa"
      placeholder="Pesquisar produtos..."
      class="q-ml-md"
      style="min-width: 200px"
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
      class="q-ml-md"
      style="min-width: 200px"
    />

    <q-space />

    <q-btn
      flat
      dense
      icon="add"
      label="Cadastrar Produto"
      @click="cadastrarProduto"
      class="q-mr-md botao-estilo-input q-pa-sm"
    />
  </q-toolbar>
</template>

<script setup>
// 1. Importe o 'ref' do vue
import { ref } from 'vue'

// --- CORREÇÃO AQUI ---
// 2. Declare todas as variáveis e funções que o template precisa usar.

// Variável reativa para o campo de pesquisa.
const textoPesquisa = ref('')

// Variável reativa para guardar a opção de filtro escolhida.
const filtroSelecionado = ref(null)

// Uma lista constante com as opções para o filtro.
const opcoesFiltro = ['Nome', 'Categoria']

// A função que o botão vai executar ao ser clicado.
const cadastrarProduto = () => {
  alert('Botão "Adicionar Produto" foi clicado!')

  // Exemplo de como acessar os valores (eles ficam dentro de .value)
  console.log('Valor da pesquisa:', textoPesquisa.value)
  console.log('Valor do filtro:', filtroSelecionado.value)
}
</script>
