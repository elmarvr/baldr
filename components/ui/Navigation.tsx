import tw, { theme } from "twin.macro";
import { useState } from "react";
import useEvent from "@/hooks/useEvent";
import useBreakpoint from "@/hooks/useBreakpoint";

type NavigationProps = {
  transitionHeight?: number;
};

const Navigation = ({ transitionHeight = 500 }: NavigationProps) => {
  const [scrolled, setScrolled] = useState(true);

  useEvent("scroll", () => {
    setScrolled(window.scrollY >= transitionHeight);
  });

  const bp = useBreakpoint();

  const transparent = bp !== "sm" && !scrolled;

  return (
    <nav
      tw="fixed h-16 sm:h-20 z-10 w-full flex items-center px-8 justify-between transition duration-300 ease-in"
      css={{
        backgroundColor: transparent ? "transparent" : theme`colors.white`,
        color: transparent ? theme`colors.white` : theme`colors.red.900`,
        boxShadow: transparent ? "none" : theme`boxShadow.sm`,
      }}
    >
      <NavLink tw="font-display text-4xl font-normal">B</NavLink>

      <ul tw="space-x-6 hidden sm:flex">
        <li>
          <NavLink>Home</NavLink>
        </li>
        <li>
          <NavLink>Leden</NavLink>
        </li>
        <li>
          <NavLink>Beerpong</NavLink>
        </li>
      </ul>
    </nav>
  );
};

const NavLink = tw.a`font-semibold hover:(text-red-600 cursor-pointer)`;

export default Navigation;
