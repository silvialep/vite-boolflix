<script>

import AppSearch from './components/AppSearch.vue';
import AppMain from './components/AppMain.vue';

import {store} from './store.js'

import axios from "axios";



export default {
  data() {
    return {
      store,
    }

  },

  methods: {
    userMoviesSearch() {
      let newMovieSearch = this.store.APImoviesCall;

      if(this.store.userInput != '') {

        newMovieSearch += `&query=${encodeURIComponent(this.store.userInput)}&`;

        axios.get(newMovieSearch).then((res) => {

          this.store.movies = res.data.results;

          console.log(this.store.movies);

          this.store.userInput = '';
          this.store.loader = false;

        }).catch(() => {
          this.store.loader = true;
        })
      }
    },

    userSeriesSearch() {
      let newSerieSearch = this.store.APISeriesCall;

      if (this.store.userInput != '') {

        newSerieSearch += `&query=${encodeURIComponent(this.store.userInput)}&`;

        axios.get(newSerieSearch).then((res) => {

          this.store.series = res.data.results;

          console.log(this.store.series);

          this.store.userInput = '';
          this.store.loader = false;

        }).catch(() => {
          this.store.loader = true;
        })
      }
    },

    trendingMovies() {
      axios.get(this.store.APItrendingMovieCall).then((res) => {
        this.store.trendingMovies = res.data.results;
        console.log(this.store.trendingMovies);
      });

    },

    trendingSeries() {
      axios.get(this.store.APItrendingSeriesCall).then((res) => {
        this.store.trendingSeries = res.data.results;
        console.log(this.store.trendingSeries);
      });
    },

    

  },

  created() {
    this.trendingMovies();
    this.trendingSeries();

  },

  emits: [
    'user-search',

  ],

  components: {
    AppSearch,
    AppMain,
  },


  computed: {

  },




}

</script>

<template>

  <AppSearch @user-search="userMoviesSearch(), userSeriesSearch()"></AppSearch>

  <AppMain></AppMain>

</template>

<style scoped>

</style>
