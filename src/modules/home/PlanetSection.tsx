import React from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

const fadeLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 }
};

const buttonHover = {
  hover: {
    scale: 1.05,
    color: '#000000',
    backgroundColor: '#ffffff',
    transition: {
      duration: 0.2
    }
  }
}

const planetVariant = {
  hover: {
    scale: 1.07,
    cursor: 'pointer',
    transition: {
      duration: 0.7,
      yoyo: Infinity
    }
  },
  initial: {
    opacity: 1,
    x: 0
  },
  rotateLeft: {
    rotate: -360, cursor: 'pointer', transition: { duration: 32, loop: Infinity, ease: 'linear' }
  },
  rotateRight: {
    rotate: 360, cursor: 'pointer', transition: { duration: 20, loop: Infinity, ease: 'linear' }
  }
}

const PlanetSection: React.FC = () => {

  return (
    <Section>
      <Container>
        <ColumnLeft>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Web 技術線上分享會
          </motion.h1>
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            每週精彩的線上技術分享，主題包含 Web 前後端
            、雲端架構、DevOps，其中以後端工程技術為主，讓我們用技術轉動世界。
          </motion.h3>
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            每週六 9:30 PM @Discord
          </motion.h3>
          <motion.p
            variants={fadeLeft}
            initial='hidden'
            animate='visible'
            transition={{ duration: 1 }}
          >
            {`BESG </>`}
          </motion.p>
          <Button
            variants={buttonHover}
            whileHover='hover'
            whileTap={{
              scale: 0.95,
              backgroundColor: '#67F6E7',
              border: 'none',
              color: '#000'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1.5 } }}
          >
            Join Our Discord ☺️
          </Button>
        </ColumnLeft>
        <ColumnRight>
          <Image
            src={'/planet.svg'}
            alt='planet'
            whileTap={{ scale: 0.9 }}
            drag={true}
            dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
            initial='initial'
            animate='rotateLeft'
            variants={planetVariant}
            whileHover='hover'
          />
          <Image
            src={'/planet-2.svg'}
            alt='planet'
            whileTap={{ scale: 0.6 }}
            drag={true}
            dragConstraints={{ left: -200, right: 0, top: 0, bottom: 50 }}
            initial='initial'
            animate='rotateRight'
            variants={planetVariant}
            whileHover='hover'
          />
          <Image
            src={'/planet-3.svg'}
            alt='planet'
            whileTap={{ scale: 0.8 }}
            drag={true}
            dragConstraints={{ left: -30, right: 250, top: 0, bottom: 50 }}
            initial='initial'
            animate='rotateRight'
            variants={planetVariant}
            whileHover='hover'
          />
          <Image
            src={'/planet-4.svg'}
            alt='planet'
            whileTap={{ scale: 0.9 }}
            drag={true}
            dragConstraints={{ left: -100, right: 0, top: 0, bottom: 0 }}
            initial='initial'
            animate='rotateLeft'
            variants={planetVariant}
            whileHover='hover'
          />
        </ColumnRight>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background: ${props => props.theme.backgroundBlack};
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 90vh;
  padding: 3rem calc((100vw - 1300px) / 2);

  @media screen and (max-width: 768px) {
    grid-grid-template-columns: 1fr;
  }
  ${props => props.theme.mobileS && css`
    
  `}
`;

const ColumnLeft = styled.div`
  display: flex;
  color: #fff;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 5rem 2rem;

  h1 {
    margin-bottom: 0.5rem;
    font-size: 2rem;
  }

  p {
    margin: 2rem 0;
    font-size: 4rem;
    line-height: 1.1;
  }
`;

const Button = styled(motion.button)`
  padding: 1rem 3rem;
  font-size: 1rem;
  border: 2px solid #fff;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  background: transparent;
  color: #fff;
`;

const Image = styled(motion.img)`
  position: absolute;
  width: 100%;
  height: 100%;
  max-width: 250px;
  max-height: 250px;
`;

const ColumnRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  position: relative;

  ${Image}:nth-child(1) {
    top: 70px;
    left: 10px;
    z-index: 1;
  }

  ${Image}:nth-child(2) {
    top: 179px;
    right: 50px;
    z-index: 2;
  }

  ${Image}:nth-child(3) {
    top: 400px;
    left: 50px;
  }

  ${Image}:nth-child(4) {
    bottom: 50px;
    right: 75px;
    z-index: 3;
  }
`;

export default PlanetSection;
