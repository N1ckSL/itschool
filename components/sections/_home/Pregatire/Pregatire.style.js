import styled from "styled-components";
import { COLORS } from "../../../consts/colors";
import { images } from "../../../_imports";
import { H2, P } from "../../../_UI/Typography/Title";

export const Container = styled.div`
  padding: 9.6rem 0 0;
  position: relative;
`;

export const H2half = styled(H2)`
  width: 50%;
  font-weight: normal;
  padding-bottom: 2.4rem;
`;

export const Phalf = styled(P)`
  width: 50%;
  padding-bottom: 4.8rem;
`;

export const PregatireContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "programare image"
    "webdev image";
`;

export const Programare = styled.div`
  grid-area: programare;
  padding-bottom: 4.8rem;
`;

export const WebDev = styled.div`
  grid-area: webdev;
  padding-bottom: 4.8rem;
`;

export const ImageWrapper = styled.div`
  position: absolute;
  width: 100px;
  max-height: 100px;
  display: block;
  grid-area: image;
  padding-bottom: 4.8rem;
  z-index: 999;
  background-image: url(${images.alina});
`;

export const Alina = styled.div`
  width: 100%;
  margin-left: auto;
  max-width: 50rem;
  display: block;
`;

export const TechIcon = styled.div`
  display: flex;
  justify-content: Center;
  height: 6.4rem;
  width: 6.4rem;
  padding: 1.6rem;
  border-radius: 50%;
  box-shadow: 0 10px 10px 0 ${COLORS.oxfordBlue05};
  background-color: white;
`;
