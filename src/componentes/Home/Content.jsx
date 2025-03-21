import styled from "styled-components";
const Content = () => {
    return(
        <Container>
            <Title>Discover NEW Arrivals</Title>
            <Paregraph>Recently added shirts!</Paregraph>
        </Container>
    )
}
 export default Content;
 const Container = styled.div`
    padding:4em 0em 0em 0em;
    display:flex;
    flex-direction: column;
    align-items: center;
    line-height: .1em;
 `;
const Title = styled.h1`
    font-weight: 900;
`;
const Paregraph = styled.p`
    
`;
