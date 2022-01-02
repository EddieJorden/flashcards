import { createSlice } from '@reduxjs/toolkit';
import { addQuizIds } from '../topics/topicsSlice';

const quizzes = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {
            quizIds: []
        }
    },

    reducers: {
        addQuiz: (state, action) => {
            const { id } = action.payload;
            state.quizzes[id] = action.payload;
        }
    }
})

export const selectQuiz = state => state.quizzes

export const addQuiz = () => quizzes.addQuiz

// dispatch actions here
export const addQuizForTopicIdThunk = (payload) => {
    console.log('payload from thunk action creator', payload)
    return (dispatch) => {
        
        // dispatch multiple actions here

        dispatch(addQuizIds(payload))
        dispatch(quizzes.actions.addQuiz(payload))
    };
};

// console.log('addQuizForTopicIdThunk', addQuizForTopicIdThunk())

export default quizzes.reducer