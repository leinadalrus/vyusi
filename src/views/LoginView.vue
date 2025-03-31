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

const usernameShallowCopy = ref(props.username)
const passwordShallowCopy = ref(props.password)

function validateUsername(username) {
    if (props.username.match(username)) return username
    return null
}

function verifyPassword(password) {
    if (props.username.match(password)) return password
    return null
}
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
            :value="usernameShallowCopy"
            @input="
                (event) =>
                    (usernameShallowCopy = validateUsername(event.target.value))
            "
        />

        <label for="password">Password</label>
        <input
            type="password"
            name="password"
            id=""
            class=""
            placeholder="Password"
            required
            :value="passwordShallowCopy"
            @input="
                (event) =>
                    (passwordShallowCopy = verifyPassword(event.target.value))
            "
        />

        <label for="checkbox">{{ checked }}</label>
        <input
            type="checkbox"
            id="checkbox"
            v-model="checked"
            @click="$emit('checked')"
        />

        <button type="submit" @click="$emit('submission')">
            Sign-in to My Page
        </button>
    </form>
</template>

<style></style>
