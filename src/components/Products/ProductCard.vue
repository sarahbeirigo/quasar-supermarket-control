<template>
  <q-card class="my-card" flat bordered>
    <q-card-section horizontal class="full-height">
      <q-img class="col-5" src="/images/coca_cola.png">
        <template v-slot:error>
          <div
            class="absolute-full flex flex-center bg-grey-3 text-grey-8 text-center"
            style="font-size: 10px"
          >
            Imagem Indisponível
          </div>
        </template>
      </q-img>

      <q-separator vertical />

      <q-card-section class="col-7 flex column justify-between">
        <q-item-label class="text-body2 text-weight-medium ellipsis-2-lines q-mb-md">
          {{ product.name }}
        </q-item-label>

        <q-item-label caption class="q-mt-xs">
          <span class="text-weight-medium">Marca:</span> {{ product.brand }}
        </q-item-label>

        <q-item-label caption class="q-mt-xs">
          <span class="text-weight-medium">Sku:</span> {{ product.sku }}
        </q-item-label>

        <q-item-label caption>
          <span class="text-weight-medium">Estoque: </span> {{ product.stock }}
          <span>{{ product.unit }}</span>
        </q-item-label>

        <q-item-label caption>
          <span class="text-weight-medium">Preco:</span> R$ {{ product.price.toFixed(2) }}
        </q-item-label>

        <q-card-actions class="q-pa-none q-mt-xs justify-end">
          <q-btn flat dense round color="negative" icon="delete">
            <q-tooltip>Excluir</q-tooltip>
          </q-btn>
          <q-btn flat dense round color="primary" icon="edit">
            <q-tooltip>Editar</q-tooltip>
          </q-btn>

         

        </q-card-actions>
      </q-card-section>
    </q-card-section>
  </q-card>
</template>

<style lang="scss" scoped>
.my-card {
  width: 100%;
  max-width: 350px;
  height: 200px;
}
</style>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true,
  },
})
</script>
