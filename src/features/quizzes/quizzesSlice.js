import { createSlice } from '@reduxjs/toolkit';
import { addQuizIds } from '../topics/topicsSlice';

const quizzes = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {}
    },

    reducers: {
        addQuiz: (state, action) => {
            const { id } = action.payload;
            state.quizzes[id] = action.payload;
        }
    }
});

export const addQuizForTopicIdThunk = (payload) => {
    const { topicId, id} = payload
    return (dispatch) => {
        dispatch(addQuizIds({ topicId: topicId, quizId: id}))
        dispatch(quizzes.actions.addQuiz(payload))
    };
};

export const selectQuiz = (state) => state.quizzes.quizzes;

export const { addQuiz } = () => quizzes.actions

export default quizzes.reducer