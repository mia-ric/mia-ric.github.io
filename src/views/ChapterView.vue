<template>
    <div class="mx-auto max-w-[900px] prose-xl prose prose-invert py-16">
        
        <template v-if="loading"></template>
        <template v-else-if="story">
            <h1>{{ story.title }}</h1>
            
            <p class="bg-zinc-800 rounded p-6">{{ story.intro }}</p>

            <p class="text-sm text-zinc-600">{{ story.footer }}</p>
        </template>
        <template v-else></template>

        <template v-if="props.chapter">
            
        </template>
    </div>
</template>

<script lang="ts">
export interface PageProps {
    story: string;
    chapter?: string;
}
</script>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';

// Define Component
const props = defineProps<PageProps>();

// States
const loading = ref<boolean>(false);
const story = ref<any>();

// Component mounted
onMounted(async () => {
    loading.value = true;

    try {
        const storyData = await import(`../stories/${props.story}/story.json`, { with: { type: "json" } });
        story.value = storyData.default;

        //const chapterFiles = import.meta.glob(`../stories/**/*.md`);
        //for (const chapterPath in chapterFiles) {
        //    const chapterFile = await chapterFiles[chapterPath]();
        //    console.log(chapterPath, chapterFile);
        //}

    } catch (err) {
        console.error(err);
    } finally {
        loading.value = false;
    }
});
</script>

<style scoped>
</style>
