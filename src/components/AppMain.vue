<script>

import MovieItem from "./MovieItem.vue";
import SeriesItem from "./SeriesItem.vue";
import TrendMovieItem from "./TrendMovieItem.vue";
import TrendSeriesItem from "./TrendSeriesItem.vue";

import { store } from "../store.js";
import axios from "axios";



export default {

    name: 'AppMain',

    data() {
        return {
            store,

        }
    },

    components: {
        MovieItem,
        SeriesItem,
        TrendMovieItem,
        TrendSeriesItem,
    },

    emits: [
    ],

    methods: {
        
        
    },

    
    

}


</script>

<template>
    <div id="big-container">
        
        <h2 v-if="this.store.loader == false">Movies</h2>
        <h2 v-else>Trending Movies</h2>
        <div id="movie-container">
            <MovieItem :movie="movie" v-for="movie in this.store.movies"></MovieItem>
            <TrendMovieItem :trendMovie="trendMovie" v-for="trendMovie in this.store.trendingMovies"></TrendMovieItem>
        </div>
        
        
        <h2 v-if="this.store.loader == false">Series</h2>
        <h2 v-else>Trending Series</h2>
        <div id="series-container">
            <SeriesItem :serie="serie" v-for="serie in this.store.series"></SeriesItem>
            <TrendSeriesItem :trendSerie="trendSerie" v-for="trendSerie in this.store.trendingSeries"></TrendSeriesItem>
        </div>

    </div>
</template>

<style lang="scss" scoped>

#big-container {
    width: 1400px;
    margin: 80px auto;
    padding: 20px;

    h2 {
        padding: 10px 0;
        font-size: 2.5rem;
    }

    
    
}

#movie-container {
    display: flex;
    flex-flow: row nowrap;
    gap: 10px;
    height: auto;
    margin-bottom: 40px;
    overflow-x: scroll;

}

#series-container {
    display: flex;
    flex-flow: row nowrap;
    gap: 10px;
    height: auto;
    overflow-x: scroll;
}
</style>