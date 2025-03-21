import styled from "styled-components";

const Promo = () => {
    return (
        <Container>
            <PromoContent>
                <Title>peace of mind</Title>
                <Summary>A one-stop platform for all your fashion needs,<br></br> hassle-free. Buy with a peace of mind.</Summary>
                <Button>buy now</Button>
            </PromoContent>
            <PromoContent>
                <Title>Buy 2 Get 1 Free</Title>
                <Summary>End of season sale. Buy any 2 items of your choice and get 1 free.</Summary>
                <Button>buy now</Button>
            </PromoContent>
        </Container>
    )
}
export default Promo;
const Container = styled.section`
    display:flex;
    justify-content:center;
    justify-content:space-around;
    padding-top:2em;
    padding-bottom:2em;
`;
const PromoContent = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    color:white;
    background-color:black;
    padding:5em;
    width:29em;
`;
const Title = styled.h1`
    text-transform: uppercase;
`;
const Summary = styled.p`
    text-align: center;
    width:20em;
`;
const Button = styled.button`
    margin-top:1em;
    color:rgb(3, 78, 110);
    text-transform: uppercase;
    padding:1em 2em 1em 2em;
    cursor:pointer;
    &:hover{
        color:black;
    }
`;