import styled from 'styled-components';

export default function Home() {

  return (
    <Wrapper>
      
      test
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: ${props => props.theme.red};
`