<template>
    <div class="books-container">
        <BookCard title="سی شارپ 12 در خلاصه" image="/images/Cover.jpg" link="/book1/csharp-12-in-a-nutshell-persian" />
        <BookCard title="کد تمیز در سی شارپ" image="/images/Cover.webp" link="/book2/clean-code-in-csharp-persian" />
        <BookCard title="Coming Soon..." image="/images/Cover.webp" link="#" />
    </div>
</template>

<script setup>
import BookCard from './BookCard.vue'
</script>

<style scoped>
.books-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;
    padding: 2rem;
}
</style>
