import { useState, useRef, useMemo, useCallback } from "react";
import { searchMovies } from "../services/movies";

export const useMovies = ({ search, sort }) => {
    const [movies, setMovies] = useState(null);
    const [loading, setLoading] = useState(false);
    const previousSearch = useRef(search)
    const getMovies = useCallback(async ({ search }) => {
        if (previousSearch.current === search) return
        setLoading(true)
        try {
            previousSearch.current = search
            const newMovies = await searchMovies({ search })
            setMovies(newMovies)
        } catch (error) {
            throw new Error(error)
        } finally {
            setLoading(false)
        }
    })
    return { movies, getMovies, loading }
}