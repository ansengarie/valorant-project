<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="w-11/12 py-10 mx-auto space-y-10">
        <h1 class="mb-4 font-sans text-2xl font-bold text-white">WEAPONS</h1>
        <div v-if="loading">Loading...</div>
        <div v-if="error">{{ error }}</div>
        <div v-else>
            <WeaponList :weapons="weapons" />
        </div>
    </div>
</template>

<script>
import { onMounted } from "vue";
import { useFetchWeapons } from "../services/valorantService";
import WeaponList from "../components/WeaponList.vue";

export default {
    components: {
        WeaponList,
    },
    setup() {
        const { weapons, loading, error, loadWeapons } = useFetchWeapons();

        onMounted(() => {
            loadWeapons();
        });

        return { weapons, loading, error };
    },
};
</script>
