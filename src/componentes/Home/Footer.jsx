import styled from "styled-components";

const Footer = () => {
    return (
        <Container>
            <FooterDiv>
                <Heading>Company info</Heading>
                <ListItem>About Us</ListItem>
                <ListItem>Latest Posts</ListItem>
                <ListItem>Contact Us</ListItem>
                <ListItem>Shop</ListItem>
                <ListItem></ListItem>
            </FooterDiv>
            <FooterDiv>
                <Heading>help links</Heading>
                <ListItem>Tracking</ListItem>
                <ListItem>Order Status</ListItem>
                <ListItem>Delivery</ListItem>
                <ListItem>Shipping Info</ListItem>
                <ListItem>FAQ</ListItem>
            </FooterDiv>
            <FooterDiv>
                <Heading>useful links</Heading>
                <ListItem>Special Offers</ListItem>
                <ListItem>Gift Cards</ListItem>
                <ListItem>Advetising</ListItem>
                <ListItem>Terms of Use</ListItem>
            </FooterDiv>
            <FooterDiv>
                <Heading>get in the know</Heading>
                <ContactEmail type="email" placeholder="Enter email"></ContactEmail>
                <hr></hr>
            </FooterDiv>
        </Container>
    )
}

export default Footer;
const Container = styled.section`
    background-color:rgb( 251, 251, 251);
    display:flex;
    justify-content:space-around;
    padding-top:1em;
    margin-top:5em;
    padding-bottom:3em;
    
`;
const FooterDiv = styled.div`
    hr{
        font-weight: bold;
    }
`;
const ListItem = styled.li`
    list-style-type:none;
    line-height:1.5em;
    letter-spacing: 0.05em;
    &:hover{
        cursor:pointer;
        color:rgb(3, 78, 110);

    }

`;
const Heading = styled.h3``;
const ContactEmail = styled.input`
    border:none;
    outline:none;
    padding:0.5em;
`;