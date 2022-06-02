import { FC, useEffect, useState } from 'react';
import { Button, CardActionArea, CardActions, CardContent, Typography } from '@mui/material';
import { selectQuiz, slice } from '../../redux/slices/quiz';
import { useDispatch, useSelector } from 'react-redux';
import { IQuiz } from '../../interfaces/quiz';
import * as quizServices from '../../services/quiz.service';
import { shuffleArray } from '../../utils/assistents';

const ResultQuiz: FC = () => {
  const dispatch = useDispatch();
  const { questions } = useSelector(selectQuiz);
  const [total, setTotal] = useState<number>(0);

  const serializeQuiz = (quiz: IQuiz[]) => {
    return quiz.map((element) => ({
      ...element,
      answer: '',
      answers: shuffleArray([...element.incorrectAnswers, element.correctAnswer]),
    }));
  };

  const handleRenew = async () => {
    const quiz = await quizServices.findMany();
    const serializedQuiz = serializeQuiz(quiz);
    dispatch(slice.actions.renewQuiz(serializedQuiz));
  };

  useEffect(() => {
    const checkAnswer = questions.filter(({ answer, correctAnswer }) => answer === correctAnswer);
    const result = Math.round((checkAnswer.length / questions.length) * 100);
    setTotal(result);
  }, []);

  return (
    <>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h2" component="div">
            {`Seu resultado foi ${total}%`}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Button size="large" color="primary" variant="outlined" onClick={handleRenew}>
          Jogar novamente
        </Button>
      </CardActions>
    </>
  );
};

export default ResultQuiz;
