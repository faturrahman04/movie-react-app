import InputSearch from "./components/InputSearch"
import MoviesBody from "./components/MoviesBody"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="bg-zinc-700 text-white">
      <Navbar source="./hamburgermenu.svg" />
      <div className="px-4 xl:px-16">
        <h1 
        className="text-2xl max-w-full w-[80%] lg:w-[75%] xl:w-[45%] mx-auto text-center font-bold mt-8 md:text-4xl lg:text-5xl xl:text-5xl"
        >Discover Your Favorite Movies With F3Movies</h1>
      <InputSearch placeholder="Search your favorite movies..." />
      <MoviesBody />
    </div>
    </div>
  )
}

export default App
