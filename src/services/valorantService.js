// src/services/valorantService.js
const BASE_URL = "https://valorant-api.com/v1";

export const fetchCharacters = async () => {
    try {
        const response = await fetch(
            `${BASE_URL}/agents?isPlayableCharacter=true`
        );
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        return data.data; // Mengembalikan array karakter
    } catch (error) {
        console.error("Error fetching characters:", error);
        return [];
    }
};

export const fetchCharacterDetail = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/agents/${id}`);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        return data.data; // Mengembalikan objek karakter
    } catch (error) {
        console.error("Error fetching character detail:", error);
        return null;
    }
};

export const fetchWeapons = async () => {
    try {
        const response = await fetch(`${BASE_URL}/weapons`);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        return data.data; // Mengembalikan array weapon
    } catch (error) {
        console.error("Error fetching weapons:", error);
        return [];
    }
};

export const fetchWeaponDetail = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/weapons/${id}`);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        return data.data; // Mengembalikan objek weapon
    } catch (error) {
        console.error("Error fetching weapon detail:", error);
        return null;
    }
};

// Jika Anda ingin menggunakan Composition API untuk mengelola state
import { ref } from "vue";

export const useFetchCharacters = () => {
    const characters = ref([]);
    const loading = ref(false);
    const error = ref(null);

    const loadCharacters = async () => {
        loading.value = true;
        error.value = null;

        try {
            characters.value = await fetchCharacters();
        } catch (err) {
            error.value = err.message;
        } finally {
            loading.value = false;
        }
    };

    return { characters, loading, error, loadCharacters };
};

export const useFetchCharacterDetail = (id) => {
    const character = ref(null);
    const loading = ref(false);
    const error = ref(null);

    const loadCharacter = async () => {
        loading.value = true;
        error.value = null;

        try {
            character.value = await fetchCharacterDetail(id);
        } catch (err) {
            error.value = err.message;
        } finally {
            loading.value = false;
        }
    };

    return { character, loading, error, loadCharacter };
};

export const useFetchWeapons = () => {
    const weapons = ref([]);
    const loading = ref(false);
    const error = ref(null);

    const loadWeapons = async () => {
        loading.value = true;
        error.value = null;

        try {
            weapons.value = await fetchWeapons();
        } catch (err) {
            error.value = err.message;
        } finally {
            loading.value = false;
        }
    };

    return { weapons, loading, error, loadWeapons };
};

export const useFetchWeaponById = (id) => {
    const weapon = ref(null);
    const loading = ref(false);
    const error = ref(null);

    const loadWeapon = async () => {
        loading.value = true;
        error.value = null;

        try {
            weapon.value = await fetchWeaponDetail(id);
        } catch (err) {
            error.value = err.message;
        } finally {
            loading.value = false;
        }
    };

    return { weapon, loading, error, loadWeapon };
};
