<script>

import { store } from "../store.js";




export default {

    name: 'MovieItem',

    data() {
        return {
            store,
            languageFlag: this.movie.original_language,
            movieImage: 'https://image.tmdb.org/t/p/w342' + this.movie.poster_path,
        }
    },

    props: {
        movie: Object,
        trendMovie: Object,
    },

    methods: {

    },

    computed: {
        correctFlag() {
            switch(this.languageFlag) {
                case "en":
                    return "gb";
                case "ja":
                    return "jp";
                case "zh":
                    return "cn";
                case "ko":
                    return "kr";
                case "da":
                    return "dk";
                case "fa":
                    return "ir";
                case "he":
                    return "il";
                case "ar":
                    return "eg";
                case "sv":
                    return "se";
                default:
                    return this.languageFlag;
            }
        },

        correctImage() {
            if(this.movieImage.slice(this.movieImage.length - 4) == 'null') {
                this.movieImage = 'https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg';
            } else {
                return this.movieImage;
            }
            return this.movieImage;

        },
    },
}


</script>


<template>
    
    <div class="movie-card" v-if="this.store.loader == false">
        <img :src="`${correctImage}`" alt="" >
        <div class="movie-title">Titolo: <strong>{{ movie.title }}</strong></div>
        <div class="movie-orig-title">Titolo originale: {{ movie.original_title }}</div>
        <div class="movie-orig-lang">Lingua originale: <span :class="`fi fi-${correctFlag}`"></span></div>
        <div class="movie-vote-avg">Voto medio: <i v-for="star in Math.ceil(movie.vote_average / 2)" class="fa-solid fa-star"></i><i v-for="star in 5 - Math.ceil(movie.vote_average / 2)" class="fa-regular fa-star"></i></div>

    </div>


</template>

<style lang="scss" scoped>

.movie-card {
    display: flex;
    flex-flow: column nowrap;
    gap: 5px;
    min-width: 300px;
    max-width: 300px;
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
        justify-content: flex-start;
        gap: 8px;
        width: 100%;
        height: 8%;
        border-top: 1px solid red;
    }
}





</style>