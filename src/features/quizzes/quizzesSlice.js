import { createSlice } from '@reduxjs/toolkit'
import { addQuizzIds, addTopic } from '../topics/topicsSlice'
import { useDispatch } from 'react-redux'

const dispatch = useDispatch

const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {}
    },
    reducer: {
        addQuiz(state, action) {
            state.quizzes = {
                [action.payload.id]: action.payload
            }
        }
    }
})

export const selectQuiz = state => state.quizzes

export const { addQuiz } = (state) => state.quizzes.actions

// dispatch actions here
export const addQuizzForTopicIdthunk = (payload) => {
    console.log('payload from thunk action creator', payload)
    return (dispatch) => {
        
    }
}

// export const addQuizForTopicIdThunk = (state, payload) => {
//     console.log('payload in quizzesSlice', payload)
//     return (dispatch) => {
//         dispatch(state.addQuiz(payload.topicId))
//         dispatch(state.addQuizzIds(payload.topicId))
//     }
// }

export default quizzesSlice.reducer