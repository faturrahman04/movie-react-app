import axios from "axios";
import { useState } from "react";
import { useMoviesStore } from "../hooks/useMoviesStore";

const InputSearch = (props) => {
  const [inputMovies, setInputMovies] = useState('');
  const setMovies = useMoviesStore((state) => state.setMovies);
  const setLoadingMovies = useMoviesStore((state) => state.setLoadingMovies);

  const API_KEY = `http://www.omdbapi.com/?apikey=176ab0a9&s=${inputMovies}`
  async function handleMovies() {
    try {
      setLoadingMovies(true)
      const response = await axios.get(API_KEY);
      const data = await response.data;
      setMovies(data.Search);
    } catch (err) {
      console.log(err)
    } finally {
      setLoadingMovies(false)
    }
  }

  const {placeholder} = props;
  return (
    <div className="m-4 h-10 w-full mx-auto lg:h-16 xl:h-12 lg:flex lg:items-center">
      <input onChange={(e) => setInputMovies(e.target.value)} className="border border-gray-400/50 w-[70%] py-0.5 outline-0 px-4 h-[97%] rounded-l-md lg:text-xl" type="text" placeholder={placeholder} />
      <button onClick={handleMovies} className="bg-orange-500 text-white px-8 py-2 font-semibold rounded-r-md cursor-pointer h-[98%] xl:h-[94%] w-[30%] -mx-2.5 outline-0 hover:bg-orange-600 active:bg-orange-400 lg:text-2xl xl:text-xl">Search</button>
    </div>
  )
}

export default InputSearch;