import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";

export default function Header() {
  const { user } = useContext(UserContext);
  const [menu, setMenu] = useState(false);

  function toggleMenu(e) {
    e.preventDefault();
    setMenu(!menu);
  }

  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto flex justify-between items-center py-5">
        <Link to={'/'} className="text-3xl font-semibold tracking-tight hover:text-yellow-400">
          PizzaRia
        </Link>
        <Link to={'/cart'}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
          </svg>

        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link to={'/'} className="hover:text-yellow-400">Home</Link>
          <Link to={'/menu'} className="hover:text-yellow-400">Menu</Link>
          {user ? (
            <Link to={'/account'} className="hover:text-yellow-400">Profile</Link>
          ) : (
            <Link to={'/login'} className="text-black hover:bg-white bg-yellow-400 rounded-md px-3 py-2">Login</Link>
          )}
        </nav>

        <div className="md:hidden flex items-center mr-3">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {!menu ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menu && (
        <div className="md:hidden bg-gray-800">
          <nav className="flex flex-col items-center py-4 space-y-4">
            <Link to={'/'} className="hover:text-yellow-400">Home</Link>
            <Link to={'/menu'} className="hover:text-yellow-400">Menu</Link>
            {user ? (
              <Link to={'/account'} className="hover:text-yellow-400">Profile</Link>
            ) : (
              <Link to={'/login'} className="text-black rounded-md hover:bg-white bg-yellow-400 px-3 py-2">Login</Link>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
