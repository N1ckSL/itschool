import styled from "styled-components";
import { LAYOUT } from "../../../consts/layout";
import { images } from "../../../_imports";

export const Container = styled.div`
  position: relative;
  margin: 0;
  width: 100%;
  padding: 9.6rem 0;
  @media (max-width: ${LAYOUT.BREAKPOINTS.MD}) {
    padding: 7.2rem 0;
  }
`;

export const Background = styled.div`
  position: absolute;
  z-index: -1;
  top: -7.6rem;
  left: -2rem;
  bottom: 0;
  width: 100vw;
  background-image: url(${images.background});
  background-repeat: no-repeat;
  background-size: cover;
  @media (min-width: ${LAYOUT.BREAKPOINTS.XL}) {
    left: calc(-50vw + 600px);
    width: 100vw;
  }
`;

export const Wrapper = styled.div`
  margin: auto;
  max-width: 80rem;
  display: flex;
  gap: 2.4rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 4.8rem;
  font-family: "Asap", sans-serif;
  line-height: 1.2;
  font-weight: 500;
  text-align: center;
  color: white;
`;

export const Subtitle = styled.p`
  font-size: 1.6rem;
  color: white;
  font-family: "Asap", sans-serif;
  text-align: center;
  line-height: 1.5;
`;
