import styled from "styled-components";
import { COLORS } from "../../../consts/colors";
import { LAYOUT } from "../../../consts/layout";

export const Container = styled.section`
  position: relative;
  width: 100%;
  padding: 9.6rem 0;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: -50vw;
    width: 150vw;
    z-index: -1;
    display: block;
    background-color: ${COLORS.starCommandBlue};
    @media (max-width: ${LAYOUT.BREAKPOINTS.XL}) {
      left: -2rem;
      width: 100vw;
    }
  }
  @media (max-width: ${LAYOUT.BREAKPOINTS.MD}) {
    padding: 7.2rem 0;
  }
`;
export const TestimonialeWrapper = styled.div`
  display: flex;

  @media (max-width: ${LAYOUT.BREAKPOINTS.SM}) {
  flex-direction: column;
  }

`;

export const LeftColumn = styled.div`
  flex-direction: column;
  width: 40%;

  @media (max-width: ${LAYOUT.BREAKPOINTS.SM}) {
    text-align: center;
    width: 100%;
    }
`;

export const TestimonialeButtons = styled.div`
  margin-top: 4.8rem;
  display: flex;
  gap: 1.6rem;
  flex-direction: column;
  width: fit-content;
  max-width: 40rem;

  @media (max-width: ${LAYOUT.BREAKPOINTS.SM}) {
    margin: 3.6rem auto 0;
    }
`;

export const RightColumn = styled.div`
  display: flex;
  flex-direction: row;
  width: 60%;

  @media (max-width: ${LAYOUT.BREAKPOINTS.SM}) {
    // text-align: center;
    flex-direction: column;
    width: 100%;
    }
`;

export const IconCommentWrapper = styled.div`
  color: white;
  margin-left: 12rem;
  margin-right: 2rem;
  justify-content: flex-end;
  @media (max-width: ${LAYOUT.BREAKPOINTS.SM}) {
    margin: 4.8rem 0 1.6rem 0;
    }
`;

export const TestimonialWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: white;

`;

export const TestimonialText = styled.div`
  display: flex;
  opacity: .8;
`;

export const Testimonial = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

export const ControllsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Controlls = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 2.4rem;
  gap: 2rem;

  > svg {
    cursor: pointer;
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 2.4rem;
  padding-top: 0.rem;

  svg{
    margin-right: 0.8rem;
  }
`;
