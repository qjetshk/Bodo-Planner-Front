import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

const NavBar = () => {
  if (1 === 1) {
    return (
      <nav className="flex gap-5 items-center">
        <Link className="sm:block hidden" href={"/register"}>
          <Button className="bg-transparent" variant={"outline"}>
            Зарегистрироваться
          </Button>
        </Link>
        <Link href={"/login"}>
          <Button variant={"secondary"}>Войти</Button>
        </Link>
      </nav>
    );
  } else {
    return (
      <nav className="flex gap-5 items-center">
        <Link href={"/dashboard"} className="flex gap-2 items-center">
          <span className="hover:text-neutral-400 transition-colors font-medium text-lg">{`@sdff`}</span>
        </Link>
      </nav>
    );
  }
};

export default NavBar;
