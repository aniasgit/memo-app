import { NavlinkStyled } from "./Navlink.styled";

interface NavlinkInterface {
  href: string;
  children: React.ReactNode;
}

export const Navlink = ({ href, children }: NavlinkInterface) => {
  return <NavlinkStyled href={href}>{children}</NavlinkStyled>;
};
