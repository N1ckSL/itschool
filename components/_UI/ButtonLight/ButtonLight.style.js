import styled from "styled-components";

export const Container = styled.div`
  cursor: pointer;
  width: fit-content;
  padding: 0px 4.8rem;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  border-radius: 2.4rem;
  min-width: 11.4rem;
  transition: all 0.25s ease-in 0s;
  border: 1px solid rgb(0, 135, 104);
  color: rgb(0, 135, 104);
  background-color: white;
`;

export const Title = styled.p`
  display: block;
  margin: 0px;
  transition: all 0.25s ease-in 0s;
  padding: 0.8rem 0px;
  font-weight: normal;
  font-size: 1.6rem;
  color: rgb(0, 135, 104);
`;
