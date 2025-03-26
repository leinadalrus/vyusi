<script setup>
import HeroImage from '@/components/HeroImage.vue'
import { ref } from 'vue'

defineEmits(['submitted', 'submission'])

const props = defineProps({
    image: { type: HeroImage },
    username: { type: String },
    password: { type: String },
    submitted: Boolean
})

const imageSrc = ref(props.image.src)
const imageAlt = ref(props.image.alt)
</script>

<template>
    <HeroImage :src="imageSrc" :alt="imageAlt" />

    <form action="" method="post">
        <label for="password">Username</label>
        <input
            type="text"
            name="username"
            id=""
            class=""
            placeholder="Username"
            required
        />

        <label for="password">Password</label>
        <input
            type="password"
            name="password"
            id=""
            class=""
            placeholder="Password"
            required
        />

        <button type="submit" @click="$emit('submission')">Sign-in to My Page</button>
    </form>
</template>

<style></style>
