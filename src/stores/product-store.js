import { defineStore } from 'pinia';
import { api } from 'src/boot/axios'
import { ref } from 'vue'

const productsList = ref([])

async function fetchProducts() {
  try {
    const response = await api.get('/products')
    productsList.value = response.data
  } catch (error) {
    console.error('Erro na requisição dos produtos:', error)
  }
}

export const useProductStore = defineStore('product', {
  state: () => ({
    SearchedProduct: ' ',
    results: [],
    loading: false,
    error: null, // Bônus: um estado para guardar mensagens de erro
  }),

  actions: {
    async fetchProducts() {
      this.loading = true;
      this.error = null;

      try {
        const response = await api.get('/products', {
          params: {
            // O Axios transforma isso em "?q=leite", por exemplo
            q: this.SearchedProduct
          }
        })
        // O Axios coloca a resposta da API na propriedade 'data'
        this.results = response.data

      } catch (e) {
        this.erro = 'Não foi possível realizar a busca. Tente novamente.'
        console.error('Falha na busca da API:', e)
        this.results = [] // Limpa os resultados em caso de erro

      } finally {
        this.loading = false
      }
    },
    setSearchProduct(term) {
      this.SearchedProduct = term;
    }
  },
});


