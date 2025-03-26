<script setup>
import HomeView from './views/HomeView.vue'
import LoginView from './views/LoginView.vue'
import NavBar from './components/NavBar.vue'
import SideBar from './components/SideBar.vue'
</script>

<template>
    <template v-if="LoginView.submitted">
        <LoginView submitted @submission.once="submitted" />
    </template>

    <template v-else>
        <SideBar />

        <NavBar />

        <HomeView />
    </template>
</template>
