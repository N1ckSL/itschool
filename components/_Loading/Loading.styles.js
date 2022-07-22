import styled from "styled-components";
import { images } from "../_imports";

export const LoadingScreen = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  opacity: 0;
  animation: fade 0.3s ease-in-out forwards;
  

  @keyframes fade {
    0% {
      opacity: 0.4;
    }
    50% {
      opacity: 0.8;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const LoadingLogo = styled.div`
  background-image: url(${images.preloader});
  display:flex;
  justify-content: center;
  width: 250px;
  height: 250px;
  align-items:center;
  background-repeat: no-repeat;
  background-position: center;
  animation: rotation 2s infinite linear;
  z-index: 999;

    @keyframes rotation {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(359deg);
      }
    }
`;
