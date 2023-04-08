<script>

import { store } from "../store.js";




export default {

    name: 'TrendMovieItem',

    data() {
        return {
            store,
            languageFlag: this.trendMovie.original_language,
            movieImage: 'https://image.tmdb.org/t/p/w342' + this.trendMovie.poster_path,
        }
    },

    props: {
        trendMovie: Object,
    },

    methods: {

    },

    computed: {
        correctFlag() {
            switch (this.languageFlag) {
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
                default:
                    return this.languageFlag;
            }
        },

        correctImage() {
            if (this.movieImage.slice(this.movieImage.length - 4) == 'null') {
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

    <div class="trend-movie" v-if="this.store.loader == true">
            <img :src="`https://image.tmdb.org/t/p/w342/${trendMovie.poster_path}`" alt="">
            <div class="movie-title">Titolo: <strong>{{ trendMovie.title }}</strong></div>
            <div class="movie-orig-title">Titolo originale: {{ trendMovie.original_title }}</div>
            <div class="movie-orig-lang">Lingua originale: <span :class="`fi fi-${correctFlag}`"></span></div>
            <div class="movie-vote-avg">Voto medio: <i v-for="star in Math.ceil(trendMovie.vote_average / 2)" class="fa-solid fa-star"></i><i v-for="star in 5 - Math.ceil(trendMovie.vote_average / 2)" class="fa-regular fa-star"></i></div>

    </div>
</template>

<style lang="scss" scoped>
.trend-movie {
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