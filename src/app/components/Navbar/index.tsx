"use client";
import { faGear, faHouse } from "@fortawesome/free-solid-svg-icons";
import { Navlink } from "..";
import { NavbarStyled } from "./Navbar.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Navbar = () => {
  return (
    <NavbarStyled>
      <Navlink href="/">
        <FontAwesomeIcon icon={faHouse} />
      </Navlink>
      <Navlink href="/settings">
        <FontAwesomeIcon icon={faGear} />
      </Navlink>
    </NavbarStyled>
  );
};
