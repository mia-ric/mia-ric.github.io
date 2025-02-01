<template>
    <PageTurtles />

    <main>
        <header>
            <div class="logo">
                <img src="./assets/ninja.svg" />
            </div>
            
            <PageNavigation />
        </header>

        <article>
            <RouterView />
        </article>
    </main>
</template>

<script lang="ts" setup>
import { RouterView } from 'vue-router';
import PageNavigation from './components/Page/PageNavigation.vue';
import PageTurtles from './components/Page/PageTurtles.vue';
</script>

<style lang="css" scoped>
@import '@/styles/theme.css';

:global(#app) {
    @apply w-full h-full overflow-hidden;
}

main {
    @apply w-full h-full flex flex-col;
    background-size: 101% auto;
    background-color: #0B0009;
    background-image: url('assets/images/background-pink.webp');
    background-repeat: no-repeat;
    background-position: top 150px center;
}

header {
    @apply w-full flex items-center justify-between grow-0 shrink-0 max-w-6xl mx-auto py-8;

    & .logo {
        @apply w-32 h-32 inline-flex items-center justify-center rounded-full p-2;
    }

    & .logo img {
        @apply opacity-50;
    }
}

article {
    @apply flex-1;
}
</style>