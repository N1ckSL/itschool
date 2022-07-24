import styled from "styled-components";
import { COLORS } from "../../consts/colors";

export const H1 = styled.h1`
  font-size: 4.8rem;
  font-weight: 500;
  font-family: Asap, sans-serif;
  line-height: 1.21;
  margin: 0;
  text-align: center;
  color: ${(color) => (color ? color : COLORS.oxfordBlue100)};
`;

export const H2 = styled.h2`
  font-family: Asap, sans-serif;
  font-size: 3.6rem;
  margin: 0;
  ${({ align }) => align && `text-align: ${align}`};
  color: ${(color) => (color ? color : COLORS.oxfordBlue100)};
`;

export const H3 = styled.h3`
  font-family: Asap, sans-serif;
  font-size: 3.2rem;
  margin: 0;
  ${({ align }) => align && `text-align: ${align}`};
  color: ${(color) => (color ? color : COLORS.oxfordBlue100)};
`;


export const H5 = styled.h2`
  font-family: Asap, sans-serif;
  font-size: 1.8rem;
  font-weight: normal;
  margin: 0;
  line-height: 1.22;
  ${({ align }) => align && `text-align: ${align}`};
  ${({ mb }) => mb && `margin-bottom: ${mb}`};
  color: ${(color) => (color ? color : COLORS.oxfordBlue100)};
`;

export const P = styled.p`
  font-family: Asap, sans-serif;
  font-size: 1.6rem;
  font-weight: normal;
  margin: 0;
  line-height: 1.5;
  overflow-wrap: break-word;
  ${({ align }) => align && `text-align: ${align}`};
  color: ${(color) => (color ? color : COLORS.oxfordBlue100)};
  ${({ mb }) => mb && `margin-bottom: ${mb}`};
  ${({ transform }) => transform && `text-transform: ${transform}`};
`;
