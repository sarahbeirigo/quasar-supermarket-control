<template>
  <q-page>
    <ProductsToolbar @filters-changed="updateFilters" />
    <div class="page-content-wrapper">
      <ProductList :products="filteredProducts" />
    </div>
  </q-page>
</template>

<style lang="scss" scoped>
.page-content-wrapper {
  display: flex;
  justify-content: center;
  padding: 16px;
}
</style>

<script setup>
import ProductsToolbar from 'src/components/Products/ProductsToolbar.vue';
import ProductList from 'src/components/Products/ProductList.vue';
import { ref, onMounted, computed } from 'vue';
import { api } from 'src/boot/axios';

const allProducts = ref([]);
const filterValue = ref('');
const filterType = ref('Nome'); // Inicia com o valor padrão para consistência

async function fetchProducts() {
  try {
    const response = await api.get('/products');
    allProducts.value = response.data;
  } catch (error) {
    console.error('Erro na requisição dos produtos:', error);
  }
}

function normalizeString(str) {
  if (!str) return '';
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

function updateFilters(filters) {
  // Garante que o tipo de filtro não seja nulo, mantendo o último valor se for.
  if (filters.type !== null) {
    filterType.value = filters.type;
  }
  filterValue.value = filters.value;
}

const filteredProducts = computed(() => {
  const normalizedFilterValue = normalizeString(filterValue.value);

  // Se não houver valor para filtrar, retorna todos os produtos
  if (!normalizedFilterValue) {
    return allProducts.value;
  }

  // Se não houver um tipo de filtro selecionado, não faz nada.
  if (!filterType.value) {
    return allProducts.value;
  }

  return allProducts.value.filter((product) => {
    switch (filterType.value) {
      case 'Nome': {
        const normalizedValue = normalizeString(product.name);
        return normalizedValue.includes(normalizedFilterValue);
      }
      case 'Categoria': {
        const normalizedValue = normalizeString(product.category);
        return normalizedValue.includes(normalizedFilterValue);
      }
      case 'Marca': {
        const normalizedValue = normalizeString(product.brand);
        return normalizedValue.includes(normalizedFilterValue);
      }
      case 'SKU': {
        const normalizedValue = normalizeString(product.sku);
        return normalizedValue.includes(normalizedFilterValue);
      }
      default:
        return true; // Se o tipo for desconhecido, não filtra
    }
  });
});

onMounted(() => {
  fetchProducts();
});
</script>
