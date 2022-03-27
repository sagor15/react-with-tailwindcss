import React, { useState } from "react";
import Link from "../Link/Link";
import { MenuIcon, XIcon } from "@heroicons/react/solid";

const Navber = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: "Home", link: "/home" },
    { id: 2, name: "Shop", link: "/shop" },
    { id: 3, name: "Deals", link: "/deals" },
    { id: 4, name: "Cupons", link: "/cupons" },
    { id: 5, name: "Contact", link: "/contact" },
  ];
  return (
    <nav>
      <div onClick={() => setOpen(!open)} className="w-7 h-7 md:hidden">
        {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
      </div>
      <ul
        className={`md:flex justify-center duration-500 ease-in md:static w-full bg-indigo-500   absolute ${
          open ? "top-6" : "top-[-120px]"
        }`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navber;
