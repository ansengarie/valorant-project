<template>
    <div @click="goToDetail">
        <div class="bg-[#19222D] relative overflow-hidden w-full aspect-square">
            <img
                :src="character.fullPortraitV2"
                alt="Character Icon"
                class="absolute inset-0 object-cover w-full h-full transition-transform duration-300 hover:scale-125 drop-shadow-md"
            />
        </div>
        <div class="bg-[#ededed] p-1 z-50 md:p-2">
            <h3
                class="text-[12px] font-bold text-center text-black uppercase md:text-base drop-shadow-md"
            >
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
            router.push(`/characters/${props.character.uuid}`);
        };

        return { goToDetail };
    },
};
</script>
