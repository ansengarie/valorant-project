<template>
    <div>
        <div v-if="loading" class="flex items-center justify-center h-screen">
            <div
                class="w-12 h-12 border-t-4 border-white border-solid rounded-full loader animate-spin"
            ></div>
        </div>
        <div v-else>
            <div
                class="relative flex items-center bg-gradient-to-r from-[#0B0F12] to-[#1B252D] h-screen w-full overflow-hidden"
            >
                <div
                    class="absolute inset-0 flex items-center h-full p-20 left-20"
                >
                    <div class="space-y-10 text-white text-start">
                        <p class="text-6xl font-black">
                            {{ character?.displayName }}
                        </p>
                        <p class="w-[50%]">
                            {{ character?.description }}
                        </p>
                        <div
                            class="grid p-4 justify-items-center gap-y-2 w-fit aspect-square outline outline-offset-4 bg-[#21354a] outline-red-500"
                        >
                            <img
                                :src="character?.role?.displayIcon"
                                alt="Role"
                                class="w-12 h-12 filter"
                                style="
                                    filter: invert(50%) sepia(100%)
                                        saturate(10000%);
                                "
                            />
                            <p>ROLE</p>
                            <p class="text-red-500 uppercase">
                                {{ character?.role?.displayName }}
                            </p>
                        </div>
                        <div class="w-[50%]">
                            <h1 class="mb-4 text-5xl font-black">ABILITIES</h1>
                            <div class="grid grid-cols-4 justify-items-stretch">
                                <div
                                    v-for="(
                                        ability, index
                                    ) in character?.abilities.slice(0, 4)"
                                    :key="index"
                                >
                                    <div
                                        class="flex flex-col items-center justify-center w-fit"
                                    >
                                        <img
                                            :src="ability.displayIcon"
                                            alt=""
                                            class="w-12 h-12 mb-2"
                                        />
                                        <p>
                                            {{ ability.displayName }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img
                    :src="character?.fullPortraitV2"
                    alt="Character Image"
                    class="absolute top-0 right-0 object-cover h-full"
                />
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
        const route = useRoute(); // Mendapatkan ID dari URL
        console.log(route.params.id);
        const { character, loading, error, loadCharacter } =
            useFetchCharacterDetail(route.params.id);

        onMounted(() => {
            loadCharacter(); // Panggil fungsi loadCharacter ketika komponen di-mount
        });

        return { character, loading, error };
    },
};
</script>
