<!-- docs/.vitepress/theme/CustomLayout.vue -->
<template>
    <div>
        <component :is="isHomePage ? HomePage : DefaultLayout" />
    </div>
</template>

<script setup>
import { useRoute } from 'vitepress'
import DefaultLayout from 'vitepress/theme'
import HomePage from './HomePage.vue'

const route = useRoute()
const isHomePage = route.path === '/'
</script>
