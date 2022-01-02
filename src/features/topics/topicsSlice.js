import { createSlice } from '@reduxjs/toolkit';

const topics = createSlice({
    consoleLog: console.log('topicsSlice is running'),
    name: 'topics',
    initialState: {
        topics: {
        }
    },
    reducers: {
        addTopic(state, action) {
            console.log('addTopic is firing off')
            state.topics = {
                [action.payload.id]: {
                    id: action.payload.id,
                    name: action.payload.name,
                    icon: action.payload.icon,
                    quizIds: [],
                }
            }
        },
        addQuizIds(state, action) {
            console.log('action in topicSlice is firing off', action)
            state.topics[action.payload.topicId].quizIds.push(action.payload.id)
        }
    }
})

console.log('topics', topics)

// use selector
export const selectTopics = state => state.topics.topics

export const { addTopic } = topics.actions

export const { addQuizIds } = topics.actions

export default topics.reducer