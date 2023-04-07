<script>

import { store } from "../store.js";




export default {

    name: 'MovieItem',

    data() {
        return {
            store,
            // languageFlag: this.movie.original_language,
        }
    },

    props: {
        movie: Object,
    },

    methods: {

    },

    // computed: {
    //     languageFlag() {
    //         switch(this.movie.original_language) {
    //             case "en":
    //                 return "gb";
    //             case "ja":
    //                 return "jp";
    //             case "zh":
    //                 return "cn";
    //             case "ko":
    //                 return "kr";
    //             default:
    //                 return this.movie.original_language;
    //         }
    //     },
    // },
}


</script>

<template>
    
    <div class="movie-card">
        <img :src="`https://image.tmdb.org/t/p/w300/${movie.poster_path}`" alt="">
        <div class="movie-title">Titolo: <strong>{{ movie.title }}</strong></div>
        <div class="movie-orig-title">Titolo originale: {{ movie.original_title }}</div>
        <div class="movie-orig-lang">Lingua originale: {{ movie.original_language }} <img :src="`https://www.unknown.nu/flags/images/${movie.original_language}-100`" alt=""></div>
        <div class="movie-vote-avg">Voto medio: {{ movie.vote_average }}</div>

    </div>


</template>

<style lang="scss" scoped>

.movie-card {
    display: flex;
    flex-flow: column nowrap;
    gap: 5px;
    min-width: 300px;
    height: 600px;
    border: 1px solid red;
    padding: 8px;
    font-size: 0.8rem;

    img {
        flex-grow: 1;
        object-fit: contain;
        height: 100%;
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
            height: 50%;
            object-fit: contain;
            object-position: left;
        }
    }
}





</style>