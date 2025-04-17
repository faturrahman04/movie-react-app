import { Link } from "react-router";
import { useRecommendedMovies } from "../hooks/useRecommendedMovies"
import { useState } from "react";

export const RecommendedMovies = () => {
  const {loadingRecommended, recommendedMovies} = useRecommendedMovies();
  const [isHover, setIsHover] = useState(null);

  return (
    <div className="relative">
      <h2 className="text-lg md:text-2xl lg:text-3xl md:mt-3 -tracking-tight font-semibold">Recommended</h2>
      <div className={`flex overflow-auto lg:overflow-hidden lg:grid lg:grid-cols-4 xl:grid-cols-5 lg:gap-3 2xl:grid-cols-5 2xl:gap-2 ${loadingRecommended ? 'items-center justify-center h-60' : ''}`}>
      {loadingRecommended && <p>Wait a moment...</p>}    
      {recommendedMovies.map((rm, i) => (
        <div
          onMouseOver={() => setIsHover(i)}
          onMouseLeave={() => setIsHover()}
          key={i} className="w-40 md:w-48 lg:w-60 2xl:w-80 h-60 md:h-72 lg:h-80 2xl:h-[32rem] mt-2 mr-3 shrink-0 snap-center">
          <div className="relative flex h-full">
            <img className="inline-block w-full h-full object-cover rounded-sm" src={rm.Poster} alt="" />
              <Link
                className={`${isHover === i ? 'grid place-items-center h-full w-full absolute z-10 bg-black/50 font-semibold' : 'hidden'}`} to={`/movies/${rm.imdbID}`}>Click to see details
              </Link>
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}

