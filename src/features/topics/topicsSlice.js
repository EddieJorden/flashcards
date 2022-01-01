import { createSlice, createAction } from '@reduxjs/toolkit'

const topics = createSlice({
    consoleLog: console.log('topicsSlice is running'),
    name: 'topics',
    initialState: {
        topics: {}
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
        addQuizzIds(state, action) {
            console.log('action in topicSlice is firing off', action)
            state.topics.topicId[action.payload.topicId].quizIds.push(action.payload.topicId)
            // state.topics[action.payload.topicId].quizIds.push(action.payload.quizId)
        }
    }
})

console.log('topics', topics)

// use selector
export const selectTopics = state => state.topics.topics

export const { addTopic } = topics.actions

export const { addQuizzIds } = topics.actions

export default topics.reducer