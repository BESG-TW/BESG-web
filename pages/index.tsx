import styled from 'styled-components';

import PlanetSection from '@/modules/home/PlanetSection';

export default function Home() {

  return (
    <Wrapper>
      <PlanetSection />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: 100vh;
  padding: 0 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: ${props => props.theme.red};
`