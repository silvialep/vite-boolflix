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
    <div id="nav-bar">
        <div id="main-logo">
            <h1>Boolflix</h1>

        </div>

        <div id="search-bar">
            <input v-model="this.store.userInput" @keyup.enter="$emit('user-search')" type="text" placeholder="Inserisci il film o la serie da cercare">
            <button @click="$emit('user-search')">Cerca</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>

#nav-bar {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;

    position: fixed;
    top: 0;
    width: 100vw;
    height: 80px;
    padding: 20px;
    background-color: rgb(12, 12, 12);
}

#main-logo {
    align-items: center;

    h1 {
        color: red;
        font-size: 3rem;
        text-transform: uppercase;
    }
}

#search-bar {
    display: flex;
    gap: 10px;
    padding: 20px;

    input {
        width: 250px;
        padding: 5px;
    }

    button {
        padding: 0 5px;
    }
}

</style>