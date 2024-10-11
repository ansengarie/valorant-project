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
                    <div
                        class="space-y-4 text-white divide-y text-start divide-solid"
                    >
                        <p class="text-6xl font-black">
                            {{ weapon?.displayName }} Stats
                        </p>
                        <div class="pt-2">
                            <span>
                                <p>
                                    Category:
                                    {{ weapon?.shopData?.category }}
                                </p>
                            </span>
                            <span>
                                <p>
                                    Cost:
                                    {{ weapon?.shopData?.cost }}
                                </p>
                            </span>
                            <span>
                                <p class="pt-2">
                                    Head Damage:
                                    {{
                                        weapon?.weaponStats?.damageRanges[0]
                                            ?.headDamage
                                    }}
                                </p>
                            </span>
                            <span>
                                <p>
                                    Body Damage:
                                    {{
                                        weapon?.weaponStats?.damageRanges[0]
                                            ?.bodyDamage
                                    }}
                                </p>
                            </span>
                            <span>
                                <p>
                                    Leg Damage:
                                    {{
                                        weapon?.weaponStats?.damageRanges[0]
                                            ?.legDamage
                                    }}
                                </p>
                            </span>
                            <span>
                                <p class="pt-2">
                                    Firerate:
                                    {{ weapon?.weaponStats?.fireRate }}
                                </p>
                            </span>
                            <span>
                                <p>
                                    Magazine Size:
                                    {{ weapon?.weaponStats?.magazineSize }}
                                </p>
                            </span>
                            <span>
                                <p>
                                    Run Speed Multiplier :
                                    {{
                                        weapon?.weaponStats?.runSpeedMultiplier
                                    }}
                                </p>
                            </span>
                            <span>
                                <p>
                                    Equip Time Seconds:
                                    {{ weapon?.weaponStats?.equipTimeSeconds }}
                                </p>
                            </span>
                            <span>
                                <p>
                                    Reload Time Seconds:
                                    {{ weapon?.weaponStats?.reloadTimeSeconds }}
                                </p>
                            </span>
                            <span>
                                <p>
                                    First Bullet Accuracy :
                                    {{
                                        weapon?.weaponStats?.firstBulletAccuracy
                                    }}
                                </p>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="absolute right-20 top-100">
                    <img
                        :src="weapon?.displayIcon"
                        alt="weapon Image"
                        class="object-cover w-full"
                    />
                </div>
            </div>
        </div>
        <p v-if="error">{{ error }}</p>
    </div>
</template>

<script>
import { useRoute } from "vue-router";
import { useFetchWeaponById } from "../services/valorantService";
import { onMounted } from "vue";

export default {
    setup() {
        const route = useRoute(); // Mendapatkan ID dari URL
        console.log(route.params.id);
        const { weapon, loading, error, loadWeapon } = useFetchWeaponById(
            route.params.id
        );

        onMounted(() => {
            loadWeapon(); // Panggil fungsi loadWeapon ketika komponen di-mount
        });

        return { weapon, loading, error };
    },
};
</script>
