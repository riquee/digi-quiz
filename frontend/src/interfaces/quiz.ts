export interface IQuiz {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correctAnswer: string;
  incorrectAnswers: string[];
  answer?: string;
  answers?: string[];
  createdAt: Date;
  updatedAt: Date;
}
