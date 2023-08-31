import Link from "next/link";

/**
 * Represents an item in a navigation bar.
 *
 * @component
 *
 * @param {object} props - The component's props.
 * @param {string} props.active - The currently active item in the navigation bar.
 * @param {(active: string) => void} props.setActive - A function to set the active item.
 * @param {string} props.name - The name of the navigation item.
 * @param {string} props.route - The route to navigate to when the item is clicked.
 *
 * @returns {React.ReactElement} A React element representing the navigation item.
 */
type NavItemProps = {
  active: string;
  setActive: (active: string) => void;
  name: string;
  route: string;
};

const NavbarItem: React.FC<NavItemProps> = ({
  active,
  setActive,
  name,
  route,
}) => {
  const isCurrentPage = active === name;

  return (
    <Link href={route} passHref>
      <span
        className={`
          mx-2 cursor-pointer
          hover:border-b-12 hover:text-orange
          ${isCurrentPage ? "font-bold" : ""}
        `}
        onClick={() => setActive(name)}
        aria-label={isCurrentPage ? `${name} (Current Page)` : name}
      >
        {name}
      </span>
    </Link>
  );
};

export default NavbarItem;
