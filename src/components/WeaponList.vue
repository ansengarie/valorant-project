<template>
    <div class="container mx-auto">
        <div v-if="loading" class="flex items-center justify-center h-screen">
            <div
                class="w-12 h-12 border-t-4 border-white border-solid rounded-full loader animate-spin"
            ></div>
        </div>
        <div
            v-else
            class="grid justify-center w-full grid-cols-3 gap-4 md:grid-row"
        >
            <WeaponCard
                v-for="weapon in weapons"
                :key="weapon.uuid"
                :weapon="weapon"
            />
        </div>
    </div>
</template>

<script>
import WeaponCard from "./WeaponCard.vue";

export default {
    components: {
        WeaponCard,
    },
    props: {
        weapons: Array,
        loading: Boolean,
    },
};
</script>
