import styled from "styled-components";
import { COLORS } from "../consts/colors";
import { LAYOUT } from "../consts/layout";

export const Container = styled.div`
  position: relative;
  /* overflow: hidden; */
  max-width: 100vw;
  min-height: 100vh;
  margin: 0;
  display: grid;
  grid-template-rows: 76px 1fr auto;
  grid-template-areas: "header" "main" "footer";
`;

export const Header = styled.header`
position: fixed;
top: 0;
left: 0;
right: 0;
z-index: 9999;
grid-area: header;
width: 100vw;
/* overflow: hidden; */
/* height: 76px; */
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding-left: ${LAYOUT.PAGEMARGINS};
padding-right: ${LAYOUT.PAGEMARGINS};
padding-top: 1.9rem;
padding-bottom: 1.9rem;
background-color: ${({ headerTransparent }) =>
  headerTransparent ? "transparent" : COLORS.oxfordBlue100};
transition: all 300ms ease-in-out;
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
  padding-top: ${({ hasPaddingTop }) => (hasPaddingTop ? "4rem" : "0")};
  width: 100%;
  max-width: calc(min(${LAYOUT.MAXWIDTH} + 2 * ${LAYOUT.PAGEMARGINS}, 100vw));
  margin: 0 auto;
  padding-left: ${LAYOUT.PAGEMARGINS};
  padding-right: ${LAYOUT.PAGEMARGINS};
`;
