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
const Heading = styled.h1`
    text-transform: uppercase;
    position: absolute;
    top: 200px;
    left: 110px;
    color:white;
    font-weight: 500;
    font-variant-caps: all-small-caps;
     font-size: 4rem;
`;
const Img = styled.img`
    width:100%;
`;