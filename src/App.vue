<script>

import AppSearch from './components/AppSearch.vue';

import {store} from './store.js'

import axios from "axios";

export default {
  data() {
    return {
      store,
    }

  },

  methods: {
    userSearch() {
      let newBaseSearch = this.store.APIcall;

      if(this.store.userInput != '') {

        newBaseSearch += `&query=${this.store.userInput}`;

        axios.get(newBaseSearch).then((res) => {  
  
          this.store.movies = res.data.results;

          this.store.userInput = '';
  
        })
      }



    },


  },
  
  emits: [
    'user-search',

  ],

  components: {
    AppSearch,
  },


  computed: {

  },

  created() {
    // this.baseSearch();
  },



}

</script>

<template>
  <AppSearch @user-search="userSearch()"></AppSearch>
  <div v-for="movie, index in this.store.movies">
    {{ this.store.movies[index].title }}
  </div>
</template>

<style scoped>

</style>
