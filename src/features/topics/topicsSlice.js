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
            const { id, name, icon } = action.payload
            console.log('addTopic is firing off', action.payload)
            
            state.topics[id] = {
                id: id,
                name: name,
                icon: icon,
                quizIds: [],
            }
        },
        addQuizIds(state, action) {
            const { topicId, quizId } = action.payload;
            if (!topicId) {
                return;
            }
            state.topics[topicId].quizIds.push(quizId)
        }
    }
})

console.log('topics', topics)

// use selector
export const selectTopics = state => state.topics.topics

export const { addTopic, addQuizIds } = topics.actions

export default topics.reducer