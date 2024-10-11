<!-- src/components/CharacterSkeleton.vue -->
<template>
    <div class="character-skeleton">
        <div class="skeleton-image"></div>
        <div class="skeleton-name"></div>
        <div class="skeleton-description"></div>
    </div>
</template>

<style scoped>
.character-skeleton {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 150px; /* Ukuran sesuai dengan kartu karakter */
    margin: 10px;
    padding: 10px;
    border-radius: 8px;
    background-color: #f0f0f0; /* Warna latar belakang untuk skeleton */
}

.skeleton-image {
    width: 100%;
    height: 100px; /* Tinggi gambar */
    background-color: #ccc; /* Warna latar belakang untuk gambar */
    border-radius: 4px;
}

.skeleton-name {
    width: 80%;
    height: 20px; /* Tinggi nama */
    background-color: #ddd; /* Warna latar belakang untuk nama */
    margin-top: 10px;
}

.skeleton-description {
    width: 90%;
    height: 15px; /* Tinggi deskripsi */
    background-color: #ddd; /* Warna latar belakang untuk deskripsi */
    margin-top: 5px;
}
</style>
