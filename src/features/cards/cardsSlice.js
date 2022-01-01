export const cardsSlice = createSlice({
    name: 'cards',
    initialState: {
        cards: {}
    },
    reducer(state, action) {
        addCard((state, action) => {
            state.cards = state.cards.push({[action.payload.id]: action.payload)
        })
    }
})