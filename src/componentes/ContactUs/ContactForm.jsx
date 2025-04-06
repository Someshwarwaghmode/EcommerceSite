import styled from "styled-components";
import { useRef, useState } from "react";


const ContactForm = () => {
    const formRef = useRef(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [messege, setMessege] = useState("");
    const handleClick = () => {
        console.log(name);
        console.log(email);
        console.log(messege);
        if(name=="" || email=="" || messege==""){
            alert("First Fill the Information");
        }
        else if(!email.includes("@")) {
            alert("Invalid email. Please include '@' in your email address.");
            return;
        }
        else {
            alert("Message sent. We’ll contact you soon.");
        }

        if (formRef.current) {
            formRef.current.reset();
        }
        fetch("http://localhost:5000/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, message: messege }),
          })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.error("❌ Error:", err));
          
        setName("");
        setEmail("");
        setMessege("");
    };
    return (
        <Container>
            <ContactFormInfo>
                <Heading>We would love to hear from you.</Heading>
                <HP>If you have any query or any type of suggestion, you can contact us here. We would love to hear from you.</HP>
                <FORM ref={formRef}>
                    <NameAndEmail>
                        <span>
                            <Label>Name</Label><br></br>
                            <Input placeholder="Enter Your Name" type="text" value={name} onChange={(e) => setName(e.target.value)} ></Input>
                            <br></br>
                        </span>
                        <span>
                            <Label>Email</Label><br></br>
                            <Input placeholder="Enter Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}></Input>
                        </span>
                    </NameAndEmail>
                    <MsgLabel>Message</MsgLabel><br></br>
                    <TextArea id="story" name="story" rows="5" cols="33" placeholder="Feel Free to contact us plz don't Hezitate" value={messege} onChange={(e) => setMessege(e.target.value)}>

                    </TextArea>
                </FORM>
                <Button onClick={handleClick}>Send Message</Button>
            </ContactFormInfo>


            <ContactInfo >
                <VisitUs>
                    <H>Visit Us</H>
                    <P>Tq.Parli, destrict.Beed, Maharastra-431128</P>
                    <P>Phone: +917666473300</P>
                </VisitUs>
                <GetInTouch>
                    <H>Get In Touch</H>
                    <P>You can get in touch with us on this provided email. </P>
                    <P>Email: someshwarwaghmode222@gmail.com</P>
                </GetInTouch>
            </ContactInfo>
        </Container>
    )
}

export default ContactForm;
const Container = styled.section`
    display: flex;
    justify-content: space-around;
    margin-top:3em;

`;
const ContactFormInfo = styled.div``;
const Heading = styled.h1``;
const HP = styled.p`
    margin-top:2em;
`;
const FORM = styled.form`
    margin-top:2em;
    display: flex;
    flex-direction: column;
`;
const Input = styled.input`
    padding:0.5em;
    width:20em;
`;
const Label = styled.label`
    margin-top:2em;
`;
const ContactInfo = styled.section``;
const NameAndEmail = styled.div`
    display: flex;
    gap:2em;
`;
const TextArea = styled.textarea`
    padding:0.5em;
    width:43.6em;
    height:12em;
`;
const MsgLabel = styled.label`
    margin-top:2em;
`;
const VisitUs = styled.div``;
const H = styled.h2``;
const P = styled.p``;
const GetInTouch = styled.div``;
const Button = styled.button`
    margin-top:1em;
    background-color:blue;
    padding:0.5em;
    border:2px solid black;
    border-radius: 5px;
    &:hover{
        background-color:white;
        cursor: pointer;
        color:blue;
    }
`;