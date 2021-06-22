import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const MobileHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Container>
        <Link href="/">
          <Logo src="/besg.png" />
        </Link>
        <div onClick={() => setIsMenuOpen(true)}>
          <StyledImage src="/menu.jpeg" alt="menu" width={50} height={50} />
        </div>
      </Container>
      <AnimatePresence>
        {isMenuOpen && (
          <MenuContainer
            initial={{ left: '100vw' }}
            animate={{ left: 0 }}
            exit={{ left: '100vw' }}
          >
            <MenuToggleBtn onClick={() => setIsMenuOpen(false)}>
              X
            </MenuToggleBtn>
            <MenuItemsWrapper>
              <MenuItem>本週 Session</MenuItem>
              <MenuItem>分享列表</MenuItem>
              <MenuItem>聯絡我們</MenuItem>
            </MenuItemsWrapper>
          </MenuContainer>
        )}
      </AnimatePresence>
    </>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
  z-index: 99;
  color: ${(props) => props.theme.backgroundWhite};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px -10px 0 10px;
  overflow: hidden;
`;

const Logo = styled.img`
  width: 59px;
  height: 59px;
  cursor: pointer;
  margin-left: 20px;
`;

const StyledImage = styled.img`
  width: 50px;
  width: 50px;
  cursor: pointer;
  margin-right: 20px;
`;

const MenuContainer = styled(motion.div)`
  display: flex;
  position: fixed;
  z-index: 99;
`;

const MenuToggleBtn = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.backgroundWhite};
  background: #2e2c2c;
  cursor: pointer;
  font-size: 24px;
  font-weight: 800;
`;

const MenuItemsWrapper = styled.div`
  width: calc(100vw-50px);
  height: 100vh;
  background: #2e2c2c;
`;

const MenuItem = styled.div`
  width: 100vw;
  height: 60px;
  background: ${(props) => props.theme.backgroundWhite};
`;

export default MobileHeader;
