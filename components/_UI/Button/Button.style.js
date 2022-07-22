import styled from "styled-components";

export const Container = styled.div`
  cursor: pointer;
  width: fit-content;
  padding: 0 4.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2.4rem;
  min-width: 11.4rem;
  color: white;
  background-color: rgb(0, 135, 104); // add COLOR.var
  transition: all 0.25s ease-in;
  &:hover {
    oapcity: 0.8;
  }
  & svg {
    margin-left: 0.5rem;
    margin-right: -1.2rem;
    &.downloadIcon {
      margin-left: 1.2rem;
    }
  }
`;

export const Title = styled.p`
  display: block;
  margin: 0;
  padding: 1.1rem 0;
  font-weight: 500;
  font-size: 1.8rem;
  color: white;
  transition: all 0.25s ease-in;
`;
