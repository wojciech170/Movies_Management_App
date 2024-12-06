import {apiKey} from '../api_key'

export const api = {
    async fetchData(query) {
        try {
            const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${query}`);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();

            if (data.Response === "False") {
                throw new Error(data.Error);
            }
            return data;
        } catch (error) {
            throw error;
        }
    }
}