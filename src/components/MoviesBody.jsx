import { Link } from "react-router";
import { useMoviesStore } from "../hooks/useMoviesStore";
import { AnimeMovies } from "./AnimeMovies";
import { RecommendedMovies } from "./RecommendedMovies";

const MoviesBody = () => {
  const movies = useMoviesStore((state) => state.movies);
  const loadingMovies = useMoviesStore((state) => state.loadingMovies);

  return (
    <div className="pb-6">
    {loadingMovies && <p>Searching...</p>}
    <div className="mx-auto grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-3">
    {movies && movies.length > 0 ? (
        movies.map((m, i) => (
          <div key={i} className="my-2 p-1 border-orange-200/75 border-2 relative rounded-md">
            <img className="object-cover w-full h-3/6 lg:h-3/5 rounded-sm" src={m.Poster} alt="" />
            <div className="p-2 flex flex-col justify-between h-1/2 lg:h-[40%]">
            <div>
              <h3 className="text-base font-semibold text-wrap md:text-xl lg:text-2xl">{m.Title}</h3>
              <h6 className="font-light md:text-xl lg:text-2xl">{m.Type}</h6>
              <h6 className="mt-1 text-slate-300/75 font-semibold md:text-xl lg:text-2xl">{m.Year}</h6>
            </div>
              <div className="flex justify-end">
                <Link to={`/movies/${m.imdbID}`} className="bg-orange-500 -tracking-tight text-white font-semibold px-8 py-2 rounded-sm md:text-xl lg:text-2xl">Details</Link>
              </div>
            </div>
          </div>
        ))
      ) : ''}
    </div>
      <RecommendedMovies />
      <AnimeMovies />
    </div>
  )
}

export default MoviesBody;