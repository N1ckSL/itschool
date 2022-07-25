import styled from "styled-components";
import { COLORS } from "../../../consts/colors";
import { LAYOUT } from "../../../consts/layout";
import { H2, P } from "../../../_UI/Typography/Title";

export const Container = styled.section`
  padding: 9.6rem 0 0;
  position: relative;
`;

export const H2half = styled(H2)`
  width: 50%;
  font-weight: normal;
  padding-bottom: 2.4rem;

  @media (max-width: ${LAYOUT.BREAKPOINTS.SM}) {
    width: 100%;
  }
`;

export const Phalf = styled(P)`
  width: 50%;
  padding-bottom: 4.8rem;

  @media (max-width: ${LAYOUT.BREAKPOINTS.SM}) {
    width: 100%;
  }
`;

export const ImageWrapper = styled.div`
  position: absolute;
  display: flex;
  top: 24rem;
  width: 100%;

  @media (max-width: ${LAYOUT.BREAKPOINTS.SM}) {
    position: relative;
    top: 0;
    order: 10;
  }
  
`;

export const Alina = styled.img`
  width: 100%;
  margin-left: auto;
  max-width: 50rem;
  display: block;

  @media (max-width: ${LAYOUT.BREAKPOINTS.SM}) {
    order: 5;
  }
`;

export const PregatireContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

export const PregatireWrapper = styled.div`
  width: 50%;

  &:nth-child(n + 2):nth-child(-n + 3) {
    width: 100%;
  }

  &:nth-last-child(-n+2) {
    width: 25%;
  }

  @media (max-width: ${LAYOUT.BREAKPOINTS.SM}) {
    width: auto;

    &:nth-child(n + 2):nth-child(-n + 3) {
      display:flex;
      flex-wrap: wrap;
    }

    &:nth-last-child(-n+2) {
      width: 50%;
    }
  }
`;

export const TechWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 4.8rem;
  gap: 0.8rem;
`;

export const TechIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: Center;
  height: 6.4rem;
  width: 6.4rem;
  padding: 1.6rem;
  border-radius: 50%;
  box-shadow: 0 10px 10px 0 ${COLORS.oxfordBlue05};
  background-color: white;
`;
