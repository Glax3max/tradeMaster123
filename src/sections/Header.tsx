"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // Import icons for menu toggle
import TradeMaster from "@/assets/images/TradeMasterIcon.png"

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 w-full z-50 shadow-lg font-serif font-light">
      <nav className="max-w-screen-xl mx-auto p-4 flex items-center justify-between">
        {/* Logo on the left */}
        <a href="#home" className="flex items-center space-x-3">
          <Image
            src={TradeMaster}
            alt="Logo"
            width={82}
            height={82}
          />
          <span className="text-2xl text-white">
            TradeMaster
          </span>
        </a>

        {/* Menu Button for Small Screens */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation Links (Hidden on small screens) */}
        <ul className="hidden md:flex space-x-8 text-white text-lg font-medium">
          <li>
            <a href="#home" className="hover:text-blue-500 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-500 transition">
              About
            </a>
          </li>
          <li>
            <a href="#course" className="hover:text-blue-500 transition">
              Courses
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-500 transition">
             About
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu (Appears when toggled) */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-gray-800 p-4 shadow-md">
          <ul className="flex flex-col space-y-4 text-white text-lg font-medium text-center">
            <li>
              <Link
                href="#home"
                className="block py-2 hover:text-blue-500 transition"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className="block py-2 hover:text-blue-500 transition"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#course"
                className="block py-2 hover:text-blue-500 transition"
                onClick={() => setIsOpen(false)}
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="block py-2 hover:text-blue-500 transition"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
