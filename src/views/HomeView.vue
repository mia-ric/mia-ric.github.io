<template>
    <div class="mx-auto max-w-6xl my-20 text-center">
        <h1 class="text-white text-5xl font-display">Work in Progress</h1>
        <p class="mx-auto prose prose-invert prose-xl font-semibold mt-6">
            Diese Seite befindet sich noch im Aufbau. Besuch mich einfach auf 
            <a href="https://www.fanfiktion.de/u/miaric">FanFiktion.de</a>,
            <a href="https://www.youtube.com/@mia-ric">YouTube</a> oder auf 
            <a href="https://www.patreon.com/c/miaRIC">Patreon</a> wenn du 
            bereits in die ersten Kapitel meiner TMNT Fanfiktion eintauchen möchtest.
        </p>
        <p class="mx-auto prose prose-invert prose-xl font-semibold mt-6">
            Trotzdem, vielen Dank für deinen Besuch.
        </p>
    </div>

    <div class="mt-32 max-w-6xl mx-auto">
        <div class="my-18 max-w-2xl">
            <h2 class="text-4xl font-display">MINT - The Foot Clan</h2>
            <div class="prose prose-invert prose-lg py-4 w-full max-w-none">
                <p class="line-clamp-3">
                    Von einer einfachen Straßen-Diebin zur Chūnin eines fast vergessenen Ninja-Clans, begibt sich Rey auf einen blutigen Pfad, der sie immer tiefer in die gefährliche Unterwelt von New York führt. Fest durch ihre Loyalität zu ihrer Anfürherin und Jonin Oroku Karai verstrickt, erkennt Rey bald, dass die Machtkämpfe um die Herrschaft der Stadt wie auch im Clan selbst von mysteriösen Kräften durchzogen sind. Inmitten wachsender Fehden und düsterer Intrigen entfaltet sich eine weitere übernatürliche und mächtige Verschwörung, die die Grenzen dieser Welt und Dimension überschreitet und alles, was Rey bisher kannte, ins Wanken bringt. --- Inspiriert von den Comics des IDW Publishing Verlags und der CGI TV-Serie von nickelodeon (2012), entwickelt *The Foot Clan* eine eigene Vision des von Kevin Eastman und Peter Laird erschaffenen Universums der Teenage Mutant Ninja Turtles.
                </p>
                <div class="w-full flex justify-end">
                    <button type="button">Weiterlesen</button>
                </div>
            </div>
        </div>

        <div class="my-18 max-w-2xl ml-auto">
            <h2 class="text-4xl font-display">MINT - The Green Reptiles</h2>
            <div class="prose prose-invert prose-lg py-4 w-full max-w-none">
                <p class="line-clamp-3">
                    Ein Leben in einer anderen Haut, doch die Vergangenheit lässt sich nicht so einfach abschütteln. So treffen zu den wiederkehrenden alten Problemen noch ein weitaus größerer Konflikt. Dunkle Mächte setzen ihr nach, und dieser Kampf ist mehr, als sie allein bewältigen kann. Doch auch diesmal ist sie nicht völlig auf sich gestellt. An ihrer Seite stehen ihre 4 neuen grünen Freunde, die sie mit unerwarteten Kräften unterstützen. Gemeinsam müssen sie sich gegen das Böse stellen, das die Welt zu verschlingen droht – ein Kampf, der nicht nur ihre Kräfte und Entschlossenheit auf die Probe stellt. --- Inspiriert von den Comics des IDW Publishing Verlags und der CGI TV-Serie von nickelodeon (2012) baut das Sequel _The Green Reptiles_ auf die bereits in _The Foot Clan_ vorgestellte eigene Vision des von Kevin Eastman und Peter Laird erschaffenen Universums der Teenage Mutant Ninja Turtles auf.
                </p>
                <div class="w-full flex justify-end">
                    <button type="button">Weiterlesen</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
@import '@/styles/theme.css';

button {
    @apply inline-flex px-6 py-0.5 font-semibold rounded-full cursor-pointer;
    @apply transition-colors duration-200 ease-in-out;
    @apply bg-white text-black;

    &:not(:disabled):hover {
        @apply bg-white/75;
    }
}
</style>
