import axios, {type AxiosResponse} from 'axios';
import type {MovieResponse} from '../types/movie';

const BASE_URL = 'https://api.themoviedb.org/3';
const token = import.meta.env.VITE_TMDB_TOKEN;

export const fetchMovies = async (query: string, page: number = 1): Promise<MovieResponse> => {
    const response: AxiosResponse<MovieResponse> = await axios.get(
        `${BASE_URL}/search/movie`,
        {
            params: {query, page},
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );
    return response.data;
};
