import {reactive} from 'vue';

export const store = reactive({

    //API key c2c3969c50cd0fbe2f04ca8885d83f85

    APImoviesCall: 'https://api.themoviedb.org/3/search/movie?api_key=c2c3969c50cd0fbe2f04ca8885d83f85',
    APISeriesCall: 'https://api.themoviedb.org/3/search/tv?api_key=c2c3969c50cd0fbe2f04ca8885d83f85',
    APItrendingMovieCall: 'https://api.themoviedb.org/3/trending/movie/week?api_key=c2c3969c50cd0fbe2f04ca8885d83f85',
    APItrendingSeriesCall: 'https://api.themoviedb.org/3/trending/tv/week?api_key=c2c3969c50cd0fbe2f04ca8885d83f85',
    
    
    movies: [],
    trendingMovies: [],

    series: [],
    trendingSeries: [],

    userInput: '',

    loader: true,

})