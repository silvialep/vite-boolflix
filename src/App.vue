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
    userSearch() {
      let newBaseSearch = this.store.APImoviesCall;

      if(this.store.userInput != '') {

        newBaseSearch += `&query=${this.store.userInput}&`;

        axios.get(newBaseSearch).then((res) => {

          this.store.movies = res.data.results;

          console.log(this.store.movies);

          this.store.userInput = '';
          this.store.loader = false;

        }).catch(() => {
          this.store.loader = true;
        })
      }




    },


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

  created() {
  },



}

</script>

<template>

  <AppSearch @user-search="userSearch()"></AppSearch>

  <AppMain></AppMain>

</template>

<style scoped>

</style>
