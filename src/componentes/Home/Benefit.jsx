import styled from "styled-components";
import { FaShippingFast } from "react-icons/fa";
import { MdOutlineSupport } from "react-icons/md";
import { GiReturnArrow } from "react-icons/gi";
import { MdNoiseControlOff } from "react-icons/md";

const Benefit = () => {
    return (
        <Container>
            <ClipContent>
                <Icon><FaShippingFast/></Icon>
                <Content>
                    <span>Free Shipping</span>
                    <Paregraph>Enjoy free shipping on all <br></br> orders above $100</Paregraph>
                </Content>
            </ClipContent>
            <ClipContent>
                <Icon><MdOutlineSupport /></Icon>
                <Content>
                    <span>Free Shipping</span>
                    <Paregraph>Enjoy free shipping on all <br></br> orders above $100</Paregraph>
                </Content>
            </ClipContent>
            <ClipContent>
                <Icon><GiReturnArrow /></Icon>
                <Content>
                    <span>Free Shipping</span>
                    <Paregraph>Enjoy free shipping on all <br></br> orders above $100</Paregraph>
                </Content>
            </ClipContent>
            <ClipContent>
                <Icon><MdNoiseControlOff /></Icon>
                <Content>
                    <span>Free Shipping</span>
                    <Paregraph>Enjoy free shipping on all <br></br> orders above $100</Paregraph>
                </Content>
            </ClipContent>
        </Container>
    )
}
export default Benefit;

const Container = styled.section`
    display:flex;
    justify-content: center;
    justify-content: space-around;
    padding-top:2em;
    padding-bottom:2em;
`;
const ClipContent = styled.div`
    display:flex;
    align-items: start;
    gap:15px;
`;
const Icon = styled.span`
    font-size:1.5em;
    
   
`;
const Content = styled.div`
    span{
        font-weight: bold;
        text-transform: uppercase;
    }
`;
const Paregraph = styled.p`

`;