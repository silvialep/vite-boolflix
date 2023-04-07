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
        <input v-model="this.store.userInput" @keyup.enter="$emit('user-search')" type="text" placeholder="Inserisci il film o la serie da cercare">
        <button @click="$emit('user-search')">Cerca</button>
    </div>
</template>

<style lang="scss" scoped>

#search-bar {
    display: flex;
    gap: 20px;
    padding: 20px;

    input {
        width: 300px;
        padding: 5px;
    }

    button {
        padding: 0 5px;
    }
}

</style>