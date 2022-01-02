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

// dispatch actions here
export const addQuizForTopicIdThunk = (payload) => {
    const { topicId, id} = payload
    console.log('payload from thunk action creator', payload);
    return (dispatch) => {
        // dispatch multiple actions here
        dispatch(addQuizIds({ topicId: topicId, quizId: id}))
        dispatch(quizzes.actions.addQuiz(payload))
    };
};

// console.log('addQuizForTopicIdThunk', addQuizForTopicIdThunk())
export const selectQuiz = (state) => state.quizzes.quizzes;

export const { addQuiz } = () => quizzes.actions

export default quizzes.reducer