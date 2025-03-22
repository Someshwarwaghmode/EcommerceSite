import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MsgSubmit = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <Message>Your message has been sent successfully! 🎉</Message>
            <BackButton onClick={() => navigate("/")}>Go Back</BackButton>
        </Container>
    );
};

export default MsgSubmit;

// Styled Components
const Container = styled.div`
    text-align: center;
    padding: 50px;
`;

const Message = styled.h2`
    color: green;
`;

const BackButton = styled.button`
    margin-top: 20px;
    padding: 10px;
    background-color: blue;
    color: white;
    border: none;
    cursor: pointer;
    &:hover {
        background-color: white;
        color: blue;
        border: 2px solid blue;
    }
`;
