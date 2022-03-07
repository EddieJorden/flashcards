import { createSlice } from '@reduxjs/toolkit';

const topics = createSlice({
    name: 'topics',
    initialState: {
        topics: {}
    },
    reducers: {
        addTopic(state, action) {
            const { id, name, icon } = action.payload;
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
});

export const selectTopics = state => state.topics.topics;
export const { addTopic, addQuizIds } = topics.actions;
export default topics.reducer;