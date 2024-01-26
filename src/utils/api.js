import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3';
const BEARER_TOKEN = import.meta.env.VITE_APP_TMDB_BEARER_TOKEN;

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        Authorization: `Bearer ${BEARER_TOKEN}`,
    },
});


const fetchMovies=async ()=>{
    try{
        const response= await api.get('/genre/movie/list');
        return response.data;
    }catch(error){
        console.error("Failed to fetch movies",error);
        throw error;
    }
}
export default fetchMovies;