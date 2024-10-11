<template>
    <div @click="goToDetail">
        <div class="bg-[#19222D] relative overflow-hidden w-full aspect-square">
            <div class="absolute inset-0 flex items-center justify-center">
                <img
                    :src="weapon?.displayIcon"
                    alt="Weapon Icon"
                    class="transition-transform duration-300 hover:scale-125 drop-shadow-md"
                />
            </div>
        </div>
        <div class="bg-[#ededed] p-2 z-50">
            <h3 class="font-bold text-black uppercase drop-shadow-md">
                {{ weapon?.displayName }}
            </h3>
        </div>
    </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
    props: {
        weapon: Object,
    },
    setup(props) {
        const router = useRouter();

        const goToDetail = () => {
            router.push(`/weapons/${props.weapon.uuid}`); // Mengarahkan ke halaman detail
        };

        return { goToDetail };
    },
};
</script>
