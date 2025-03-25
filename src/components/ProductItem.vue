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
        v-bind:title="card.title"
        v-bind:description="card.description"
        v-bind:flavour="card.flavour"
        v-bind:image="card.image"
    />
</template>
