import styled from "styled-components";

const ContactForm = () => {
    return (
        <Container>
            <ContactFormInfo>
                <Heading>We would love to hear from you.</Heading>
                <HP>If you have any query or any type of suggestion, you can contact us here. We would love to hear from you.</HP>
                <FORM>
                    <NameAndEmail>
                        <span>
                        <Label>Name</Label><br></br>
                        <Input type="text"></Input>
                        <br></br>
                        </span>
                        <span>
                        <Label>Email</Label><br></br>
                        <Input type="email"></Input>
                        </span>
                    </NameAndEmail>
                    <MsgLabel id="story" name="story" rows="5" cols="33">Message</MsgLabel><br></br>
                    <TextArea>

                    </TextArea>
                </FORM>
                <Button>Send Message</Button>
            </ContactFormInfo>
            

            <ContactInfo >
                <VisitUs>
                    <H>Visit Us</H>
                    <P>UET Lahore, Punjab, Pakistan</P>
                    <P>Phone: +923039898987</P>
                </VisitUs>
                <GetInTouch>
                    <H>Get In Touch</H>
                    <P>You can get in touch with us on this provided email. </P>
                    <P>Email: hmjawad087@gmail.com</P>
                </GetInTouch>
            </ContactInfo>
        </Container>
    )
}

export default ContactForm;
const Container = styled.section`
    display: flex;

`;
const ContactFormInfo = styled.div``;
const Heading = styled.h1``;
const HP = styled.p``;
const FORM = styled.form``;
const Input = styled.input``;
const Label = styled.label``;
const ContactInfo = styled.section``;
const NameAndEmail = styled.div`
    display: flex;
    gap:2em;
`;
const TextArea = styled.textarea``;
const MsgLabel = styled.label``;
const VisitUs = styled.div``;
const H = styled.h2``;
const P = styled.p``;
const GetInTouch = styled.div``;
const Button = styled.button``;