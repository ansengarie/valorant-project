<template>
    <div v-if="loading" class="flex items-center justify-center h-screen">
        <div
            class="w-12 h-12 border-t-4 border-white border-solid rounded-full loader animate-spin"
        ></div>
    </div>
    <div v-else>
        <div
            class="relative flex items-center bg-gradient-to-r from-[#0B0F12] to-[#1B252D] w-full overflow-hidden md:h-screen min-h-screen"
        >
            <div
                class="absolute inset-0 flex items-center h-full p-20 mt-14 md:left-20 md:mt-0"
            >
                <div
                    class="space-y-4 text-white divide-y text-start divide-solid"
                >
                    <p class="text-4xl font-black md:text-6xl">
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
                                {{ weapon?.weaponStats?.runSpeedMultiplier }}
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
                                {{ weapon?.weaponStats?.firstBulletAccuracy }}
                            </p>
                        </span>
                    </div>
                </div>
            </div>
            <div>
                <img
                    :src="weapon?.displayIcon"
                    alt="weapon Image"
                    class="absolute top-20 md:top-[320px] md:object-cover md:right-20 md:w-fit"
                />
            </div>
        </div>
    </div>
    <p v-if="error">{{ error }}</p>
</template>

<script>
import { useRoute } from "vue-router";
import { useFetchWeaponDetail } from "../services/valorantService";
import { onMounted } from "vue";

export default {
    setup() {
        const route = useRoute();
        console.log(route.params.id);
        const { weapon, loading, error, loadWeapon } = useFetchWeaponDetail(
            route.params.id
        );

        onMounted(async () => {
            loadWeapon();
        });

        return { weapon, loading, error, loadWeapon };
    },
};
</script>
