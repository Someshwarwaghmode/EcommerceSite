import styled from "styled-components"
import Content from "./Content"
import Navbar from "./Navbar"
import Benefit from "./Benefit"
import Footer from "./Footer"
import Promo from "./Promo"
import CopyRight from "./CopyRight"
import Cart from "./Cart"
import TopSelligCart from "./TopSelligCart"
import TopsellContent from "./TopsellContent"
import CovertPhoto from "./CovertPhoto"
//import './App.css'
function HomePage () {
  return (
    <Container>
      <CovertPhoto/>
      <Content/>
      <Cart/>
      <Cart/>
      <Cart/>
      <Cart/>
      <Benefit/>  
      <Promo/>
      <TopsellContent/>
      <TopSelligCart/>
      <Footer/>
      <CopyRight/>
    </Container>
  )
}

export default HomePage

const Container = styled.section``;