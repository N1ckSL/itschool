import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Container,
  Logo,
  Nav,
  NavItem,
  NavItemDropdownContainer,
  NavItemWithDropdown,
} from "./HeaderNav.style";
import { NAV } from "../consts/menu";

export const HeaderNav = ({ headerTransparent }) => {
  const router = useRouter();
  const [position, setPosition] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);
  
  useEffect(() => {
    const handleScroll = () => {
      let moving = window.scrollY;

      setVisible(position > moving);
      setPosition(moving);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const cls = visible ? "visible" : "hidden";

  return (
    <Container className={cls}>
      <Link href="/" passHref>
        <Logo>
          <img src="img/logo-itschool-dark.svg" alt="logo" />
        </Logo>
      </Link>
      <Nav>
        {NAV.map(({ title, path, dropdown }, index) => (
          <React.Fragment key={index}>
            {path !== undefined && (
              <Link key={title} href={path} passHref>
                <NavItem active={path === router.pathname}>{title}</NavItem>
              </Link>
            )}
            {dropdown !== undefined && (
              <NavItemWithDropdown
                key={title}
                headerTransparent={headerTransparent}
              >
                <p>{title}</p>
                <NavItemDropdownContainer
                  headerTransparent
                  className="dropdown-container"
                >
                  {dropdown.map((item, _id) => (
                    <Link key={_id} href={item.path} passHref>
                      <NavItem active={path === router.pathname}>
                        {item.title}
                      </NavItem>
                    </Link>
                  ))}
                </NavItemDropdownContainer>
              </NavItemWithDropdown>
            )}
          </React.Fragment>
        ))}
      </Nav>
    </Container>
  );
};
