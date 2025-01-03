import { useState } from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="flex flex-col md:flex-row bg-gradient-to-br from-accent-light to-accent md:px-24 lg:px-48">
      <div className="w-full flex justify-between items-center p-4 px-8 md:py-4 md:px-0">
        {/* Logo */}
        <div className="flex space-x-4 items-center">
          <img
            className="h-12 max-w-full object-contain"
            src="/images/elephant.png"
            alt="Elephant"
          />
          <div className="text-white font-semibold text-xl">
            White Elephant Gift Exhange
          </div>
        </div>

        {/* Hamburger Menu Icon (visible on small screens) */}
        <button
          className="flex items-center text-center block md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <i className="material-icons text-white text-4xl">menu</i>
        </button>
      </div>
      {/* Navigation Links */}
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } md:flex flex-col pb-2 md:pb-0 md:flex-row md:space-x-8 md:items-center text-white`}
      >
        <Link to={`/`}>
          <div className="w-full h-full py-2 px-8 md:px-0 hover:bg-white hover:text-accent transition duration-200">
            Home
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Nav
