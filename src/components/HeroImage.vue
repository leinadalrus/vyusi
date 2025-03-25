<script setup>
defineProps({
    src: {
        type: String,
        required: true
    },
    alt: {
        type: String,
        required: true
    }
})
</script>

<template>
    <img v-bind:src="src" v-bind:alt="alt" />
</template>