import { Card } from '@mui/material';
import { Container } from '@mui/system';
import { FC, useEffect } from 'react';
import Quiz from '../../components/Quiz';
import * as usersService from '../../services/user.service';

const Home: FC = () => {
  const fetchAuth = async () => usersService.auth();

  useEffect(() => {
    fetchAuth();
  }, []);

  return (
    <Container
      sx={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Card
        sx={{
          width: 500,
          height: 500,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 2,
        }}
      >
        <Quiz />
      </Card>
    </Container>
  );
};

export default Home;
