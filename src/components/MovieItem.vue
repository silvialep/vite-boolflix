<script>

import { store } from "../store.js";


export default {

    name: 'MovieItem',

    data() {
        return {


            store,

        }
    },

    props: {
        movie: Object,
    },

    methods: {
    },
}


</script>

<template>
    <div class="movie-card" v-for="movie in this.store.movies" v-if="this.store.loader == false">
        <img src="" alt="">
        <div class="movie-title">Titolo: {{ movie.title }}</div>
        <div class="movie-orig-title">Titolo originale: {{ movie.original_title }}</div>
        <div class="movie-orig-lang">Lingua originale: <img :src="`https://www.unknown.nu/flags/images/${movie.original_language}-100`" :alt="movie.original_language"></div>
        <div class="movie-vote-avg">Voto medio: {{ movie.vote_average }}</div>

    </div>
</template>

<style lang="scss" scoped>
.movie-card {
    display: flex;
    flex-flow: column nowrap;
    gap: 5px;
    width: calc(100% / 4 - 10px);
    height: 600px;
    border: 1px solid red;
    padding: 8px;

    img {
        flex-grow: 1;
    }
    .movie-title, .movie-orig-title, .movie-orig-lang, .movie-vote-avg {
        display: flex;
        align-items: center;
        gap: 5px;
        width: 100%;
        height: 8%;
        border-top: 1px solid red;
    }

    .movie-orig-lang {
        img {
            height: 60%;
            object-fit: contain;
            object-position: left;
        }
    }
}


</style>