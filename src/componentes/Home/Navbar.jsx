import styled from "styled-components";
import { FaUser } from "react-icons/fa";
import { RiShoppingBag3Line } from "react-icons/ri";
import { TiThMenu } from "react-icons/ti";
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <Container>
            <Title>NorthStar</Title>
            <Menu>
                <UnorderList>
                    <Listitem><Link to="/">HOME</Link></Listitem>
                    <Listitem><Link to="/ABOUT">ABOUT</Link ></Listitem>
                    <Listitem><Link to="/CONTACT US">CONTACT US</Link></Listitem>
                </UnorderList>
            </Menu>
            <MenuIcons>
                <span><FaUser /></span>
                <span><RiShoppingBag3Line/></span>
                <span><TiThMenu/></span>
            </MenuIcons>
        </Container>
    )
}


export default Navbar;

const Container = styled.section`
    
    display:flex;
    align-items: center;
    justify-content: space-between;
    font-size:1em;
    

`;
const Title = styled.h1`
    cursor:pointer;
    padding-left:2em;
    font-size:em;
`;
const Menu = styled.div``;
const UnorderList = styled.ul`
    display: flex;
    gap: 50px;
    padding: 0;  /* Ensures no extra padding */
    margin: 0;   /* Prevents unwanted shifting */
    list-style: none;  /* Removes default bullet styling */
`;

const Listitem = styled.li`
    list-style-type: none;
    cursor: pointer;
    font-variant: small-caps slashed-zero;
    display: flex;  /* Ensures consistent alignment */
    align-items: center;
    
    &:hover {
        color: rgb(3, 78, 110);
    }
    
    a {  
        text-decoration: none;  /* Removes underline from links */
        color: inherit;  /* Inherits text color */
        display: inline-block;
        padding: 5px 10px;  /* Adds padding to balance spacing */
    }
`;

const MenuIcons = styled.div`
    padding-right:2em;
    display:flex;
    gap:25px;
    span{
        
        cursor:pointer;
    }
`;