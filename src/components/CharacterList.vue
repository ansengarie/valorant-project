<!-- eslint-disable vue/no-use-v-if-with-v-for -->
<!-- src/components/CharacterList.vue -->
<template>
    <div class="container mx-auto">
        <CharacterSkeleton
            v-if="loading"
            v-for="index in 10"
            :key="index"
        />
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
import CharacterSkeleton from "./CharacterSkeleton.vue";

export default {
    components: {
        CharacterCard,
        CharacterSkeleton,
    },
    props: {
        characters: Array,
        loading: Boolean,
    },
};
</script>
