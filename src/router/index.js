import { createRouter, createWebHistory } from "vue-router";
import Characters from "../views/Characters.vue";
import CharacterDetail from "../views/CharacterDetail.vue";
import Weapons from "../views/Weapons.vue";
import WeaponDetail from "../views/WeaponDetail.vue";
import Home from "../views/Home.vue";

const routes = [
    { path: "/", component: Home },
    { path: "/characters", component: Characters },
    { path: "/characters/:id", component: CharacterDetail },
    { path: "/weapons", component: Weapons },
    { path: "/weapons/:id", component: WeaponDetail },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
