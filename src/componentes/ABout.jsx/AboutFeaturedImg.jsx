import styled from "styled-components";

const AboutFeatuedImg = () =>{
    return(
        <Container>
            <Image src="./img/F.png"/>
            <Image src="./img/F1.png"/>
        </Container>
    )
}
export default AboutFeatuedImg;

const Container  = styled.section`
    display:flex;
    justify-content: center;
    justify-content: space-evenly;
    padding:5em;
`;

const Image = styled.img`
    :hover {

    }
`;