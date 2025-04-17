import axios from "axios"
import { useEffect } from "react";
import { useState } from "react";

export const useRecommendedMovies = () => {
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [loadingRecommended, setLoadingRecommended] = useState(false);
  // Eror state

    const getRecommendedMovies = async () => {
      try {
        setLoadingRecommended(true)
        const theGodFather = await axios.get('http://www.omdbapi.com/?apikey=176ab0a9&t=the godfather');
        const tgf = await theGodFather.data;
        const squidGame = await axios.get('http://www.omdbapi.com/?apikey=176ab0a9&t=squid game');
        const sq = await squidGame.data;
        const boboiboy = await axios.get('http://www.omdbapi.com/?apikey=176ab0a9&t=boboiboy');
        const bb = await boboiboy.data;
        const harryPotter = await axios.get('http://www.omdbapi.com/?apikey=176ab0a9&t=harry potter');
        const hp = await harryPotter.data;
        const oppenheimer = await axios.get('http://www.omdbapi.com/?apikey=176ab0a9&t=oppenheimer');
        const opHei = await oppenheimer.data;
        const interstellar = await axios.get('http://www.omdbapi.com/?apikey=176ab0a9&t=interstellar');
        const is = await interstellar.data;
        const theDarkKnight = await axios.get('http://www.omdbapi.com/?apikey=176ab0a9&t=the dark knight');
        const tdk = await theDarkKnight.data;
        const bigMouth = await axios.get('http://www.omdbapi.com/?apikey=176ab0a9&t=big mouth');
        const bm = await bigMouth.data;
        const silo = await axios.get('http://www.omdbapi.com/?apikey=176ab0a9&t=silo');
        const sl = await silo.data;
        const sweetHome = await axios.get('http://www.omdbapi.com/?apikey=176ab0a9&t=sweet home');
        const sh = await sweetHome.data;
        setRecommendedMovies([...recommendedMovies, tgf, sq, bb, hp, opHei, is, tdk, bm, sl, sh]);
      } catch (err) {
        console.error(err)
      } finally {
        setLoadingRecommended(false);
      }
    }
    
    useEffect(() => {
      getRecommendedMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
      recommendedMovies,
      loadingRecommended
    }
}