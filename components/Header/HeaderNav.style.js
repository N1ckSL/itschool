import styled, { css } from "styled-components";
import { COLORS } from "../consts/colors";
import { LAYOUT } from "../consts/layout";

export const Container = styled.div`
  width: 100%;
  display: flex;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  & img {
    max-width: 100px;
  }
`;

export const Nav = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`;

export const NavItem = styled.p`
  cursor: pointer;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 1;
  border-radius: 2rem;
  padding: 1rem 2.4rem;
  transition: all 0.2s ease-in;
  color: ${({ disabled }) => (disabled ? COLORS.vistaWhite50 : "white")};
  background-color: ${({ active }) =>
    active ? COLORS.vistaWhite10 : "transparent"};
  &:hover {
    ${({ active, disabled }) =>
      active || disabled
        ? css`
            cursor: default;
          `
        : css`
            color: ${COLORS.maximumYellow};
          `};
  }
  @media (max-width: ${LAYOUT.BREAKPOINTS.LG}) {
    display: none;
  }
`;

export const NavItemWithDropdown = styled.div`
  cursor: default;
  position: relative;
  display: flex;
  justify-content: baseline;
  color: ${({ disabled }) => (disabled ? COLORS.vistaWhite50 : "white")};
  border-radius: 2rem;
  padding: 1rem 2.4rem;
  transition: all 0.2s ease-in;
  background-color: ${({ active }) =>
    active ? COLORS.vistaWhite10 : "transparent"};
  & > p {
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 1;
    color: inherit;
    padding-right: 2.8rem;
  }
  & > svg {
    position: absolute;
    top: 0.8rem;
    right: 2.4rem;
  }
  &:hover {
    & > div:last-child {
      display: flex;
      opacity: 1;
      visibility: visible;
    }
  }
  @media (max-width: ${LAYOUT.BREAKPOINTS.LG}) {
    display: none;
  }
`;

export const NavItemDropdownContainer = styled.div`
  display: flex;
  visibility: hidden;
  opacity: 0;
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  border-radius: 4px;
  width: max-content;
  transition: all 0.2s ease-in;
  filter: drop-shadow(0 -10px 20px rgba(0, 0, 0, 0.2));
  padding: 1.2rem 0;
  background-color: rgba(25, 30, 48, 1);
`;

export const NavItemDropdownItem = styled.p`
  color: white;
`;
