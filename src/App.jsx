import { useState, useCallback } from 'react'
import './App.css'
//import { getMovies } from './services/movies'
import { Movies } from './components/Movies'
import debounce from 'just-debounce-it'
import { useSearch } from './hooks/useSearch'
import { useMovies } from './hooks/useMovies'

function App() {
  const { search, setSearch } = useSearch();
  const { movies, getMovies, loading } = useMovies({ search });
  const debouncedGetMovies = useCallback(
    debounce(search => {
      getMovies({ search })
    }, 500)
    , [])

  const handleSubmit = async (event) => {
    event.preventDefault()
    getMovies({ search })
  }
  const handleChange = (event) => {
    const newSearch = event.target.value
    setSearch(newSearch)
    debouncedGetMovies(newSearch)
  }

  return (
    <div className='container'>
      <header><h1>Movies Finder</h1>
        <form className='inputmovie' id="moviesform" onSubmit={handleSubmit}>
          <input onChange={handleChange} value={search}></input>
          <button>Search</button>
        </form>
      </header>
      <main>
        <ul>
          <Movies movies={movies} />
        </ul>
      </main>
    </div>
  )
}

export default App
