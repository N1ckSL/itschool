import styled from "styled-components";
import { COLORS } from "../../../consts/colors";
import { LAYOUT } from "../../../consts/layout";
import { H2, H3 } from "../../../_UI/Typography/Title";

export const Container = styled.section`
  position: relative;
  padding: 9.6rem 0;
`;

export const H2flat = styled(H2)`
  font-weight: normal;
  margin-bottom: 4.8rem;
`;

export const H3flat = styled(H3)`
  font-weight: 500;
  margin-bottom: 2.4rem;
`;

export const H3bottom = styled(H3flat)`
  margin-bottom: 4.8rem;
`;

export const ButtonWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: ${LAYOUT.BREAKPOINTS.SM}) {
    justify-content: center;
  }
`;

export const DespreWrapper = styled.div`
  display: flex;
  gap: 4.8rem;
  margin-bottom: 4.8rem;

  @media (max-width: ${LAYOUT.BREAKPOINTS.SM}) {
    flex-direction: column;
  }
`;

export const ImageWrapper = styled.div`
  width: 50%;
  margin-right: 4.8rem;

  @media (max-width: ${LAYOUT.BREAKPOINTS.SM}) {
    width: 100%;
  }
`;

export const Textwrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  @media (max-width: ${LAYOUT.BREAKPOINTS.SM}) {
    width: 100%;
    order: -1;
  }  
`;

export const VideoWrapper = styled.div`
  width: 100%;
  padding: 3.2rem;
  background-color: ${COLORS.timberWolf10};
  aspect-ratio: 15/9;
  margin-bottom: 4.8rem;

  & > video {
    width: 100%;
  }

  & > iframe {
    width: 100%;
    height: 100%;
    min-height: 42rem;
    @media (max-width: 767px) {
      min-height: 100%;
    }
  }
`;

export const AboutTextsWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  gap: 8rem;
  margin-bottom: 8.6rem;

  @media (max-width: ${LAYOUT.BREAKPOINTS.SM}) {
    flex-direction: column;
  }
`;

export const AboutText = styled.div`
  display: flex;
`;

export const Shape = styled.div`
  width: 4.8rem;
  height: 4.8rem;
  margin-right: 2rem;
  border-radius: 0 50% 50% 0;
  background-color: ${COLORS.oxfordBlue10};
`;

export const AboutPartners = styled.div`
  display: flex;
  justify-content: center;
  gap: 6rem;
  margin: auto;
  height: 4rem;
  @media (max-width: ${LAYOUT.BREAKPOINTS.LG}) {
    flex-wrap: wrap;
    gap: 2rem;
  }
  @media (max-width: ${LAYOUT.BREAKPOINTS.MD}) {
    justify-content: space-around;
    max-width: 30rem;
    height: auto;
  }
  margin-bottom: 4.8rem;
`;

export const ButtonWrapperCenter = styled(ButtonWrapper)`
  justify-content: center;
`;
