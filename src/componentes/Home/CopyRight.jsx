import styled from "styled-components";

const CopyRight = () => {
    return (
        <Container>
            <hr></hr>
            <Content>
                <TextContent>
                    <P>&copy;2020 NorthStar eCommerce</P>
                    <P>Privacy Policy Terms & Conditions</P>
                </TextContent>
                <Icons>
                    <img src="./img/Rectangle 13.png"></img>
                    <img src="./img/Rectangle 14.png"></img>
                    <img src="./img/Rectangle 15.png"></img>
                    <img src="./img/Rectangle 16.png"></img>
                </Icons>
            </Content>
        </Container>
    )
}

export default CopyRight;
const Container = styled.section`
    background-color:rgb( 251, 251, 251);
    hr{
        margin: 10px 50px 20px;
    }
`;
const Content = styled.div`
    margin: 10px 50px 20px;
    display:flex;
    justify-content:center;
    justify-content: space-between;
    align-items:center;
`;
const TextContent = styled.div``;
const P = styled.p``;
const Icons = styled.div`
    img{
        padding:10px;
        font-size:2em;
    }
`;
