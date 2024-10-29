import { ref } from "vue";

const BASE_URL = process.env.VUE_APP_BASE_URL;

export const useFetchCharacters = () => {
    const characters = ref([]);
    const loading = ref(false);
    const error = ref(null);

    const loadCharacters = async () => {
        try {
            const response = await fetch(
                `${BASE_URL}/agents?isPlayableCharacter=true`
            );
            const data = await response.json();
            characters.value = data.data;
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
        try {
            const response = await fetch(`${BASE_URL}/agents/${id}`);
            const data = await response.json();
            character.value = data.data;
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
        try {
            const response = await fetch(`${BASE_URL}/weapons`);
            const data = await response.json();
            weapons.value = data.data;
        } catch (err) {
            error.value = err.message;
        } finally {
            loading.value = false;
        }
    };

    return { weapons, loading, error, loadWeapons };
};

export const useFetchWeaponDetail = (id) => {
    const weapon = ref(null);
    const loading = ref(false);
    const error = ref(null);

    const loadWeapon = async () => {
        try {
            const response = await fetch(`${BASE_URL}/weapons/${id}`);
            const data = await response.json();
            weapon.value = data.data;
        } catch (err) {
            error.value = err.message;
        } finally {
            loading.value = false;
        }
    };

    return { weapon, loading, error, loadWeapon };
};
