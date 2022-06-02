import { IQuiz } from '../interfaces/quiz';
import axios from '../utils/axios';

export const findMany = async (id: number = 0): Promise<IQuiz[]> => {
  const { data } = await axios.get<IQuiz[]>(`/questions/${id}`);
  return data;
};
