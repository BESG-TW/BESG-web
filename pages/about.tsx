import styled from 'styled-components';

export default function About() {
  return (
    <Wrapper>
      <img src="/coming-soon.jpeg" />
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
