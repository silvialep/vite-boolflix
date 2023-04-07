import {reactive} from 'vue';

export const store = reactive({

    //API key c2c3969c50cd0fbe2f04ca8885d83f85

    APImoviesCall: 'https://api.themoviedb.org/3/search/movie?api_key=c2c3969c50cd0fbe2f04ca8885d83f85',

    APItrendingBase: 'https://api.themoviedb.org/3/search//trending/movie?api_key=c2c3969c50cd0fbe2f04ca8885d83f85',

    APISeriesCall: 'https://api.themoviedb.org/3/search/tv?api_key=c2c3969c50cd0fbe2f04ca8885d83f85',

    movies: [],

    series: [],

    userInput: '',

    loader: true,

})