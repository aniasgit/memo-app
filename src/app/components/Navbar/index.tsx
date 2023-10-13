"use client";
import { Navlink } from "..";
import { NavbarStyled } from "./Navbar.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faHouse, faTrophy } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  return (
    <NavbarStyled>
      <Navlink href="/">
        <FontAwesomeIcon icon={faHouse} />
      </Navlink>
      <Navlink href="/results">
        <FontAwesomeIcon icon={faTrophy} />
      </Navlink>
      <Navlink href="/settings">
        <FontAwesomeIcon icon={faGear} />
      </Navlink>
    </NavbarStyled>
  );
};
