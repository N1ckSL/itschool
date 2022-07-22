import { Container, Title } from "./Button.style"


export const Button = ({children}) => {
 return (
    <Container>
        <Title>
            {children}
        </Title>
    </Container>
 )   
}