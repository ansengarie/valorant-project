<template>
    <div class="container mx-auto">
        <template v-if="loading">
            <CharacterSkeleton v-for="index in 10" :key="index" />
        </template>
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
import CharacterSkeleton from "./CharacterSkeleton.vue";

export default {
    components: {
        WeaponCard,
        CharacterSkeleton,
    },
    props: {
        weapons: Array,
        loading: Boolean,
    },
};
</script>
