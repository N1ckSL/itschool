import Link from "next/link";
import { COLORS } from "../../../consts/colors";
import { aboutTexts } from "../../../consts/data";
import { images } from "../../../_imports";
import { Button } from "../../../_UI/Button/Button";
import { ButtonLight } from "../../../_UI/ButtonLight/ButtonLight";
import { H4, H5, P } from "../../../_UI/Typography/Title";

import {
  AboutPartners,
  AboutText,
  AboutTextsWrapper,
  ButtonWrapper,
  ButtonWrapperCenter,
  Container,
  DespreWrapper,
  H2flat,
  H3bottom,
  H3flat,
  ImageWrapper,
  Shape,
  Textwrapper,
  VideoWrapper,
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
          <ButtonWrapper>
            <Link href="/despre/it-school" passHref>
              <a>
                <ButtonLight>Vezi detalii</ButtonLight>
              </a>
            </Link>
          </ButtonWrapper>
        </Textwrapper>
      </DespreWrapper>
      <VideoWrapper>
        <iframe
          loading="lazy"
          src="https://www.youtube.com/embed/OHLXM-_v-PA"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
        />
      </VideoWrapper>
      <H3bottom>Valorile noastre, beneficiile tale</H3bottom>
      <AboutTextsWrapper>
        {aboutTexts.map((item, index) => (
          <AboutText key={index}>
            <div>
              <Shape />
            </div>
            <div>
              <H4 mb="1.6rem">{item.title}</H4>
              <P>{item.text}</P>
            </div>
          </AboutText>
        ))}
      </AboutTextsWrapper>
      <H5 align="center" color={COLORS.oxfordBlue40} mb="4.8rem">
        Centru de formare autorizat
      </H5>
      <AboutPartners>
        <img src={images.eduBlack} />
        <img src={images.microsoftBlack} />
        <img src={images.adobeBlack} />
        <img src={images.itsBlack} />
        <img src={images.appleBlack} />
      </AboutPartners>
      <ButtonWrapperCenter>
        <Link href="/cursuri" passHref>
          <a>
            <Button>Alege cursul potrivit</Button>
          </a>
        </Link>
      </ButtonWrapperCenter>
    </Container>
  );
};
