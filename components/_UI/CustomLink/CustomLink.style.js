import styled from "styled-components";

export const Container = styled.div`
  cursor: pointer;
  text-decoration: none;
  width: fit-content;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid white;
  color:white;
  padding-bottom: 0.2em;
  font-size: 1.6rem;
  transition: all 0.25s ease-in;
  &:hover {
    opacity: 0.8;
  }
`;

export const Title = styled.p`
  display: block;
  text-decoration: none;
  margin: 0;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1;
  color: inherit;
`;
