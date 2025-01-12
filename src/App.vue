<template>
    <div>
        <div class="w-28 h-28 inline-flex fixed bottom-8 right-8 bg-[#344049] rounded-full overflow-hidden p-4">
            <img :src="image" />
        </div>

        <RouterView />
    </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue';;

// States
const image = ref<string>('/images/raph.png');

// Component mouned
onMounted(() => {
    document.addEventListener('page:favicon', onChangeIcon as (ev: Event) => void);
});

// Component unmounted
onUnmounted(() => {
    document.removeEventListener('page:favicon', onChangeIcon as (ev: Event) => void);
})

/**
 * Change Event
 * @param ev 
 */
function onChangeIcon(ev: CustomEvent) {
    image.value = ev.detail;
}
</script>

<style scoped>
</style>
