import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  overflow: hidden;
  left: -8rem;
  padding-left: 8rem;
  margin: 4.8rem 0;
  width: min(100vw, 1200px);
  @media (max-width: 1024px) {
    padding-left: 0;
  }
  @media (max-width: 760px) {
    left: -3rem;
  }
`;

