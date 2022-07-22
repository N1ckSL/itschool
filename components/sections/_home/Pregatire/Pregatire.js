import { H5 } from "../../../_UI/Typography/Title";
import { Pwhite } from "../Carrousel/Courses.style";
import {
  Alina,
  Container,
  H2half,
  ImageWrapper,
  Phalf,
  PregatireContainer,
  Programare,
  TechIcon,
  WebDev,
} from "./Pregatire.style";

const tehnologii = [
  {
    title: "Programare",
    tech: {
      name: ["Python,", "Java", "C++", "Git"],
      img: ["python", "java", "cpp", "git"]
    },
  },
  {
    title: "Web Development",
    tech: {
      name: ["html,", "css", "javascript", "react", "php", "laravel", "c-sharp", "dot NET"],
      img: ["html", "css", "javascript", "react", "php", "laravel", "c-sharp", "net"]
    },
  },
  {
    title: "Design",
    tech: {
      name: ["photoshop,", "illustrator", "invision", "miro", "zeplin"],
      img: ["photoshop", "illustrator", "invision", "miro", "zeplin"]
    },
  },
  {
    title: "DevOps",
    tech: {
      name: ["docker,", "jenkins", "ansible", "aws", "terraform"],
      img: ["docker", "jenkins", "ansible", "aws", "terraform"]
    },
  },
  {
    title: "Skill-up",
    tech: {
      name: ["sql,", "mysql", "scrum", "linux"],
      img: ["sql", "mysql", "scrum", "linux"]
    },
  },
  {
    title: "Testare",
    tech: {
      name: ["testare software,", "selenium"],
      img: ["testare", "selenium"]
    },
  },
  {
    title: "Alte Cursuri",
    tech: {
      name: ["Excel,"],
      img: ["excel"]
    },
  }
 
];

export const Pregatire = () => {
  return (
    <Container>
      <Pwhite transform="uppercase" align="left">
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
        {tehnologii.map((tehnologie, index) => (
          <Programare key={index}>
            <TechIcon>
              {/* <img src={require(`./img/${partner.img}.svg`).default.src} alt={partner.name} /> */}
              {/* <img
                src={require(`./img/${tehnologie.tech.img}.svg`).default.src}
                alt={tehnologie.tech.name}
              /> */}
            </TechIcon>
          </Programare>
        ))}
        <Programare>
          <H5>Programare</H5>
        </Programare>
        <WebDev></WebDev>
        <ImageWrapper>
          <Alina />
        </ImageWrapper>
      </PregatireContainer>
    </Container>
  );
};
