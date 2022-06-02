import { FC } from 'react';
import { Button, CardActionArea, CardActions, CardContent, Typography } from '@mui/material';

interface IProps {
  handleQuestions: () => void;
}

const InitialQuiz: FC<IProps> = ({ handleQuestions }) => {
  return (
    <>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h2" component="div">
            Iniciar quiz!
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Button size="large" color="primary" variant="outlined" onClick={handleQuestions}>
          Start
        </Button>
      </CardActions>
    </>
  );
};

export default InitialQuiz;
