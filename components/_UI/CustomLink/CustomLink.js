import { ChevronRight } from "../Icons"
import { Container, Title } from "./CustomLink.style"

export const CustomLink = ({children}) => {
    return (
        <Container>
            <Title>
                {children}
            </Title>
        </Container>
    )
}