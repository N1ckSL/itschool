import styled from "styled-components";
import { COLORS } from "../../../consts/colors";
import { LAYOUT } from "../../../consts/layout";

export const Grid = styled.section`
  gap: ${LAYOUT.COLGAP};
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, 1fr);

  @media (max-width: ${LAYOUT.BREAKPOINTS.SM}) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 1fr);
  }
`;

export const Column = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2.8rem;
`;
