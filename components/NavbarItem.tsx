import Link from "next/link";

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
