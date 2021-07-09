import Link from 'next/link';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { fetchLatestSession } from '@/utils/fetchData';
import { fadeIn, fadeLeft, buttonHover } from '@/constants/variants/motion';

type Props = {
  latestSession: {
    latestSession: {
      date: string;
      sharer: string;
      topic: string;
    };
  };
};

const seasons = [
  {
    id: 's3',
    name: 'Season 3',
  },
  {
    id: 's2',
    name: 'Season 2',
  },
  {
    id: 's1',
    name: 'Season 1',
  },
];

export default function SharingListHome(props: Props) {
  const { latestSession } = props;

  return (
    <Wrapper>
      <Container>
        <LatestHeader>
          <motion.h2 variants={fadeIn} initial="hidden" animate="visible">
            💡 本週主題
          </motion.h2>
          <div />
          <Date variants={fadeIn} initial="hidden" animate="visible">
            🗓 &nbsp;{latestSession.latestSession.date}
          </Date>
        </LatestHeader>
        <Title
          style={{ width: '100%', textAlign: 'center' }}
          variants={fadeLeft}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
        >
          {latestSession.latestSession.topic}
        </Title>
        <motion.h2 variants={fadeIn} initial="hidden" animate="visible">
          🎙 講者
        </motion.h2>
        <Title
          style={{ width: '100%', textAlign: 'center' }}
          variants={fadeLeft}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
        >
          {latestSession.latestSession.sharer}
        </Title>
      </Container>
      <Container>
        <motion.h2
          variants={fadeLeft}
          initial="hidden"
          animate="visible"
          transition={{ duration: 2 }}
        >
          💭 分享回顧
        </motion.h2>
        <SeasonList>
          {seasons.map((season) => (
            <Link key={season.id} href={`/sharingList/${season.id}`}>
              <a
                style={{
                  textDecoration: 'none',
                  color: '#fff',
                }}
              >
                <motion.h1
                  variants={fadeLeft}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 2.5 }}
                >
                  <Season
                    variants={buttonHover}
                    whileHover="hover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {season.name}
                  </Season>
                </motion.h1>
              </a>
            </Link>
          ))}
        </SeasonList>
      </Container>
    </Wrapper>
  );
}

export async function getStaticProps() {
  const latestSession = await fetchLatestSession();

  return {
    props: {
      latestSession,
    },
  };
}

const Wrapper = styled.div`
  height: 90vh;
  padding: 3rem calc((100vw - 1300px) / 2);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.primary};
  overflow: hidden;

  ${(props) => props.theme.tablet`
    flex-direction: column;
    padding: 5rem 2rem;
  `}
`;

const Container = styled.div`
  box-sizing: border-box;
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 5rem 2rem 5rem 5rem;
  gap: 15px;

  ${(props) => props.theme.tablet`
    width: 100%;
    padding: 2rem;
    gap: 20px;
  `}
`;

const LatestHeader = styled.div`
  width: 100%;
  display: grid;
  grid-auto-flow: column;
  align-items: flex-end;
`;

const Date = styled(motion.h4)`
  text-align: end;
`;

const Title = styled(motion.h1)`
  width: 100%;
  text-align: center;
`;

const SeasonList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  ${(props) => props.theme.tablet`
    margin: 0 auto;
    gap: 20px;
  `}
`;

const Season = styled(motion.span)`
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 10px;
  margin-left: 10px;
  padding: 0 10px;
`;
