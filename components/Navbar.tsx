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

  return (
    <div className="flex items-center justify-between px-5 py-3 my-3">
      <span className="text-xl font-bold border-b-4 md:text-2xl border-green">
        {active}
      </span>

      <div className="text-base font-normal md:text-xl">
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
