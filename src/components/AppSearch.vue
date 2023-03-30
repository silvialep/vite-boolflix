<script>

import { store } from '../store.js'



export default {

    name: 'AppSearch',

    data() {
        return {
            store,


        }
    },


}


</script>

<template>
    <div id="search-bar">
        <input v-model="this.store.userInput" @keyup.enter="$emit('user-search')" type="text" placeholder="Inserisci il film da cercare">
        <button @click="$emit('user-search')">Cerca</button>
    </div>
</template>

<style lang="scss" scoped>

#search-bar {
    display: flex;
    gap: 20px;

    padding: 20px;
}

</style>