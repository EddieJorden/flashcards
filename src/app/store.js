import { configureStore } from "@reduxjs/toolkit";
import topics from "../features/topics/topicsSlice";
import quizzes from '../features/quizzes/quizzesSlice';
import cards from "../features/cards/cardsSlice";


export default configureStore({
  reducer: {
    topics: topics,
    quizzes: quizzes,
    cards: cards,
  },
});
