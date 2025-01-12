"use client";

import { Navbar } from "flowbite-react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Navbarr() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <nav className="flex items-center border border-b-slate-300 justify-between rounded-lg overflow-hidden">
      <div
        className="bg-yellow-300 hidden md:block hover:bg-yellow-400 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <i className="fas fa-home px-6 py-6"></i>
      </div>
      <Navbar fluid className="w-full">
        <Navbar.Toggle />
        <Navbar.Collapse className="w-full ">
          <Navbar.Link
            className={`font-bold cursor-pointer ${
              location.pathname == "/" && "text-yellow-400"
            }`}
          >
            Resume
          </Navbar.Link>
          <Navbar.Link className="font-bold cursor-pointer">
            Portfolio
          </Navbar.Link>
          <Navbar.Link className="font-bold cursor-pointer">Blog</Navbar.Link>
          <Navbar.Link className="font-bold cursor-pointer">
            Contact
          </Navbar.Link>
        </Navbar.Collapse>
        <div className="flex gap-3 items-center cursor-pointer">
          <i className="fab fa-linkedin text-xl"></i>
          <i className="fab fa-instagram text-xl"></i>
          <i className="fab fa-twitter text-xl"></i>
          <i className="fab fa-github text-xl"></i>
          <button className=" bg-yellow-300 text-black flex items-center gap-2 text-xs md:text-sm px-2 py-1 md:px-4 md:py-1 rounded-full font-semibold">
            Hire Me
            <span className="bg-white rounded-full px-2 py-1">
              <i className="fab fa-whatsapp"></i>
            </span>
          </button>
        </div>
      </Navbar>
    </nav>
  );
}
