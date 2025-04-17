import { create } from "zustand";

export const useMoviesStore = create((set) => ({
  movies: [],
  loadingMovies: false,
  setMovies: (movies) => set({movies}),
  setLoadingMovies: (loadingMovies) => set({loadingMovies})
}))