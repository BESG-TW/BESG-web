import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Link from 'next/link';

import { buttonHover } from '@/modules/home/PlanetSection/variants';

const Header: React.FC = () => {

  return (
    <Container>
      <Link href='/'>
        <Logo src='/besg.png'/>
      </Link>
      <LinkWrapper>
        <Link href='/latestSession'>
          <LinkItem 
            variants={buttonHover} 
            whileHover='hover'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            >本週 Session</LinkItem>
        </Link>
        <Link href='/sharingList'>
          <LinkItem 
            variants={buttonHover} 
            whileHover='hover'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}>分享列表</LinkItem>
        </Link>
        <Link href='/contact'>
          <LinkItem 
            variants={buttonHover} 
            whileHover='hover'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}>聯絡我們</LinkItem>
        </Link>
      </LinkWrapper>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
  z-index: 99;
  color: ${props => props.theme.backgroundWhite};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 50px 0 50px;
`
const Logo = styled.img`
  width: 90px;
  height: 90px;
  cursor: pointer;
  
`

const LinkWrapper = styled.div`
  display: flex;
  height: 100%;
  margin-right: 150px;
  align-items: center;
  
`

const LinkItem = styled(motion.div)`
  display: flex;
  align-items: center;
  padding: 0 35px;
  cursor: pointer;
  margin-left: 10px;
  border-radius: 20px;
  height: 60%;
`

export default Header;