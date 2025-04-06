// StatusBar.jsx
import React from 'react';
import styled from 'styled-components';
import { FaSnapchatGhost, FaBellSlash, FaBatteryQuarter } from 'react-icons/fa';
import { IoMdTime } from 'react-icons/io';
import { MdNetworkCell } from 'react-icons/md';
import { BsVolumeMute } from 'react-icons/bs';
import { TbArrowUp } from 'react-icons/tb';
import { BsAlarmFill } from "react-icons/bs";
import { GiNetworkBars } from "react-icons/gi";


const StatusBarContainer = styled.div`
  width: 100%;
  padding: 8px 16px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: white;
  font-family: Arial, sans-serif;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 18px;
    position: relative;
    right: -250px;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 16px;
   position: relative;
    left: -250px;
`;

const SmallText = styled.span`
  font-size: 12px;
`;

const BatteryContainer = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid black;
  border-radius: 4px;
  padding: 2px 6px;
  font-size: 12px;
`;

const StatusBar = () => {
  return (
    <StatusBarContainer>
      <LeftSection>
        <span>10:24</span>
        <FaSnapchatGhost />
      </LeftSection>

      <RightSection>
        <BsAlarmFill />
        <FaBellSlash />
        <SmallText>4.00</SmallText>
        <SmallText>KB/S</SmallText>
        <SmallText>Vo</SmallText>
        <SmallText>LTE</SmallText>
        <TbArrowUp size={10} />
        <GiNetworkBars />
        <BatteryContainer>3</BatteryContainer>
        <FaBatteryQuarter />
      </RightSection>
    </StatusBarContainer>
  );
};

export default StatusBar;