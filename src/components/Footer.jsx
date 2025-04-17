import { Link } from "react-router"

export const Footer = () => {
  return (
    <footer className="bg-zinc-800 text-white px-4 md:px-6 xl:px-16 pt-6 py-12 flex relative lg:text-2xl xl:text-lg">
      <div className="grid grid-cols-1 gap-4">
        <h6 className="font-semibold">Products</h6>
        <Link className="hover:underline" to="/">Movie</Link>
        <Link className="hover:underline" to="/music">Music</Link>
        <Link className="hover:underline" to="/manga">Manga</Link>
        <Link className="hover:underline" to="/games">Games</Link>
      </div>
      <div className="flex flex-col gap-4 ml-10 md:ml-20 lg:ml-30">
        <h6 className="font-semibold">Community</h6>
        <Link className="hover:underline" to="/github">Github</Link>
        <Link className="hover:underline" to="/x">X</Link>
      </div>
      <p className="absolute bottom-3 right-3">Copyright © 2025 Faturrahman Alfarisi.</p>
    </footer>
  )
}