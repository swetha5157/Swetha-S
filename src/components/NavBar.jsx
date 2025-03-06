import React from 'react'
import logo from "../assets/swelogo.png"
import { FaLinkedin ,FaGithub, FaFile}from 'react-icons/fa'
const NavBar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="profile" className="h-12 w-16"></img>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/swetha-s-797a26259"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-neutral-500"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.github.com/swetha5157"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-neutral-500"
        >
          <FaGithub />
        </a>
      </div>
    </nav>
  );
}

export default NavBar
