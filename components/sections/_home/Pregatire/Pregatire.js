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

const tehnologii = [
  {
    title: "Programare",
    tech: {
      name: ["Python,", "Java", "C++", "Git"],
      img: ["python", "java", "cpp", "git"],
    },
    component: "Programare",
  },
  {
    title: "Web Development",
    tech: {
      name: [
        "HTML5",
        "CSS",
        "JavaScript",
        "React",
        "PHP",
        "Laravel",
        "C#",
        ".NET",
      ],
      img: [
        "html5",
        "css3",
        "javascript",
        "react",
        "php",
        "laravel",
        "c-sharp",
        "net",
      ],
    },
    component: "WebDev",
  },
  {
    title: "Design",
    tech: {
      name: ["Photoshop,", "Illustrator", "Invision", "Miro", "Zeplin"],
      img: ["photoshop", "illustrator", "invision", "miro", "zeplin"],
    },
    component: "Design",
  },
  {
    title: "DevOps",
    tech: {
      name: ["Docker,", "Jenkins", "Ansible", "AWS", "Terraform"],
      img: ["docker", "jenkins", "ansible", "aws", "terraform"],
    },
    component: "Devops",
  },
  {
    title: "Skill-up",
    tech: {
      name: ["SQL,", "MySQL", "SCRUM", "Linux"],
      img: ["sql", "mysql", "agile", "linux"],
    },
    component: "Skillup",
  },
  {
    title: "Testare",
    tech: {
      name: ["Testare software,", "Selenium"],
      img: ["testare", "selenium"],
    },
    component: "Testare",
  },
  {
    title: "Alte Cursuri",
    tech: {
      name: ["Excel,"],
      img: ["excel"],
    },
    component: "Altele",
  },
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
        <ImageWrapper>
          <Alina />
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
