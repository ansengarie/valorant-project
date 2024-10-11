<template>
    <div @click="goToDetail">
        <div class="bg-[#19222D] relative overflow-hidden w-full aspect-square">
            <img
                :src="character.fullPortraitV2"
                alt="Character Icon"
                class="absolute inset-0 object-cover w-full h-full transition-transform duration-300 hover:scale-125 drop-shadow-md"
            />
        </div>
        <div class="bg-[#ededed] p-2 z-50">
            <h3 class="font-bold text-black uppercase drop-shadow-md">
                {{ character.displayName }}
            </h3>
        </div>
    </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
    props: {
        character: Object,
    },
    setup(props) {
        const router = useRouter();

        const goToDetail = () => {
            router.push(`/characters/${props.character.uuid}`); // Mengarahkan ke halaman detail
        };

        return { goToDetail };
    },
};
</script>
