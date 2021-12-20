import { createSlice, createAction } from '@reduxjs/toolkit'

const topics = createSlice({
    consoleLog: console.log('topicsSlice is running'),
    name: 'topics',
    initialState: {
        topics: {
            quizIds: []
        },
    },
    reducers: {
        addTopic(state, action) {
            console.log('addTopic is firing off')
            state.topics = {
                name: action.payload.name,
                [action.payload.id]: action.payload,
                quizIds: [],
                icon: action.payload.icon
            }
        }
    }
})

console.log('topics', topics)

// use selector
export const selectTopics = state => state.topics

export const { addTopic } = topics.actions

export default topics.reducer