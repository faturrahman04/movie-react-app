import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router"
import Navbar from "../components/Navbar";

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  let { imdbID } = useParams();

  useEffect(() => {
    async function getMovie() {
      let response = await axios.get('https://www.omdbapi.com/?apikey=176ab0a9&i=' + imdbID);
      setMovie(response.data);
    }
    getMovie();
  }, [])
  

  return (
    <>
    <Navbar />
    <div className="grid place-items-center min-h-screen bg-slate-200 py-4 overflow-hidden">
      <div className="flex flex-col mx-auto w-[70%] lg:w-[80%] 2xl:w-[60%] h-[80vh] md:h-fit lg:h-fit rounded-md shadow-lg">
        <div id="header" className="py-3 px-2"> 
          <h1 className="text-2xl lg:text-3xl font-semibold">Movie Details!</h1>
        </div>
        <div id="body" className="lg:flex lg:gap-4 lg:justify-around overflow-auto py-2 px-3 2xl:px-10 2xl:py-8 border-t border-b">
          <img className="shrink-0 mx-auto rounded-md w-48 md:w-56 lg:w-72 h-60 md:h-72 lg:h-full object-cover" src={movie.Poster} alt="" />
          <ListDetails title={movie.Title} genre={movie.Genre} writer={movie.Writer} released={movie.Released} plot={movie.Plot} />
        </div>
        <div className="py-3 flex w-[90%] justify-end" id="footer">
          <Link className="px-6 lg:px-8 py-1 lg:py-3 rounded-sm font-semibold text-white bg-blue-500 lg:text-xl" to="/">Go Back</Link>
        </div>
      </div>  
    </div>
    </>
  )
}

function ListDetails({title, genre, writer, released, plot}) {
  return (
    <div className="flex flex-col lg:text-xl">
      <div className="my-2">
        <h1 className="font-bold">Title :</h1>
        <p>{title}</p>
      </div>
      <div className="my-2">
        <h1 className="font-bold">Genre :</h1>
        <p>{genre}</p>
      </div>
      <div className="my-2">
        <h1 className="font-bold">Author :</h1>
        <p>{writer}</p>
      </div>
      <div className="my-2">
        <h1 className="font-bold">Released :</h1>
        <p>{released}</p>
      </div>
      <div className="my-2">
        <h1 className="font-bold">Plot :</h1>
        <p>{plot}</p>
      </div>
    </div>
  )
}

export default MovieDetails