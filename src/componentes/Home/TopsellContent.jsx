import styled from "styled-components";
const TopsellContent = () => {
    return(
        <Container>
            <Title>Top Sellers</Title>
            <Paregraph>Browse our top-selling products</Paregraph>
        </Container>
    )
}
 export default TopsellContent;
 const Container = styled.div`
    padding:3em 0em 0em 0em;
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
