import styled from "styled-components";

export const Container = styled.div`
  cursor: pointer;
  padding: 0.8rem 2.4rem;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  gap: 0.8rem;
  color: white;
  border-radius: 2.4rem;
  border: 1px solid white;
  background-color: transparent;
  transition: opacity 0.25s ease-in 0s;
`;

export const Title = styled.p`
  font-family: Asap, sans-serif;
  font-size: 1.6rem;
  font-weight: normal;
  display: flex;
  gap: 0.8rem;
  align-items: center;
  justify-content: center;
  line-height: 1.5;
  overflow-wrap: break-word;
  color: white;
`;
