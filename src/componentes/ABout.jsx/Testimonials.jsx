import styled from "styled-components";

const Testimonials = () => {
    return (
        <Container>
            <Heading>Testimonials</Heading>
            <TestimonialsContent>
                <Testimonials1>
                    <Img src="./img/Testimonials1.png" />
                    <Content>
                    <Icon>"</Icon>
                    <P>Once we ordered some accessories items and we got the products delivered in our doorstep, the customer support was super helpful and they answered all my queries.</P>
                    <Name>Shubham</Name>
                    </Content>
                </Testimonials1>
                <Testimonials1>
                    <Img src="./img/Testimonials2.png" />
                    <Content>
                    <Icon>"</Icon>
                    <P>Once we ordered some accessories items and we got the products delivered in our doorstep, the customer support was super helpful and they answered all my queries.</P>
                    <Name>Neha</Name>
                    </Content>
                </Testimonials1>
                <Testimonials1>
                    <Img src="./img/Testimonials3.png" />
                    <Content>
                    <Icon>"</Icon>
                    <P>Once we ordered some accessories items and we got the products delivered in our doorstep, the customer support was super helpful and they answered all my queries.</P>
                    <Name>Manasvi</Name>
                    </Content>
                </Testimonials1>
            </TestimonialsContent>
        </Container>
    )
}
export default Testimonials;

const Container = styled.section`
    margin-top:3em;
`;

const Heading = styled.h1`
    text-align:center;
    text-transform:uppercase; 
`;
const TestimonialsContent = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    gap:2em;
    padding:2em;
    margin-left:20em;
    margin-top:2em;
`;
const Testimonials1 = styled.div`
      display:flex;
`;
const Img = styled.img``;
const Icon = styled.div`
    font-weight: 900;
    font-size:2em;
`;
const Content = styled.p`
    margin-left:5em;
    width:40%;
`;
const Name = styled.p``;
const P = styled.p``;
