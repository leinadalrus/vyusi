<script setup>
defineProps({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    flavour: {
        type: String,
        required: true
    },
    image: {
        type: String,
        url: String,
        alt: String,
        required: true
    }
})
</script>

<template>
    <article id="card-base" class="">
        <img v-bind:src="image.url" v-bind:alt="image.alt" class="" />

        <h1 class="">{{ title }}</h1>

        <div id="card-content" class="">
            <p class="">{{ description }}</p>
            <i class="">{{ flavour }}</i>
        </div>
    </article>
</template>

<style scoped>
#card-base {
    margin-top: 1rem;
    display: flex;
    position: relative;
}

#card-content {
    flex: 1;
    margin-left: 1rem;
}

h1 {
    font-size: 1.1rem;
    font-weight: 300;
    margin-bottom: 0.5rem;
}

i {
    display: flex;
    place-items: center;
    place-content: center;
    width: 2rem;
    height: 3rem;
}

@media (min-width: 8rem) {
    #card-base {
        margin-top: 0;
        padding: 0.4rem 0 1rem 1rem;
    }
}
</style>