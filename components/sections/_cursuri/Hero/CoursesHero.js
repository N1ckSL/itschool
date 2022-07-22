import { Background, Container, Subtitle, Title, Wrapper } from "./CoursesHero.style";

export const CoursesHero = () => {
  return (
    <Container>
      <Background />
      <Wrapper>
        <Title>Cariera ta în domeniul IT începe aici</Title>
        <Subtitle>
        Explorează cursurile noastre, alege tehnologia potrivită, formatul programului sau locația preferată și pregătește-te pentru viitorul tău job în domeniu.
        </Subtitle>
      </Wrapper>
    </Container>
  );
};
