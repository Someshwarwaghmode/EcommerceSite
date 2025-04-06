import React from 'react';
import styled from 'styled-components';
import { ChevronDown } from 'lucide-react';
import { IoChevronBack } from "react-icons/io5";

const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  background-color: white;
  padding: 16px;
  font-family: 'Arial', sans-serif;
  min-height: 100vh;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 24px;
`;

const BackArrow = styled.span`
  font-size: 24px;
  cursor: pointer;
`;

const Item = styled.div`
  border-bottom: 1px solid #eee;
  padding-bottom: 16px;
  margin-bottom: 16px;
`;

const DueRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  color: #333;
`;

const Amount = styled.p`
  margin-top: 4px;
  font-size: 14px;
  color: #666;
`;

const repaymentData = [
  { date: "05 Apr '25", amount: "₹1,034.91" },
  { date: "05 May '25", amount: "₹1,003.63" },
  { date: "05 Jun '25", amount: "₹1,003.63" },
  { date: "05 Jul '25", amount: "₹1,003.70" },
  { date: "05 Aug '25", amount: "₹1,003.70" },
  { date: "05 Sep '25", amount: "₹654.39" },
  { date: "05 Oct '25", amount: "₹652.38" },
];

const RepaymentSchedule = () => {
  return (
    <Container>
      <Header>
        <BackArrow><IoChevronBack /></BackArrow>
        Repayment schedule
      </Header>

      {repaymentData.map((item, index) => (
        <Item key={index}>
          <DueRow>
            <span>Due on {item.date}</span>
            <ChevronDown size={20} color="#666" />
          </DueRow>
          <Amount>{item.amount}</Amount>
        </Item>
      ))}
    </Container>
  );
};

export default RepaymentSchedule;
