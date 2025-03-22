import styled from "styled-components"
import CopyRight from "../Home/CopyRight";
import Footer from "../Home/Footer";
import ContactForm from "./ContactForm";
import ContactHero from "./ContactHero"

const ContactPage = () =>{
    return(
        <Container>
            <ContactHero/>
            <ContactForm/>
            <Footer/>
            <CopyRight/>
        </Container>
    )
}
export default ContactPage;
const Container = styled.section`
    margin-top:4em;
`;