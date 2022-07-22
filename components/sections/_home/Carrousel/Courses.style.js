import { COLORS } from "../../../consts/colors";
import { LAYOUT } from "../../../consts/layout";
import { images } from "../../../_imports";
import styled from "styled-components";
import { H2, P } from "../../../_UI/Typography/Title";

export const Container = styled.div`
  position: relative;
  width: 100%;
  padding: 9.6rem 5rem;
  &:before {
    content: "";
    display: block;
    inset: 0;
    left: calc(-50vw + min(600px, 50vw - 3rem));
    width: 100vw;
    position: absolute;
    z-index: -2;
    background-size: auto;
    background-color: ${COLORS.timberWolf10};
  }
  @media (min-width: ${LAYOUT.BREAKPOINTS.LG}) {
    &:before {
      background-image: url(${images.backgroundCourses});
      background-repeat: no-repeat;
      background-position: top center;
      @media (min-width: 1400px) {
        background-size: cover;
      }
    }
  }
  @media (max-width: ${LAYOUT.BREAKPOINTS.MD}) {
    padding: 9.6rem 0;
  }
`;

export const CoursesIntro = styled.div`
  width: 100%;
  max-width: 80rem;
  margin: auto;
`;

export const Center = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 12.8rem;
`;

export const Pwhite = styled(P)`
  ${({ align }) => align && `text-align: ${align}`};
  ${({ transform }) => transform && `text-transform: ${transform}`};
  color: ${COLORS.oxfordBlue40};
  margin-bottom: 1.6rem;
  ${({ mb }) => mb && `margin-bottom: ${mb}`};
`;

export const H2flat = styled(H2)`
  font-weight: normal;
  margin-bottom: 2.4rem;
`;
