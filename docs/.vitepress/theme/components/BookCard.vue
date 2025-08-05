<template>
    <div class="book-card">
        <img :src="image" :alt="title" class="book-image" />
        <h3 class="book-title">{{ title }}</h3>
        <a :href="link" class="book-link">مشاهده کتاب</a>
    </div>
</template>

<script setup>
defineProps({
    title: String,
    image: String,
    link: String
})
</script>

<style scoped>
.books-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    padding: 0;
    margin: 0 auto;
    max-width: 1400px;
}

.book-card {
    background-color: #1e1e1e;
    /* پس زمینه VS Code */
    border-radius: 16px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.book-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.4);
}

.book-image {
    width: 180px;
    aspect-ratio: 3 / 4;
    /* نسبت کلاسیک کتاب */
    object-fit: contain;
    /* عکس کامل نمایش داده بشه */
    border-radius: 12px;
    margin-bottom: 1rem;
    border: 2px solid #0078d4;
    /* آبی Microsoft */
    background-color: #ffffff;
    /* پس زمینه عکس سفید */
    padding: 5px;
}

.book-title {
    font-size: 1.1rem;
    font-weight: bold;
    text-align: center;
    color: #ffffff;
    margin-bottom: 0.6rem;
}

.book-link {
    background-color: #0078d4;
    /* آبی اصلی */
    color: #ffffff;
    text-decoration: none;
    padding: 0.5rem 1.2rem;
    border-radius: 8px;
    font-weight: bold;
    transition: background-color 0.3s ease, color 0.3s ease;
}

.book-link:hover {
    background-color: #00bcf2;
    /* آبی روشن Fluent */
    color: #1e1e1e;
}
</style>
