<script setup>
import IconCommunity from './icons/IconCommunity.vue'
import IconDocumentation from './icons/IconDocumentation.vue'
import IconEcosystem from './icons/IconEcosystem.vue'
import IconSupport from './icons/IconSupport.vue'
import IconTooling from './icons/IconTooling.vue'
import ProductItem from './ProductItem.vue'
import TradingCard from './TradingCard.vue'

const tradingCard = TradingCard({
    title: 'Title',
    description: 'Description',
    flavour: 'Flavour',
    image: 'Image'
})
const sidebarList = ProductItem[{ id: 0, card: tradingCard }]
</script>

<template>
    <aside>
        <a href="/">
            <IconCommunity />
        </a>
        <a href="dashboard">
            <IconTooling />
        </a>
        <a href="/community">
            <IconEcosystem />
        </a>
        <a href="/support">
            <IconSupport />
        </a>
        <a href="/about">
            <IconDocumentation />
        </a>
        <li v-for="item in sidebarList" v-bind:key="item.id">
            {{ item }}
        </li>
    </aside>
</template>
