import { configureStore } from '@reduxjs/toolkit';
import quizReducer from './slices/quiz';

const store = configureStore({
  reducer: {
    quiz: quizReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
