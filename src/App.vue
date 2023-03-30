<script>

import {store} from './store.js'

import axios from "axios";

export default {
  data() {
    return {
      store,
    }

  },

  methods: {
    
  },
  
  emits: [

  ],

  components: {

  },


  computed: {

  },

  created() {
    axios.get(this.store.APIcall).then((res) => {

      let newSearch = this.store.APIcall += '&query=';

      console.log(newSearch);

      // this.store.movies = res.data.data;


    })
  }



}

</script>

<template>
  <div>

  </div>
</template>

<style scoped>

</style>
