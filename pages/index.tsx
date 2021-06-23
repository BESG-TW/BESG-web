import { useEffect } from 'react';
import styled from 'styled-components';

import PlanetSection from '@/modules/home/PlanetSection/PlanetSection';

export default function Home() {
  useEffect(() => {
    fetch('/api/latestSession')
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <Wrapper>
      <PlanetSection />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100vh;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: ${(props) => props.theme.red};
  overflow: hidden;
`;
