import { FC, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, CardActions, CardContent, Typography } from '@mui/material';
import { slice, selectQuiz } from '../../redux/slices/quiz';
import { IQuiz } from '../../interfaces/quiz';
import RadioButtonsGroup from './RadioButtonsGroup';

const Painel: FC = () => {
  const dispatch = useDispatch();
  const { questions, index } = useSelector(selectQuiz);
  const [question, setQuestion] = useState<IQuiz>();

  useEffect(() => {
    setQuestion(questions[index]);
  }, [index]);

  const handleChangeAnswer = (value: string) => {
    const questionsClone: IQuiz[] = [...questions];
    questionsClone[index] = { ...questionsClone[index], answer: value };
    setQuestion(questionsClone[index]);
    dispatch(slice.actions.sendQuestions(questionsClone));
  };

  const handleNextQuestion = () => {
    dispatch(slice.actions.nextQuestion());
  };

  const handlePreviousQuestion = () => {
    dispatch(slice.actions.previousQuestion());
  };

  return (
    <>
      <CardContent>
        <Typography sx={{ fontSize: 15 }} color="text.secondary" gutterBottom>
          {`${index + 1} / ${questions?.length}`}
        </Typography>
        <Typography sx={{ fontSize: 25 }} color="text.secondary" gutterBottom>
          {`${question?.category}`}
        </Typography>
        <Typography sx={{ fontSize: 15 }} color="text.secondary" gutterBottom>
          {`${question?.question}`}
        </Typography>
      </CardContent>
      {question && (
        <RadioButtonsGroup
          formValue={question?.answer || ''}
          setFormValue={handleChangeAnswer}
          question={question}
        />
      )}
      <CardActions sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 0 }}>
        <Button size="large" color="primary" variant="outlined" onClick={handlePreviousQuestion}>
          Voltar
        </Button>
        <Button size="large" color="primary" variant="outlined" onClick={handleNextQuestion}>
          {index <= questions.length - 2 ? 'Próximo' : 'Concluir'}
        </Button>
      </CardActions>
    </>
  );
};

export default Painel;
