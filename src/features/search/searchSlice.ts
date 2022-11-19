import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'
import { initialState, ISearch } from './ISearch'

const searchSlice = createSlice({
    name: 'search',
    initialState: initialState,
    reducers: {
        setKeyword: (state, action: PayloadAction<s>) => {
            state.keyword = action.payload.keyword;
        }
    }
})

export const { setKeyword } = searchSlice.actions;

export const selectSearch = (state: RootState) => state.search;

export default searchSlice.reducer;