<script setup>
import { ref } from 'vue'
import ProductItem from './ProductItem.vue'

const searchItems = ref(ProductItem[{}])

function searchWithTitle(title) {
    for (var i in searchItems)
        if (title == i.title)
            return i.title
    return title
}
</script>

<template>
    <form action="" method="get">
        <label for="finder">Find</label>
        <input
            type="text"
            name="finder"
            id=""
            placeholder="Find"
            :value="text"
            @input="(event) => (text = event.target.value)"
        />
        <button type="submit" @click="searchWithTitle($event.target.value)">Find</button>
    </form>
</template>
