<template>
    <Switch v-model="enabled" class="group relative inline-flex h-5 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2">
        <span aria-hidden="true" class="pointer-events-none absolute size-full rounded-md bg-white" />
        <span aria-hidden="true" :class="[enabled ? 'bg-indigo-600' : 'bg-gray-200', 'pointer-events-none absolute mx-auto h-4 w-9 rounded-full transition-colors duration-200 ease-in-out']" />
        <span aria-hidden="true" :class="[enabled ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none absolute left-0 inline-block size-5 transform rounded-full border border-gray-200 bg-white shadow ring-0 transition-transform duration-200 ease-in-out']" />
    </Switch>
</template>

<script lang="ts">
/* Declarations */
</script>

<script lang="ts" setup>
import { ref } from 'vue';
import { Switch } from '@headlessui/vue';

const enabled = ref<boolean>(false);
</script>

<style lang="css" scoped>
@import 'tailwindcss';

/* CSS Code */
</style>
