import { useState } from "react";
import { useAnimeMovies } from "../hooks/useAnimeMovies";
import { Link } from "react-router";

export const AnimeMovies = () => {
  const {loadingAnime, animeMovies} = useAnimeMovies();
  const [isHover, setIsHover] = useState(null);

  return (
    <div className="relative mt-4">
      <h2 className="text-lg md:text-2xl lg:text-3xl md:mt-3 -tracking-tight font-semibold">Popular Anime</h2>
      <div className={`flex overflow-auto lg:overflow-hidden lg:grid lg:grid-cols-4 xl:grid-cols-5 lg:gap-3 xl:gap-4 ${loadingAnime ? 'items-center justify-center h-60 ' : ''}`}>
      {loadingAnime && <p>Wait a moment...</p>}    
      {animeMovies.map((am, i) => (
        <div
          onMouseOver={() => setIsHover(i)}
          onMouseLeave={() => setIsHover()}
          key={i} className="w-40 md:w-48 lg:w-60 2xl:w-80 h-60 md:h-72 lg:h-80 2xl:h-[32rem] mt-2 mr-3 shrink-0 snap-center">
          <div className="relative flex h-full">
            <img className="inline-block h-full w-full object-cover rounded-sm" src={am.Poster} alt="" />
            <Link
              className={`${isHover === i ? 'grid place-items-center h-full w-full absolute z-10 bg-black/50 font-semibold' : 'hidden'}`} to={`/movies/${am.imdbID}`}>Click to see details
            </Link>
          </div>
          
        </div>
      ))}
      </div>
    </div>
  )
}

