import Link from "next/link";
import { Button } from "../../../_UI/Button/Button";
import { P } from "../../../_UI/Typography/Title";
import { Partners } from "../Partners/Partners";
import { Carrousel } from "./Carrousel";

import {
  Container,
  CoursesIntro,
  Center,
  H2flat,
  Pwhite,
} from "./Courses.style";

export const Courses = () => {
  return (
    <Container>
      <CoursesIntro>
        <Pwhite transform="uppercase" align="center">cursuri it cu certificare pentru incepatori</Pwhite>
        <H2flat align="center">
          From zero to hero. Descoperă programele de pregătire IT School
        </H2flat>
        <P align="center">
          Alege din peste 10 cursuri adresate tuturor celor care își doresc un
          job în domeniul IT
        </P>
      </CoursesIntro>
      <Carrousel />
      <Center>
        <Link href="/cursuri" passHref>
          <a>
            <Button align="center">Vezi toate cursurile</Button>
          </a>
        </Link>
      </Center>
      <Pwhite mb="3.2rem" align="center">
        În parteneriat cu peste 50 companii de renume din România
      </Pwhite>
      <Partners />
    </Container>
  );
};
