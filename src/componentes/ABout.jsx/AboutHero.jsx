import styled from "styled-components";

const AboutHero =() =>{
    return (
        <Container>
            <HeroImg src="./img/ConHero.jpg"/>
            <HeroContent>About Northstar</HeroContent>
        </Container>
    )
}

export default AboutHero;
const Container = styled.section`

`;
const HeroImg = styled.img`
    width:100%;
`;
const HeroContent = styled.h1`
    text-transform: uppercase;
    position: absolute;
    top: 200px;
    left: 110px;
    color:white;
    font-weight: 500;
    font-variant-caps: all-small-caps;
     font-size: 4rem;
`;