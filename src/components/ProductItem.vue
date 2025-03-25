<script setup>
import { ref } from 'vue';
import TradingCard from './TradingCard.vue'
const props = defineProps({
    id: {
        type: Number,
        required: true
    },
    card: TradingCard
})

const cardTitle = ref(props.card.title)
const cardDescription = ref(props.card.description)
const cardFlavour = ref(props.card.flavour)
const cardImage = ref(props.card.image)
</script>

<template>
    <TradingCard
        v-bind:title="cardTitle"
        v-bind:description="cardDescription"
        v-bind:flavour="cardFlavour"
        v-bind:image="cardImage"
    />
</template>
