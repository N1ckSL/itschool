import React from "react";
import {
  Background,
  Buttons,
  Container,
  Content,
  David,
  ImageContainer,
  Partener,
  Parteners,
  Subtitle,
  Title,
} from "./Hero.style";
import { images } from "../../../_imports";
import Link from "next/link";
import { Button } from "../../../_UI/Button/Button";
import { CustomLink } from "../../../_UI/CustomLink/CustomLink";
import { ChevronRight } from "../../../_UI/Icons";

const partners = [
  {
    imageSource: images.edu,
    alt: "",
  },
];

export const Hero = () => {
  return (
    <Container>
      <Background>
        <ImageContainer>
          <David src={images.landingMentor} alt="david" />
        </ImageContainer>
      </Background>
      <Content>
        <Title>Acceleratorul de cariere în domeniul IT</Title>
        <Subtitle>
          Cursuri IT pentru începători cu certificare internațională
        </Subtitle>
        <Parteners>
          <Partener src={images.edu} alt="Ministerul Educatiei Nationale" />
          <Partener src={images.microsoft} alt="Microsoft" />
          <Partener src={images.adobe} alt="Adobe" />
          <Partener src={images.its} alt="Information Technology Specialist" />
        </Parteners>
        <Buttons>
          <Link href="/cursuri">
            <a>
              <Button>Vezi toate cursurile</Button>
            </a>
          </Link>
          <Link href="/certificari">
            <a>
              <CustomLink>
                Vezi certificarile <ChevronRight />
              </CustomLink>
            </a>
          </Link>
        </Buttons>
      </Content>
    </Container>
  );
};
