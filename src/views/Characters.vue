<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="w-11/12 py-10 mx-auto space-y-10">
        <h1 class="mb-4 font-sans text-2xl font-bold text-white">AGENTS</h1>
        <div v-if="loading">Loading...</div>
        <div v-if="error">{{ error }}</div>
        <div v-else>
            <CharacterList :characters="characters" />
        </div>
    </div>
</template>

<script>
import { onMounted } from "vue";
import { useFetchCharacters } from "../services/valorantService";
import CharacterList from "../components/CharacterList.vue";

export default {
    components: {
        CharacterList,
    },
    setup() {
        const { characters, loading, error, loadCharacters } =
            useFetchCharacters();

        onMounted(() => {
            loadCharacters();
        });

        return { characters, loading, error };
    },
};
</script>
