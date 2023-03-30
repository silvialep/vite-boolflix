<script>

import MovieItemVue from "./MovieItem.vue";

import { store } from "../store.js";


export default {

    name: 'AppMain',

    data() {
        return {
            store,

        }
    },

    components: {
        MovieItemVue,
    }

}


</script>

<template>
    <div id="movie-container">
        <MovieItemVue></MovieItemVue>

    </div>
</template>

<style lang="scss" scoped>

#movie-container {
    display: flex;
    flex-flow: row wrap;
    gap: 10px;
    width: 1400px;
    margin: auto;
    padding: 40px;
}

</style>