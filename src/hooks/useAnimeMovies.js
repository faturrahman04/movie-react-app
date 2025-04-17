import axios from "axios"
import { useEffect } from "react";
import { useState } from "react";

export const useAnimeMovies = () => {
  const [animeMovies, setAnimeMovies] = useState([]);
  const [loadingAnime, setLoadingAnime] = useState(false);
  // Eror state

    const getAnimeMovies = async () => {
      try {
        setLoadingAnime(true);
        const naruto = await axios.get('http://www.omdbapi.com/?apikey=176ab0a9&t=naruto');
        const nr = await naruto.data;
        const assassinationClassroom = await axios.get('http://www.omdbapi.com/?apikey=176ab0a9&t=assassination classroom');
        const ac = await assassinationClassroom.data;
        const attackOnTitan = await axios.get('http://www.omdbapi.com/?apikey=176ab0a9&t=attack on titan');
        const aot = await attackOnTitan.data;
        const kimetsuNoYaiba = await axios.get('http://www.omdbapi.com/?apikey=176ab0a9&t=kimetsu no yaiba');
        const kny = await kimetsuNoYaiba.data;
        const jujutsuKaisen = await axios.get('http://www.omdbapi.com/?apikey=176ab0a9&t=jujutsu kaisen');
        const jjk = await jujutsuKaisen.data;
        const captainTsubasa = await axios.get('http://www.omdbapi.com/?apikey=176ab0a9&t=captain tsubasa');
        const ct = await captainTsubasa.data;
        const tokyoGhoul = await axios.get('http://www.omdbapi.com/?apikey=176ab0a9&t=tokyo ghoul');
        const tg = await tokyoGhoul.data;
        const onePiece = await axios.get('http://www.omdbapi.com/?apikey=176ab0a9&t=one piece');
        const op = await onePiece.data;
        const onePunchMan = await axios.get('http://www.omdbapi.com/?apikey=176ab0a9&t=one punch man');
        const opm = await onePunchMan.data;
        const vinlandSaga = await axios.get('http://www.omdbapi.com/?apikey=176ab0a9&t=vinland saga');
        const vs = await vinlandSaga.data;
        const chainsawMan = await axios.get('http://www.omdbapi.com/?apikey=176ab0a9&t=chainsaw man');
        const cm = await chainsawMan.data;
        const borutoNarutoNextGenerations = await axios.get('http://www.omdbapi.com/?apikey=176ab0a9&t=boruto: naruto next generations');
        const bnng = await borutoNarutoNextGenerations.data;
        setAnimeMovies([...animeMovies, nr, ac, kny, aot, jjk, ct, tg, op, opm, vs, cm, bnng]);
      } catch (err) {
        console.error(err)
      } finally {
        setLoadingAnime(false);
      }
    }
    
    useEffect(() => {
      getAnimeMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
      animeMovies,
      loadingAnime
    }
}