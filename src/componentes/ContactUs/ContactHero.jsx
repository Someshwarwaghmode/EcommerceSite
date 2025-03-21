import styled from "styled-components";

const ContactHero = () =>{
    return(
        <Container>
            <Img src="./img/ContactHeroPhoto.png" alt="ContactHeroPhoto"/>
            <Heading>contact us</Heading>
        </Container>
    )
}

export default ContactHero;
const Container = styled.section``;
const Heading = styled.h1``;
const Img = styled.img`
    width:100%;
`;