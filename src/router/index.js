import { createRouter, createWebHistory } from "vue-router";
import Characters from "../views/Characters.vue"; // Halaman untuk daftar karakter
import CharacterDetail from "../views/CharacterDetail.vue"; // Halaman untuk detail karakter
import Weapons from "../views/Weapons.vue"; // Halaman untuk daftar weapon
import WeaponDetail from "../views/WeaponDetail.vue"; // Halaman untuk detail weapon
import Home from "../views/Home.vue"; // Halaman utama

const routes = [
    { path: "/", component: Home }, // Redirect ke daftar karakter
    { path: "/characters", component: Characters }, // Rute untuk halaman daftar karakter
    { path: "/characters/:id", component: CharacterDetail }, // Rute untuk detail karakter dengan parameter ID
    { path: "/weapons", component: Weapons }, // Rute untuk halaman daftar weapon
    { path: "/weapons/:id", component: WeaponDetail }, // Rute untuk detail weapon dengan parameter ID
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
