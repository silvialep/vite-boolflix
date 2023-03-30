<script>

import { store } from "../store.js";


export default {

    name: 'AppMain',

    data() {
        return {
            store,

        }
    },

}


</script>

<template>
    <div v-for="(movie, index) in this.store.movies" v-if="this.store.loader == false">
        {{ this.store.movies[index].title }}
    </div>
</template>

<style lang="scss" scoped>

</style>