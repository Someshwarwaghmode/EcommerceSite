import styled from "styled-components"

const FounderInformation = () =>{
    return(
        <Container>
            <Content>
            The Founders
            </Content>
            <FounderImg>
                <Founder>
                    <Image src="./img/Founder1.png"/>
                    <Name>HM Jawad</Name>
                </Founder>
                <Founder>
                    <Image src="./img/Founder2.png"/>
                    <Name>Furqan Abid</Name>
                </Founder>
                <Founder>
                    <Image src="./img/Founder3.png"/>
                    <Name>Abdullah Ah</Name>
                </Founder>
                <Founder>
                    <Image src="./img/Founder4.png"/>
                    <Name>Abrar Khan</Name>
                </Founder>
            </FounderImg>
        </Container>
    )
}

export default FounderInformation

const Container = styled.section`
    text-align:center;
`;
const Content = styled.h1`
    text-align:center;
    text-transform: uppercase;
`;
const FounderImg = styled.div`
    display:flex;
    justify-content: center;
    margin-top:3em;
`;
const Image = styled.img`
    padding:2em;
`;
const Founder = styled.div``;
const Name = styled.h3`
    margin-top:-1em;
    &:hover{
        cursor: pointer;
        color:grey
    }
`;