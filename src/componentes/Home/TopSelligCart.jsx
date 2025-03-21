import styled from "styled-components";

const TopSelligCart = () =>{
    return(
        <Container>
            <CartContainer>
                <CartPic><Img src="./img/img_2.png"></Img><H4>Plain White Shirt</H4><Span>$29.00</Span></CartPic>
                <CartPic><Img src="./img/img_3.png"></Img><H4>Denim Jacket </H4><Span>$69.00</Span></CartPic>
                <CartPic><Img src="./img/img_4.png"></Img><H4>Black Polo Shirt</H4><Span>$49.00</Span></CartPic>
                <CartPic><Img src="./img/img_5.png"></Img><H4>Blue Sweatshirt</H4><Span>$79.00</Span></CartPic>
            </CartContainer>
            <Button>shop now</Button>
        </Container>
    )
}

export default TopSelligCart;
const Container = styled.section`
    display:flex;
    flex-direction: column;
    align-items: center;
`;
const CartContainer = styled.div`
    display:flex;
    
`;
const CartPic = styled.div`
    padding:2em;
    display:flex;
    flex-direction: column;
    align-items: center;
    line-height: 0.001px;
`;
const Img = styled.img`
    cursor:pointer;
`;
const H4 = styled.h4`
    font-weight: 800;
    font-family: sans-serif;
`;
const Span = styled.span`
    line-height: 1em;
    &:hover{
        cursor:pointer;
        color:rgb(2, 92, 130)
    }
`;
const Button = styled.button`
    text-transform: uppercase;
    background-color:rgb(2, 92, 130);
    padding:1em 2em 1em 2em;
    cursor:pointer;
    border:none;
    &:hover{
        color:white;
    }
`;