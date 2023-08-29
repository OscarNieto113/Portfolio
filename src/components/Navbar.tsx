import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import NavbarItem from "./NavbarItem";

const navItems = [
  { name: "About", route: "/" },
  { name: "Resume", route: "/resume" },
  { name: "Portfolio", route: "/projects" },
  { name: "Contact", route: "/contact" },
  { name: "Feedback", route: "/feedback" },
];

const Navbar = () => {
  const { pathname } = useRouter();
  const initialActive =
    navItems.find((item) => item.route === pathname)?.name || "";
  const [active, setActive] = useState(initialActive);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [pathname]);

  return (
    <div className="flex flex-col justify-between px-5 py-3 bg-gray-300 md:flex-row md:items-center">
      <div className="flex items-center justify-between w-full md:w-auto">
        <span className="text-xl font-bold border-b-4 md:text-2xl border-orange">
          {active}
        </span>
        <button
          className="text-gray-600 md:hidden hover:text-gray-800 focus:outline-none hover:scale-155"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      <div
        className={`mt-4 md:mt-0 md:flex md:items-center ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        {navItems.map(({ name, route }) => (
          <NavbarItem
            key={name}
            active={active}
            setActive={setActive}
            name={name}
            route={route}
          />
        ))}
      </div>
    </div>
  );
};

export default Navbar;