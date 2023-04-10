<script>

import { store } from "../store.js";


export default {

    name: 'TrendSeriesItem',

    data() {
        return {
            store,
            languageFlag: this.trendSerie.original_language,
            serieImage: 'https://image.tmdb.org/t/p/w342' + this.trendSerie.poster_path,
        }
    },

    props: {
        trendSerie: Object,
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
                case "ar":
                    return "eg";
                case "sv":
                    return "se";
                default:
                    return this.languageFlag;
            }
        },

        correctImage() {
            if (this.serieImage.slice(this.serieImage.length - 4) == 'null') {
                this.serieImage = 'https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg';
            } else {
                return this.serieImage;
            }
            return this.serieImage;

        },
    },

}


</script>

<template>
    <div class="trend-serie" v-if="this.store.loader == true">
        <img :src="`${correctImage}`" alt="">
        <div class="serie-title">Titolo: <strong>{{ trendSerie.name }}</strong></div>
        <div class="serie-orig-title">Titolo originale: {{ trendSerie.original_name }}</div>
        <div class="serie-orig-lang">Lingua originale: <span :class="`fi fi-${correctFlag}`"></span></div>
        <div class="serie-vote-avg">Voto medio: <i v-for="star in Math.ceil(trendSerie.vote_average / 2)" class="fa-solid fa-star"></i><i v-for="star in 5 - Math.ceil(trendSerie.vote_average / 2)" class="fa-regular fa-star"></i></div>

    </div>
</template>

<style lang="scss" scoped>
.trend-serie {
    display: flex;
    flex-flow: column nowrap;
    gap: 5px;
    min-width: 300px;
    max-width: 300px;
    height: 600px;
    padding-bottom: 8px;
    font-size: 0.8rem;

    img {
        // flex-grow: 1;
        object-fit: contain;
        height: 100%;
    }

    .serie-title, .serie-orig-title, .serie-orig-lang, .serie-vote-avg {
        display: flex;
        align-items: center;
        gap: 5px;
        width: 100%;
    }

}

</style>