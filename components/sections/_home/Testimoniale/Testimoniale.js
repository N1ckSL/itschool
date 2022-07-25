import Link from "next/link";
import { useState } from "react";
import { dataTestimoniale } from "../../../consts/data";
import { ButtonTestimonial } from "../../../_UI/ButtonTestimonial/ButtonTestimonial";
import { ButtonTestimonialLight } from "../../../_UI/ButtonTestimonialLight/ButtonTestimonialLight";
import {
  IconComment,
  IconFacebook,
  IconLeft,
  IconProfile,
  IconRight,
} from "../../../_UI/SVG";
import { H2, P } from "../../../_UI/Typography/Title";
import {
  Container,
  Controlls,
  ControllsWrapper,
  IconCommentWrapper,
  LeftColumn,
  Profile,
  RightColumn,
  Testimonial,
  TestimonialeButtons,
  TestimonialeWrapper,
  TestimonialText,
  TestimonialWrapper,
} from "./Testimoniale.style";

export const Testimoniale = () => {
  const dataLength = dataTestimoniale[0].author.length;
  const [show, setShow] = useState(0);

  const handlePrev = () => {
    if (show >= 1) setShow(show - 1);
  };
  const handleNext = () => {
    if (show + 1 < dataLength) setShow(show + 1);
  };

  return (
    <Container>
      <TestimonialeWrapper>
        <LeftColumn>
          <P transform="uppercase" color="white" mb="1.6rem">
            recenzii
          </P>
          <H2 color="white">Nu trebuie să ne crezi pe cuvânt</H2>
          <TestimonialeButtons>
            <Link href="/despre/testimoniale" passHref>
              <a>
                <ButtonTestimonial>
                  Vezi ce spun cursantii nostri
                </ButtonTestimonial>
              </a>
            </Link>
            <Link
              href="https://www.facebook.com/itschool.ro/reviews/?ref=page_internal"
              passHref
              target="_blank"
            >
              <a>
                <ButtonTestimonialLight>
                  <IconFacebook /> Vezi mai multe pe Facebook
                </ButtonTestimonialLight>
              </a>
            </Link>
          </TestimonialeButtons>
        </LeftColumn>

        <RightColumn>
          <IconCommentWrapper>
            <IconComment />
          </IconCommentWrapper>
          <TestimonialWrapper>
            {dataTestimoniale.map((testimonial, index) => (
              <Testimonial key={index}>
                <ControllsWrapper>
                  <Profile>
                    <IconProfile />
                    <P>{testimonial.author[show]}</P>
                  </Profile>
                  <Controlls>
                    <IconLeft onClick={handlePrev} disabled={show === 0} />
                    <IconRight
                      onClick={handleNext}
                      disabled={show === testimonial.author.length - 1}
                    />
                    <P> {show + 1 + "/" + testimonial.author.length}</P>
                    {/* <IconRight onClick={console.log("im clicked" + setNext(next+ 1 )}/> */}
                  </Controlls>
                </ControllsWrapper>
                <TestimonialText>
                  <P>{testimonial.text[show]}</P>
                </TestimonialText>
              </Testimonial>
            ))}
          </TestimonialWrapper>
        </RightColumn>
      </TestimonialeWrapper>
    </Container>
  );
};
