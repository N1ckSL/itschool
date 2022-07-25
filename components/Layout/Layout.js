import { Footer } from "../Footer/footer";
import { HeaderNav } from "../Header/HeaderNav";
import { Container, Header, HeaderWrappper, Main } from "./Layout.style";

export const Layout = ({ children }) => {
  return (
    <Container>
      <Header>
        <HeaderWrappper>
          <HeaderNav />
        </HeaderWrappper>
      </Header>
      <Main>{children}</Main>
      <Footer />
    </Container>
  );
};
