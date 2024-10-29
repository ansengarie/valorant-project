<template>
    <div>
        <div v-if="loading" class="flex items-center justify-center h-screen">
            <div
                class="w-12 h-12 border-t-4 border-white border-solid rounded-full loader animate-spin"
            ></div>
        </div>

        <div v-else>
            <!-- Wrapper Utama dengan Flex -->
            <div
                class="flex flex-col md:flex-row-reverse items-center bg-gradient-to-r from-[#0B0F12] to-[#1B252D] min-h-screen p-5 md:p-20"
            >
                <!-- Gambar Agent -->
                <div class="flex justify-center w-full md:w-1/2">
                    <img
                        :src="character?.fullPortraitV2"
                        alt="Character Image"
                        class="w-full max-w-[300px] md:max-w-none md:h-[80vh] object-contain"
                    />
                </div>

                <!-- Detail Agent -->
                <div
                    class="w-full mt-10 space-y-8 text-center text-white md:w-1/2 md:text-left md:mt-0"
                >
                    <div class="mb-10">
                        <h1
                            class="mb-2 text-2xl font-black uppercase md:mb-4 md:text-6xl"
                        >
                            {{ character?.displayName }}
                        </h1>
                        <p class="text-sm md:text-base">
                            {{ character?.description }}
                        </p>
                    </div>

                    <!-- Role Agent -->
                    <div
                        class="flex flex-col mt-10 p-4 justify-center items-center gap-y-2 w-fit bg-[#21354a] outline outline-offset-4 outline-red-500 justify-self-center md:justify-self-start"
                    >
                        <img
                            :src="character?.role?.displayIcon"
                            alt="Role"
                            class="w-6 h-6 md:h-12 md:w-12"
                            style="
                                filter: invert(50%) sepia(100%) saturate(10000%);
                            "
                        />
                        <p>ROLE</p>
                        <p class="text-red-500 uppercase">
                            {{ character?.role?.displayName }}
                        </p>
                    </div>

                    <!-- Ability Section -->
                    <div>
                        <p
                            class="mt-10 text-2xl font-black uppercase md:text-5xl"
                        >
                            abbilities
                        </p>
                        <div
                            class="grid grid-cols-2 gap-4 mt-4 md:grid-cols-4 md:justify-items-start justify-items-center"
                        >
                            <div
                                v-for="(
                                    ability, index
                                ) in character?.abilities.slice(0, 4)"
                                :key="index"
                                class="flex flex-col items-center mt-2"
                            >
                                <img
                                    :src="ability.displayIcon"
                                    alt="Ability Icon"
                                    class="w-8 h-8 md:w-12 md:h-12"
                                />
                                <p class="text-white">
                                    {{ ability.displayName }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <p v-if="error">{{ error }}</p>
    </div>
</template>

<script>
import { useRoute } from "vue-router";
import { useFetchCharacterDetail } from "../services/valorantService";
import { onMounted } from "vue";

export default {
    setup() {
        const route = useRoute();
        console.log(route.params.id);
        const { character, loading, error, loadCharacter } =
            useFetchCharacterDetail(route.params.id);

        onMounted(async () => {
            await loadCharacter();
        });

        return { character, loading, error, loadCharacter };
    },
};
</script>
