const API_KEY = "c61200ad"


export const searchMovies = async ({ search }) => {

    try {
        let response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`);
        let json = await response.json();
        let movies = json.Search;

        return movies?.map(movie => ({
            id: movie.imdbID,
            year: movie.Year,
            title: movie.Title,
            img: movie.Poster
        }))
    } catch (error) {
        throw new Error(error)
    }

}