import { FC, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as quizServices from '../../services/quiz.service';
import { slice, selectQuiz } from '../../redux/slices/quiz';
import InitialQuiz from '../Quiz/Initial';
import Painel from './Painel';
import { IQuiz } from '../../interfaces/quiz';
import { shuffleArray } from '../../utils/assistents';
import ResultQuiz from './Result';

const Quiz: FC = () => {
  const dispatch = useDispatch();
  const { status } = useSelector(selectQuiz);

  const serializeQuiz = (quiz: IQuiz[]) => {
    return quiz.map((element) => ({
      ...element,
      answer: '',
      answers: shuffleArray([...element.incorrectAnswers, element.correctAnswer]),
    }));
  };

  const handleQuestions = async () => {
    const quiz = await quizServices.findMany();
    const serializedQuiz = serializeQuiz(quiz);
    dispatch(slice.actions.sendQuestions(serializedQuiz));
    dispatch(slice.actions.sendStatus('in-progress'));
  };

  const handleStepQuiz = useCallback(() => {
    switch (status) {
      case 'pending':
        return <InitialQuiz handleQuestions={handleQuestions} />;
      case 'in-progress':
        return <Painel />;
      case 'completed':
        return <ResultQuiz />;
      default:
        return <InitialQuiz handleQuestions={handleQuestions} />;
    }
  }, [status]);

  return handleStepQuiz();
};

export default Quiz;
