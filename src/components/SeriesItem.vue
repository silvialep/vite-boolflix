<script>

import { store } from "../store.js";


export default {

    name: 'SeriesItem',

    data() {
        return {
            store,

        }
    },

    props: {
        serie: Object,
    }

}


</script>

<template>
    <div class="serie-card">
            <img :src="`https://image.tmdb.org/t/p/w300/${serie.poster_path}`" alt="">
            <div class="serie-title">Titolo: <strong>{{ serie.name }}</strong></div>
            <div class="serie-orig-title">Titolo originale: {{ serie.original_name }}</div>
            <div class="serie-orig-lang">Lingua originale: {{ serie.original_language }} <img :src="`https://www.unknown.nu/flags/images/${serie.original_language}-100`" alt=""></div>
            <div class="serie-vote-avg">Voto medio: {{ serie.vote_average }}</div>

        </div>
</template>

<style lang="scss" scoped>
.serie-card {
    display: flex;
    flex-flow: column nowrap;
    gap: 5px;
    width: 300px;
    height: 600px;
    border: 1px solid red;
    padding: 8px;
    font-size: 0.8rem;

    img {
        flex-grow: 1;
        object-fit: contain;
        height: 100%;
    }
    .serie-title, .serie-orig-title, .serie-orig-lang, .serie-vote-avg {
        display: flex;
        align-items: center;
        gap: 5px;
        width: 100%;
        height: 8%;
        border-top: 1px solid red;
    }

    .serie-orig-lang {
        img {
            height: 50%;
            object-fit: contain;
            object-position: left;
        }
    }
}


</style>