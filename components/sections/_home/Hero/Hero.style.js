import styled from 'styled-components'
import { COLORS } from "../../../consts/colors";
import { LAYOUT } from "../../../consts/layout";
import { images } from '../../../_imports';

export const Container = styled.section`
  width: 100%;
  height: 52.4rem;
  display: flex;
  align-items: flex-start;
  margin-top: 10rem;
  & > svg {
    margin: auto;
    margin-botom: 0;
  }
  @media (max-width: ${LAYOUT.BREAKPOINTS.XL}) {
    margin-top: 5rem;
  }
  @media (max-width: ${LAYOUT.BREAKPOINTS.LG}) {
    margin-top: 2.4rem;
    height: 57.4rem;
  }
  @media (max-width: ${LAYOUT.BREAKPOINTS.MD}) {
    margin-top: 3.6rem;
    height: 57.4rem;
  }
`;

export const Background = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100vw;
  height: 70rem;
  background-color: ${COLORS.oxfordBlue100};
  background-image: url(${images.backgroundBig});
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-position: bottom right;
  background-attachment: fixed;
  @media (min-width: 2800px) {
    background-size: 100% auto;
  }
  @media (min-width: 1400px) {
    background-size: 100%;
  }
  @media (max-width: ${LAYOUT.BREAKPOINTS.LG}) {
    background-image: url(${images.backgroundMedium});
  }
  @media (max-width: ${LAYOUT.BREAKPOINTS.MD}) {
    background-image: url(${images.backgroundSmall});
  }
  @media (max-width: 767px) {
    background-image: url(${images.backgroundSmall});
    background-size: cover;
    background-position: center center;
  }
`;

export const ImageContainer = styled.div`
  height: 70rem;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  max-width: calc(
    min(
      ${LAYOUT.MAXWIDTH} + 2 * ${LAYOUT.PAGEMARGINS},
      100vw - ${LAYOUT.PAGEMARGINS}
    )
  );
  margin-left: auto;
  margin-right: auto;
  padding-left: ${LAYOUT.PAGEMARGINS};
  padding-right: ${LAYOUT.PAGEMARGINS};

  @media (max-width: ${LAYOUT.BREAKPOINTS.XL}) {
    background-position: 66% 68%;
  }
  @media (max-width: ${LAYOUT.BREAKPOINTS.LG}) {
    background-position: 68% 68%;
  }
  @media (max-width: ${LAYOUT.BREAKPOINTS.MD}) {
    justify-content: center;
    background-position: 25% 80%;
  }
  @media (max-width: ${LAYOUT.BREAKPOINTS.SM}) {
    background-position: 10% 75%;
  }
`;

export const David = styled.img`
  height: 80%;
  @media (max-width: ${LAYOUT.BREAKPOINTS.XL}) {
    height: 70%;
  }
  @media (max-width: ${LAYOUT.BREAKPOINTS.LG}) {
    height: 65%;
  }
  @media (max-width: ${LAYOUT.BREAKPOINTS.MD}) {
    height: auto;
    max-height: 45%;
  }
  @media (max-width: ${LAYOUT.BREAKPOINTS.SM}) {
    max-height: 35%;
  }
`;

export const Content = styled.div`
width: 50%;
display: flex;
flex-direction: column;
@media (max-width: ${LAYOUT.BREAKPOINTS.LG}) {
  padding: 2.4rem 3.6rem;
  width: 100%;
}
@media (max-width: ${LAYOUT.BREAKPOINTS.MD}) {
  padding: 0;
}
`;

export const Title = styled.h1`
  color: white;
  font-size: 4.8rem;
  margin-bottom: 4.8rem;  //create spacer
  margin-top: 2.8rem;
  font-weight: 500;
  line-height: 1.21;

  @media (max-width: ${LAYOUT.BREAKPOINTS.MD}) {
    font-size: 3.6rem;
  }
`;

export const Subtitle = styled.p`
  color: white;
  font-size: 1.6rem;
  margin-bottom: 2.4rem;
`;

export const Parteners = styled.div`
  display: flex;
  gap: 3.6rem;
  padding-bottom: 7rem; // initial 2.4 -> change after adding Spacer
  @media (max-width: ${LAYOUT.BREAKPOINTS.XL}) {
    padding: 2.4rem 0;
    gap: 2rem;
  }
  @media (max-width: ${LAYOUT.BREAKPOINTS.LG}) {
    width: 60%;
    flex-wrap: wrap;
    gap: 3rem;
  }
  @media (max-width: ${LAYOUT.BREAKPOINTS.MD}) {
    display: none;
  }
`;
export const Partener = styled.img`
  width: auto;
  height: 3.6rem;
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 1.8rem;
  @media (max-width: ${LAYOUT.BREAKPOINTS.LG}) {
    & > :last-child {
      display: none;
    }
  }
`;