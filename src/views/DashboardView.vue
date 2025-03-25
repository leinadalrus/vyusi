<script setup>
import ProductItem from '@/components/ProductItem.vue'

defineProps({
    productItems:
        ProductItem[
            {
                id: 0,
                card: {
                    title: 'Title',
                    description: 'Description',
                    flavour: 'Flavour',
                    image: 'Image'
                }
            }
        ]
})
</script>

<template>
    <div>
        <li v-for="productItem in productItems" v-bind:key="productItem.id">
            <ProductItem v-bind:card="productItem.card" />
        </li>
    </div>
</template>

<style scoped lang="scss"></style>
