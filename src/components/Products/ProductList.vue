<template>
  <div class="product-grid">
    <ProductCard
    v-for="product in productsList"
    :key="product.id"
    :product="product" />
  </div>
</template>

<style lang="scss" scoped>

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 2fr));
  gap: 16px;
  justify-items: center;
}
</style>

<script setup>
import { ref, onMounted } from 'vue'
import { api } from 'src/boot/axios' // Importe apenas a instância 'api'
import ProductCard from './ProductCard.vue'

// 1. INICIALIZE A LISTA COMO UM ARRAY VAZIO.
// É aqui que vamos guardar os produtos que vêm da API.
const productsList = ref([])

// 2. A FUNÇÃO QUE BUSCA OS DADOS
async function fetchProducts() {
  // Renomeei para ser mais claro
  try {
    // 3. USE A INSTÂNCIA 'api' E O ENDPOINT CORRETO ('/products')
    const response = await api.get('/products')

    // 4. ATUALIZE O .value DA SUA VARIÁVEL REATIVA com os dados recebidos.
    // response.data contém o array de produtos do seu db.json.
    productsList.value = response.data
  } catch (error) {
    console.error('Erro na requisição dos produtos:', error)
    // Aqui seria um bom lugar para usar um QNotify para avisar o usuário do erro.
  }
}

// 5. QUANDO O COMPONENTE FOR MONTADO, CHAME A FUNÇÃO PARA BUSCAR OS DADOS.
onMounted(() => {
  fetchProducts()
})
</script>
