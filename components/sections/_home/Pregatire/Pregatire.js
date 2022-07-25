import { tehnologii } from "../../../consts/data";
import { images } from "../../../_imports";
import { H5 } from "../../../_UI/Typography/Title";
import { Pwhite } from "../Carrousel/Courses.style";
import {
  Alina,
  Container,
  H2half,
  ImageWrapper,
  Phalf,
  PregatireContainer,
  PregatireWrapper,
  TechIcon,
  TechWrapper,
} from "./Pregatire.style";

export const Pregatire = () => {
  return (
    <Container>
      <Pwhite transform="uppercase" align="left" mb="1.6rem">
        Cursurile it school
      </Pwhite>
      <H2half>
        Te pregătești pentru interviul de angajare de la prima lecție
      </H2half>
      <Phalf>
        Competențele tale vor face diferența în fața angajatorilor. Pentru șanse
        de angajare 100% reale, în crearea programelor noastre de curs ținem
        cont de trei factori importanți: tendințele actuale din industrie,
        expertiza trainerilor noștri și cunoștințele necesare absolvirii cu
        succes a examenelor cu certificare internațională. Iată tehnologiile
        studiate în cadrul cursurilor IT School:
      </Phalf>
      <PregatireContainer>
        <ImageWrapper>
          <Alina src={images.alina} />
        </ImageWrapper>
        {tehnologii.map((tehnologie, index) => (
          <PregatireWrapper key={index}>
            <H5 mb={"1.5rem"}>{tehnologie.title}</H5>
            <TechWrapper>
              {tehnologie.tech.img.map((logo, idx) => (
                <TechIcon key={idx}>
                  <img
                    src={require(`./img/${logo}.svg`).default.src}
                    alt={tehnologie.title}
                  />
                </TechIcon>
              ))}
            </TechWrapper>
          </PregatireWrapper>
        ))}
      </PregatireContainer>
    </Container>
  );
};
