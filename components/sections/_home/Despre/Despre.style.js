import styled from "styled-components";
import { H2, H3 } from "../../../_UI/Typography/Title";

export const Container = styled.div`
  padding: 9.6rem 0;
  position: relative;
`;

export const DespreWrapper = styled.div`
  display: flex;
  gap: 4.8rem;
`;

export const ImageWrapper = styled.div`
  width: 50%;
  margin-right: 4.8rem;
`;

export const Textwrapper = styled.div`
  display: flex;
  flex-direction: column;
  width:50%;
`;

export const H2flat = styled(H2)`
    font-weight: normal;
    margin-bottom: 4.8rem;
`;

export const H3flat = styled(H3)`
    font-weight: 500;
    margin-bottom: 2.4rem;
`;