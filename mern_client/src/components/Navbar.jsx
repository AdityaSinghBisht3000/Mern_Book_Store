import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
// react icons
import { FaBarsStaggered, FaBlog, FaXmark } from "react-icons/fa6";
import { AuthContext } from "../Context/AuthProvider";

const Navbar = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const [isSticky, setisSticky] = useState(false);
  const { user } = useContext(AuthContext);
  const toggleMenu = () => {
    setisMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setisSticky(true);
      } else {
        setisSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    {
      link: "Home",
      path: "/",
    },
    {
      link: "About",
      path: "/About",
    },
    {
      link: "Shop",
      path: "/Shop",
    },
    {
      link: "Sell your Book",
      path: "/admin/dashboard",
    },
    {
      link: "Blog",
      path: "/Blog",
    },
  ];

  return (
    <header
      className={` w-full top-0 left-0 right-0 bg-transparent fixed tranition-all ease-in duration-300  `}
    >
      <nav
        className={`py-4 lg:px-24 px-4 ${
          isSticky ? "sticky top-0 left-0 right-0 bg-white shadow-md" : ""
        }`}
      >
        <div className="flex items-center justify-between gap-8 text-base">
          <Link
            to="/"
            className="flex items-center gap-2 text-2xl font-bold text-blue-700"
          >
            <FaBlog className="inline-block" />
            Books
          </Link>
          <ul className="hidden space-x-12 md:flex">
            {navItems.map(({ link, path }) => (
              <li key={path}>
                <Link
                  to={path}
                  className="block text-base text-black uppercase cursor-pointer hover:text-blue-700"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
          <div className="items-center hidden space-x-12 lg:flex">
            <button>
              <FaBarsStaggered className="w-5 hover:text-blue-700" />
            </button>
            {user ? user.email : ""}
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none"
            >
              {isMenuOpen ? (
                <FaXmark className="w-5 h-5 text-black" />
              ) : (
                <FaBarsStaggered className="w-5 h-5 text-black" />
              )}
            </button>
          </div>
        </div>

        {/* // navIcons: */}

        <div
          className={`space-y-4 px-4 mt-16 py-7 bg-blue-700 ${
            isMenuOpen ? "block fixed top-0 right-0 left-0 " : "hidden"
          }`}
        >
          {navItems.map(({ link, path }) => (
            <li key={path}>
              <Link
                to={path}
                className="block text-base text-white uppercase cursor-pointer"
              >
                {link}
              </Link>
            </li>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
