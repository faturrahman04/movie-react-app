import { useState } from "react";

const Navbar = () => {
  const [hamburgerMenu, setHamburgerMenu] = useState(false);
  
  function hamburgerToggle() {
    setHamburgerMenu(!hamburgerMenu);
  }

  return (
    <>
    <nav className="flex justify-between w-[90%] mx-auto h-14 lg:h-20 items-center">
      <h1 className="text-2xl font-semibold lg:text-3xl">F3<span className="text-red-500">Movies</span></h1>
      <img className="lg:hidden cursor-pointer" src="./hamburgermenu.svg" alt="" onClick={hamburgerToggle} />
      <div className={`w-[40%] justify-around hidden lg:flex lg:text-xl xl:text-lg`}>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/faq">Faq</a>
      </div>
    </nav>
      <div className={`${hamburgerMenu ? 'flex translate-y-0' : 'hidden -translate-y-100'} z-10 max-w-screen w-[100%] h-36 flex-col items-center justify-evenly bg-slate-200/50 duration-300`}>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/faq">Faq</a>
      </div>
    </>
  )
}

export default Navbar;