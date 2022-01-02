import { createSlice } from '@reduxjs/toolkit';
import { addQuizIds } from '../topics/topicsSlice'

const quizzes = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {}
    },
    reducer: {
        addQuiz(state, action) {
            console.log('addQuizz reducer is firing off', action)
            state.quizzes = {[action.payload.Id]: action.payload}
        }
    }
})

export const selectQuiz = state => state.quizzes

export const addQuiz = state => quizzes.actions.addQuiz

// dispatch actions here
export const addQuizForTopicIdThunk = (payload) => {
    console.log('payload from thunk action creator', payload)
    return (dispatch) => {
        console.log('dispatch firing off?')
        // dispatch multiple actions here
        dispatch(addQuizIds(payload))
        // dispatch(addQuiz(payload))
    };
};

// console.log('addQuizForTopicIdThunk', addQuizForTopicIdThunk())

export default quizzes.reducer