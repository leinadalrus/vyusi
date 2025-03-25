<script setup>
import ProductItem from '@/components/ProductItem.vue'
import { ref } from 'vue'

const props = defineProps({
    product: { type: ProductItem }
})

const imageSrc = ref(props.product.card.image.src)
const imageAlt = ref(props.product.card.image.alt)
</script>

<template>
    <form action="" method="post">
        <label for="title">Title</label>
        <input
            type="text"
            name="title"
            id=""
            class=""
            placeholder="Title"
            required
        />

        <label for="description">Description</label>
        <input
            type="text"
            name="description"
            id=""
            class=""
            placeholder="Description"
            required
        />

        <label for="description">Flavour</label>
        <input
            type="text"
            name="flavour"
            id=""
            class=""
            placeholder="Flavour"
        />

        <input type="image" v-bind:src="imageSrc" v-bind:alt="imageAlt" />

        <button type="submit">Update my product item</button>
    </form>
</template>

<style></style>
