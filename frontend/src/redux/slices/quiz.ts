import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

const INITIAL_STATE = {
  questions: [],
  index: 0,
  status: 'pending',
};

export const slice = createSlice({
  name: 'quiz',
  initialState: INITIAL_STATE,
  reducers: {
    sendStatus(state, { payload }) {
      return { ...state, status: payload };
    },
    sendQuestions(state, { payload }) {
      return { ...state, questions: payload };
    },
    nextQuestion(state) {
      const nextIndex = state.index + 1;
      const existQuestion = state.questions[nextIndex];
      if (!existQuestion) return { ...state, status: 'completed' };
      if (existQuestion) return { ...state, index: state.index + 1 };
    },
    previousQuestion(state) {
      return { ...state, index: state.index > 0 ? state.index - 1 : state.index };
    },
    renewQuiz(_state, { payload }) {
      return { ...INITIAL_STATE, status: 'in-progress', questions: payload };
    },
  },
});

export const selectQuiz = ({ quiz }: RootState) => quiz;

export default slice.reducer;
