<script setup>
import TradingCard from './TradingCard.vue'
defineProps({
    id: {
        type: Number,
        required: true
    },
    card: TradingCard
})
</script>

<template>
    <TradingCard
        v-bind:title="productItem.title"
        v-bind:description="productItem.description"
        v-bind:flavour="productItem.flavour"
        v-bind:image="productItem.image"
    />
</template>
