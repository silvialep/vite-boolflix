<script>

import MovieItem from "./MovieItem.vue";
import SeriesItem from "./SeriesItem.vue";

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
    },

    methods: {
        
        
    },

    
    

}


</script>

<template>
    <div id="big-container">
        
        <h2>Movies</h2>
        <div id="movie-container">
            <MovieItem :movie="movie" v-for="movie in this.store.movies"></MovieItem>
            <!-- <MovieItem :trendMovie="trendMovie" v-for="trendMovie in this.store.trendingMovies"></MovieItem> -->

            
        </div>
        
        
        <h2>Series</h2>
        <div id="series-container">
            <SeriesItem :serie="serie" v-for="serie in this.store.series"></SeriesItem>
        </div>

    </div>
</template>

<style lang="scss" scoped>

#big-container {
    width: 1400px;
    margin: auto;
    padding: 40px;

    h2 {
        padding: 10px 0;
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
    overflow-x: scroll;
}
</style>