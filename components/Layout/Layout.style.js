import styled from "styled-components";
import { COLORS } from "../consts/colors";
import { LAYOUT } from "../consts/layout";

export const Container = styled.div`
  position: relative;
  // max-width: 100vw;
  // min-height: 100vh;
  margin: 0;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.9rem ${LAYOUT.PAGEMARGINS};
  background-color: ${({ headerTransparent }) =>
    headerTransparent ? "transparent" : COLORS.oxfordBlue100};
  transition: all 300ms ease-in-out;
  z-index: 999;
  
  &.scrollDown {
    opacity: 0;
    transform: translate(0, -100%);
  }
  &.scrollUp {
    opacity: 1;
    background-color: ${COLORS.oxfordBlue100};
    filter: drop-shadow(0 -10px 20px rgba(0, 0, 0, 0.2));
    & .dropdown-container {
      background-color: ${COLORS.oxfordBlue100};
    }
  }
`;

export const HeaderWrappper = styled.div`
  display: flex;
  width: min(${LAYOUT.MAXWIDTH}, 100%);
`;

export const Main = styled.main`
  grid-area: main;
  width: 100%;
  max-width: calc(min(${LAYOUT.MAXWIDTH} + 2 * ${LAYOUT.PAGEMARGINS}, 100vw));
  margin: 0 auto;
  padding: 0 ${LAYOUT.PAGEMARGINS};
`;
