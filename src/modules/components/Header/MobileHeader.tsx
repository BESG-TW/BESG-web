import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const MobileHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <MobileContainer>
        <Link href="/">
          <Logo src="/besg.png" />
        </Link>
        <div onClick={() => setIsMenuOpen(true)}>
          <StyledImage src="/menu.jpeg" alt="menu" width={50} height={50} />
        </div>
      </MobileContainer>
      <AnimatePresence>
        {isMenuOpen && (
          <MenuContainer
            initial={{ left: '100vw' }}
            animate={{ left: 0 }}
            exit={{ left: '100vw' }}
            transition={{ type: 'linear' }}
          >
            <MenuToggleBtn onClick={() => setIsMenuOpen(false)}>
              X
            </MenuToggleBtn>
            <MenuItemsWrapper>
              <Link href="/about">
                <MenuItem>關於 BESG 🚀</MenuItem>
              </Link>
              <Link href="/sharingList">
                <MenuItem>分享列表 Session List 🔥</MenuItem>
              </Link>
              <Link href="/contact">
                <MenuItem>聯絡我們 🎃</MenuItem>
              </Link>
              <LogoWrapper>
                <Logo src="/besg.png" size={180} />
              </LogoWrapper>
            </MenuItemsWrapper>
          </MenuContainer>
        )}
      </AnimatePresence>
    </>
  );
};

const MobileContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 70px;
  z-index: 99;
  color: ${(props) => props.theme.backgroundWhite};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 10px 0 10px;
`;

const Logo = styled.img<{ size?: number }>`
  width: ${(props) => props.size ?? 59}px;
  height: ${(props) => props.size ?? 59}px;
  cursor: pointer;
`;

const LogoWrapper = styled.div`
  height: calc(100% - 180px);
  display: flex;
  justify-content: center;
  align-items: center;
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
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  justify-content: flex-end;
`;

const MenuToggleBtn = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.borderDarkGray};
  background: ${(props) => props.theme.backgroundWhite};
  cursor: pointer;
  font-size: 24px;
  font-weight: 800;
  border-right: solid 3px ${(props) => props.theme.borderDarkGray};
`;

const MenuItemsWrapper = styled.div`
  height: 100vh;
  background: ${(props) => props.theme.backgroundWhite};
`;

const MenuItem = styled.div`
  width: calc(100vw - 60px);
  height: 60px;
  background: ${(props) => props.theme.backgroundWhite};
  border-bottom: solid 1px ${(props) => props.theme.borderLightGray};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export default MobileHeader;
