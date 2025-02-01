<template>
    <div class="w-28 h-28 inline-flex fixed bottom-8 right-8 bg-[#344049] rounded-full overflow-hidden p-4">
        <img :src="image" class="absolute top-4 left-3 w-20 h-20 rotate-out" :class="inTransition ? 'in-transition' : ''" />
        <img :src="newImage" class="absolute top-4 left-3 w-20 h-20 rotate-in" :class="inTransition ? 'in-transition' : ''" v-if="newImage" />
    </div>
</template>

<script lang="ts">
/* Declarations */
</script>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref, watch } from 'vue';
import don from '../../assets/images/don.webp';
import leo from '../../assets/images/leo.webp';
import mikey from '../../assets/images/mikey.webp';
import raph from '../../assets/images/raph.webp';

// States
const image = ref<string>(raph);
const newImage = ref<null|string>(null);
const inTransition = ref<boolean>(false);

// Component mouned
onMounted(() => {
    document.addEventListener('page:favicon', onChangeIcon as (ev: Event) => void);
});

// Component unmounted
onUnmounted(() => {
    document.removeEventListener('page:favicon', onChangeIcon as (ev: Event) => void);
})

// Change Image
watch(inTransition, (newValue) => {
    if (!newValue) {
        return;
    }

    setTimeout(() => {
        image.value = newImage.value as string;

        setTimeout(() => {
            newImage.value = null;
            inTransition.value = false;
        }, 10);
    }, 500);
});

/**
 * Change Event
 * @param ev 
 */
function onChangeIcon(ev: CustomEvent) {
    const variants: any = {
        '/images/don.png': don,
        '/images/leo.png': leo,
        '/images/mikey.png': mikey,
        '/images/raph.png': raph,
    };
    newImage.value = ev.detail in variants ? variants[ev.detail] : raph;

    setTimeout(() => {
        inTransition.value = true;
    }, 10);
}
</script>

<style lang="css" scoped>
@import 'tailwindcss';

.rotate-out {
    @apply opacity-100 z-20;
    
    &.in-transition {
        @apply opacity-0;
        transition: transform 250ms ease-in-out 0ms,
                    opacity 250ms ease-in-out 0ms;
        transform: rotate(180deg);
    }
}

.rotate-in {
    @apply opacity-0 z-10 bg-red-600;
    transform: rotate(0deg);

    &.in-transition {
        @apply opacity-100;
        transition: transform 500ms ease-in-out 0ms,
                    opacity 500ms ease-in-out 0ms;
        transform: rotate(360deg);
    }
}
</style>
