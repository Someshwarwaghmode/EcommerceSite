import styled from "styled-components";

const CovertPhoto = () => {
    return (
        <Container>
            <CoverImg src="./img/img_1.png" />
            <Content>
                <Title>stylist picks beat <br /> the heat</Title>
                <Button>Shop Now</Button>
            </Content>
        </Container>
    );
};

export default CovertPhoto;

const Container = styled.section`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh; 
`;

const CoverImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Content = styled.div`
    position: absolute;
    text-align: center; 
    color: white;
`;

const Title = styled.h1`
    font-size: 50px;
    font-weight: 5em;
    font-size: 90px;
    position: relative;
    left: 390px;
    bottom:20px;
    font-style: italic;
    
`;

const Button = styled.button`
    margin-top: 20px;
    font-size: 20px;
    padding: 10px;
    background-color: transparent;
    color: white;
    border: 3px solid white;
    cursor: pointer;
    position: relative;
    left: 390px;
    bottom:90px;
    
    &:hover {
        border: 3px solid white;
        box-shadow: 3px 3px red, .5em 0 .4em pink;
    }
`;
