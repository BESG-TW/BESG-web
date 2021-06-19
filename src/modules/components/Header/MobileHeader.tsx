import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

import { buttonHover } from '@/modules/home/PlanetSection/variants';

const MobileHeader: React.FC = () => {

  return (
    <Container>
      <Link href='/'>
        <Logo src='/besg.png'/>
      </Link>
      <StyledImage src='/menu.jpeg' alt='menu' width={50} height={50} />
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
  padding: 10px -10px 0 10px;
  overflow: hidden;
`
const Logo = styled.img`
  width: 59px;
  height: 59px;
  cursor: pointer;
  margin-left: 10px;
`

const StyledImage = styled.img`
  width: 50px;
  width: 50px;
  cursor: pointer;
  margin-right: 10px;
`

export default MobileHeader;