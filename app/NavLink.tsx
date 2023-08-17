import Link from "next/link";
import React from "react";

interface Props {
  category: Category;
  isActive: boolean;
}

function NavLink({ category, isActive }: Props) {
  return (
    <Link
      href={`/news/${category}`}
      className={`navlink ${
        isActive &&
        "underline decoration-orange-400 undefliene-offset-4 font-bold text-lg"
      }`}
    >
      {category}
    </Link>
  );
}

export default NavLink;
