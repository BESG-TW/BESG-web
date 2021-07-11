import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fadeIn, fadeLeft, buttonHover } from '@/constants/variants/motion';
import { DISCORD_INVITATION_LINK } from '@/constants';

import { planetVariant } from './variants';

const PlanetSection: React.FC = () => {
  return (
    <Section>
      <Container>
        <ColumnLeft>
          <motion.h1 variants={fadeIn} initial="hidden" animate="visible">
            Web 線上技術分享會
          </motion.h1>
          <motion.h3 variants={fadeIn} initial="hidden" animate="visible">
            每週精彩的線上技術分享，主題包含 Web 前後端
            、雲端架構、DevOps，其中以後端工程技術為主，讓我們用技術轉動世界。
          </motion.h3>
          <motion.h3 variants={fadeIn} initial="hidden" animate="visible">
            每週六 9:30 PM @Discord
          </motion.h3>
          <TitleWrapper>
            <motion.p
              variants={fadeLeft}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1 }}
            >
              BESG
            </motion.p>
            <Logo
              src="/besg.png"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
          </TitleWrapper>
          <Button
            variants={buttonHover}
            whileHover="hover"
            whileTap={{
              color: '#000',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1.5 } }}
            href={DISCORD_INVITATION_LINK}
            target="_blank"
          >
            Join Our Discord 🚀
          </Button>
        </ColumnLeft>
        <ColumnRight>
          <Image
            src={'/planet.svg'}
            alt="planet"
            whileTap={{ scale: 0.9 }}
            drag={true}
            dragConstraints={{ left: 30, right: 250, top: 50, bottom: 50 }}
            initial="initial"
            animate="rotateLeft"
            variants={planetVariant}
            whileHover="hover"
          />
          <Image
            src={'/planet-2.svg'}
            alt="planet"
            whileTap={{ scale: 0.6 }}
            drag={true}
            dragConstraints={{ left: -200, right: -50, top: -50, bottom: 50 }}
            initial="initial"
            animate="rotateRight"
            variants={planetVariant}
            whileHover="hover"
          />
          <Image
            src={'/planet-3.svg'}
            alt="planet"
            whileTap={{ scale: 0.8 }}
            drag={true}
            dragConstraints={{ left: -30, right: 250, top: 100, bottom: 50 }}
            initial="initial"
            animate="rotateRight"
            variants={planetVariant}
            whileHover="hover"
          />
          <Image
            src={'/planet-4.svg'}
            alt="planet"
            whileTap={{ scale: 0.9 }}
            drag={true}
            dragConstraints={{ left: -100, right: 50, top: -100, bottom: 0 }}
            initial="initial"
            animate="rotateLeft"
            variants={planetVariant}
            whileHover="hover"
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
  background: ${(props) => props.theme.backgroundBlack};
  margin-top: 30px;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 90vh;
  padding: 3rem calc((100vw - 1300px) / 2);

  ${(props) => props.theme.tablet`
    display: flex;
    max-width: 100vw;
  `}
`;

const ColumnLeft = styled.div`
  display: flex;
  color: #fff;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 5rem 2rem 5rem 5rem;

  h1 {
    margin-bottom: 0.5rem;
    font-size: 2rem;
  }

  p {
    margin: 2rem 0;
    font-size: 4rem;
    line-height: 1.1;
  }

  ${(props) => props.theme.tablet`
    z-index: 99;
    padding: 5rem 2rem 5rem 2rem;
  `}
`;

const Button = styled(motion.a)`
  padding: 1rem 3rem;
  font-size: 1.1rem;
  border: 2px solid ${(props) => props.theme.backgroundWhite};
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  background: transparent;
  color: ${(props) => props.theme.backgroundWhite};
  text-decoration: none;
  font-weight: 500;

  ${(props) => props.theme.tablet`
    padding: 1rem 1rem;
    font-size: 1rem;
  `}
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

  ${(props) => props.theme.tablet`
    position: absolute;
    width: 100vw;
    height: 100vh;
    padding: 0;
  `}
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled(motion.img)`
  width: 70px;
  height: 70px;
`;

export default PlanetSection;
