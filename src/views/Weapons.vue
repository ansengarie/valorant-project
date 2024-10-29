<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div v-if="loading" class="flex items-center justify-center h-screen">
        <div
            class="w-12 h-12 border-t-4 border-white border-solid rounded-full loader animate-spin"
        ></div>
    </div>
    <div v-else>
        <div class="w-11/12 py-10 mx-auto space-y-10">
            <h1 class="mb-4 font-sans text-2xl font-bold text-white">
                WEAPONS
            </h1>
            <WeaponList :weapons="weapons" />
        </div>
    </div>
</template>

<script>
import { useFetchWeapons } from "../services/valorantService";
import WeaponList from "../components/WeaponList.vue";
import { onMounted } from "vue";

export default {
    components: {
        WeaponList,
    },
    setup() {
        const { weapons, loading, error, loadWeapons } = useFetchWeapons();

        onMounted(() => {
            loadWeapons();
        });

        return { weapons, loading, error, loadWeapons };
    },
};
</script>
