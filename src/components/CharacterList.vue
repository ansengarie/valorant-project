<!-- eslint-disable vue/no-use-v-if-with-v-for -->
<!-- src/components/CharacterList.vue -->
<template>
    <div class="container mx-auto">
        <div v-if="loading" class="flex items-center justify-center h-screen">
            <div
                class="w-12 h-12 border-t-4 border-white border-solid rounded-full loader animate-spin"
            ></div>
        </div>
        <div
            v-else
            class="grid justify-center w-full grid-cols-4 gap-4 md:grid-row"
        >
            <CharacterCard
                v-for="character in characters"
                :key="character.uuid"
                :character="character"
            />
        </div>
    </div>
</template>

<script>
import CharacterCard from "./CharacterCard.vue";

export default {
    components: {
        CharacterCard,
    },
    props: {
        characters: Array,
        loading: Boolean,
    },
};
</script>
