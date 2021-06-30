import { NextPageContext } from 'next';
import styled from 'styled-components';

import { fetchLatestSession } from '@/utils/fetchData';

export default function SharingListHome() {
  return (
    <Wrapper>
      <img src="/coming-soon.jpeg" />
    </Wrapper>
  );
}

export async function getServerSideProps(context: NextPageContext) {
  const latestSesstion = await fetchLatestSession();

  return {
    props: {}, // will be passed to the page component as props
  };
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
