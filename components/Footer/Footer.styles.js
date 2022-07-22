import styled from "styled-components"
import { LAYOUT } from "../consts/layout";

export const Container = styled.footer`
grid-area: footer;
height: fit-content;
padding-top: 4.8rem;
padding-bottom: 2.4rem;
background-color: white;
@media (max-width: ${LAYOUT.BREAKPOINTS.MD}) {
  padding-left: 2rem;
  padding-right: 2rem;
}

width: 100%;
max-width: calc(min(${LAYOUT.MAXWIDTH} + 2 * ${LAYOUT.PAGEMARGINS}, 100vw));
margin-left: auto;
margin-right: auto;
padding-left: ${LAYOUT.PAGEMARGINS};
padding-right: ${LAYOUT.PAGEMARGINS};
`;