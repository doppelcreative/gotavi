"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "@/common/assets/images/black-logo.png";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const navigationItems = [
    { title: "HOME", href: "/" },
    { title: "ABOUT", href: "/about" },
    // { title: "SERVICES", href: "/service" },
    { title: "PRODUCTS", href: "/products" },
    { title: "BLOG", href: "/blogs" },
    { title: "CONTACT US", href: "/contact-us" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full fixed top-0 left-0 z-[9999] bg-white 
        transition-all duration-500 ease-in-out
        border-[#59d69c]
        ${isScrolled ? "border-l-[13px] border-r-[13px]" : "border-l-[0px] border-r-[0px]"}
      `}
    >
      <div className="container mx-auto">
        <div className="header-main flex items-center justify-between py-3 md:px-[0px] !px-[23px]">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold md:w-[10%] w-full">
            <Image src={logo} alt="" width={150} height={64} />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-10 main-menu w-[70%]">
            {navigationItems.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className={`hover:text-[#59d69c] text-black font-semibold ${pathname === item.href ? "!text-[#59d69c]" : "!text-black"}`}
              >
                {item.title}
              </Link>
            ))}
          </nav>

        
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden text-2xl !text-black"
          >
            <FiMenu />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {/* Backdrop */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-[#000000cc] bg-opacity-50 z-40"
        ></div>
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 w-72 h-full bg-white shadow-lg transform transition-transform duration-300 z-50
      ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <span className="text-lg font-bold"></span>
          <button onClick={() => setIsOpen(false)} className="text-2xl">
            <FiX />
          </button>
        </div>

        <ul style={{ padding: "20px" }}>
          {navigationItems.map((item, idx) => (
            <li
              key={idx}
              className="mb-[10px] last:border-b-0 border-[#80808047] border-b pb-[8px]"
            >
              <Link
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block font-[600]"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
