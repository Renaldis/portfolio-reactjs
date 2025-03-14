"use client";

import { Navbar } from "flowbite-react";
import { useLocation, Link } from "react-router-dom";

export default function Navbarr() {
  const location = useLocation();
  return (
    <nav className="flex items-center border border-b-slate-300 justify-between rounded-lg overflow-hidden">
      <Link
        to="/"
        className="bg-yellow-300 hidden md:block hover:bg-yellow-400 cursor-pointer"
      >
        <i className="fas fa-home px-6 py-6"></i>
      </Link>
      <Navbar fluid className="w-full">
        <Navbar.Toggle />
        <Navbar.Collapse className="w-full">
          <Navbar.Link
            as={Link}
            to="/"
            className={`font-bold cursor-pointer ${
              location.pathname === "/" && "text-yellow-400"
            }`}
          >
            Resume
          </Navbar.Link>
          <Navbar.Link
            as={Link}
            to="/portfolio/all"
            className={`font-bold cursor-pointer ${
              (location.pathname === "/portfolio/all" ||
                location.pathname === "/portfolio/javascript" ||
                location.pathname === "/portfolio/php" ||
                location.pathname === "/portfolio/figma") &&
              "text-yellow-400"
            }`}
          >
            Portfolio
          </Navbar.Link>
          <Navbar.Link
            as={Link}
            to="/contact"
            className={`font-bold cursor-pointer ${
              location.pathname === "/contact" && "text-yellow-400"
            }`}
          >
            Contact
          </Navbar.Link>
        </Navbar.Collapse>
        <div className="flex gap-3 items-center cursor-pointer">
          <a
            href="https://www.linkedin.com/in/renaldiisptr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin text-xl"></i>
          </a>
          <a
            href="https://www.instagram.com/renaldiisptr?igsh=aXhyMjkxaHQ1cWd3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram text-xl"></i>
          </a>
          <a
            href="https://github.com/Renaldis"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github text-xl"></i>
          </a>
          {/* <a
            href="https://wa.me/+6289675759858"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="bg-yellow-300 text-black flex items-center gap-2 text-xs md:text-sm px-2 py-1 md:px-4 md:py-1 rounded-full font-semibold">
              Hire Me
              <span className="bg-white rounded-full px-2 py-1">
                <i className="fab fa-whatsapp"></i>
              </span>
            </span>
          </a> */}
        </div>
      </Navbar>
    </nav>
  );
}
