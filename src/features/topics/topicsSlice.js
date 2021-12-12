import { createSlice } from '@reduxjs/toolkit'

const topics = createSlice({
    consoleLog: console.log('topicsSlice is running'),
    name: 'topics',
    initialState: {
            topics: {
                '123': {
                    id: '123',
                    name: 'example topic',
                    icon: 'icon url',
                    quizIds: ['456']
                }
            },
        quizzes: {
            quizzes: {
                '456': {
                    id: '456',
                    topicId: '123',
                    name: 'quiz for example topic',
                    cardIds: ['789', '101', '102']
                }
            }
        },
        cards: {
            cards: {
                '789': {
                    id: '789',
                    front: 'front text',
                    back: 'back text'
                },
                '101': {
                    id: '101',
                    front: 'front text',
                    back: 'back text'
                },
                '102': {
                    id: '102',
                    front: 'front text',
                    back: 'back text'
                },
            }
        }
    },
    reducers: {
        addTopic: (state, action) => {
            state.topics = {
                topics: {
                    [action.payload.id]: action.payload,
                    quizIds: []
                }
            }
        }
    }
})

// use selector
export const selectTopics = state => state.topics.topics

// this is going to be an action creator
export const addTopic = (state, action) => {
    console.log("addTopic is running", addTopic)
    state.topics.topics = {[action.payload.topics.id]: action.payload }
}

export default topics.reducer