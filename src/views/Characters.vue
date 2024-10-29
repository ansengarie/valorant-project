<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div v-if="loading" class="flex items-center justify-center h-screen">
        <div
            class="w-12 h-12 border-t-4 border-white border-solid rounded-full loader animate-spin"
        ></div>
    </div>
    <div v-else>
        <div class="w-11/12 py-10 mx-auto space-y-10">
            <h1 class="mb-4 font-sans text-2xl font-bold text-white">AGENTS</h1>
            <CharacterList :characters="characters" />
        </div>
    </div>
</template>

<script>
import { useFetchCharacters } from "../services/valorantService";
import CharacterList from "../components/CharacterList.vue";
import { onMounted } from "vue";

export default {
    components: {
        CharacterList,
    },
    setup() {
        const { characters, loading, error, loadCharacters } =
            useFetchCharacters();

        onMounted(async () => {
            await loadCharacters();
        });

        return { characters, loading, error, loadCharacters };
    },
};
</script>
