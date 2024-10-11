<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="relative w-full h-screen">
        <img
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHd1NmlkbWkydzVkaGF3bnZmaXY5OTUzem0zeGE3a2c2NWFzd3prdyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/IvOFcGZeDA76P6XryO/giphy.gif"
            alt="Valorant Agent"
            class="absolute inset-0 object-cover w-full h-screen"
        />
        <div
            class="absolute inset-0 flex flex-col items-center justify-center w-full h-full space-y-16"
        >
            <div class="flex flex-col space-y-6">
                <p class="text-lg font-medium text-white">
                    5v5 character-based tactical shooter game
                </p>
                <img
                    src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/7b76209193f1bfe190d3ae6ef8728328870be9c3-736x138.png?auto=format&fit=fill&q=80&w=375"
                    alt="Valorant"
                />
            </div>
            <div class="flex flex-row space-x-20 font-black">
                <router-link to="/characters">
                    <button
                        class="px-12 py-5 text-white bg-red-500 outline-offset-4 outline hover:bg-white hover:text-red-500"
                    >
                        <p class="uppercase">Agents</p>
                    </button>
                </router-link>
                <router-link to="/weapons">
                    <button
                        class="px-12 py-5 text-white bg-blue-500 outline-offset-4 outline hover:bg-white hover:text-blue-500"
                    >
                        <p class="uppercase">Weapons</p>
                    </button>
                </router-link>
            </div>
        </div>
    </div>
</template>
