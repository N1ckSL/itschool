import { images } from "../../../_imports";
import { Button } from "../../../_UI/Button/Button";
import { ButtonLight } from "../../../_UI/ButtonLight/ButtonLight";
import { H2, H3, P } from "../../../_UI/Typography/Title";

import {
  Container,
  DespreWrapper,
  H2flat,
  H3flat,
  ImageWrapper,
  Textwrapper,
} from "./Despre.style";

export const Despre = () => {
  return (
    <Container>
      <DespreWrapper>
        <ImageWrapper>
          <img src={images.despre} />
        </ImageWrapper>
        <Textwrapper>
          <P align="left" transform="uppercase" mb={"3.6rem"}>
            despre it school
          </P>
          <H2flat>
            Din 2014, peste 5000 de cursanți s-au alăturat comunității noastre
            de absolvenți
          </H2flat>
          <H3flat>
            Suntem cea mai populară academie cu focus pe educație alternativă în
            IT din vestul României
          </H3flat>
          <P mb={"2.4rem"}>
            Primii pași pe care-i vei face către viitoarea ta carieră nu trebuie
            să fie dificili. IT School este locul unde pasionații din industrie
            se întâlnesc cu viitorii specialiști IT. Alături de trainerii noștri
            și parteneri din domeniu am construit un mediu de învățare
            specializat pentru toți cei care își doresc să descopere noi
            oportunități.
          </P>
          <ButtonLight>
            Vezi detalii
          </ButtonLight>
        </Textwrapper>
      </DespreWrapper>
    </Container>
  );
};
