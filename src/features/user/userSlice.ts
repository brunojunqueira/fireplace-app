import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'
import { initialState, User } from './IUser'

export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        login: (state, action: PayloadAction<User>) => {
            state = action.payload;
        },
        logout: (state) => {
            state = initialState;
        },
        update: (state, action: PayloadAction<User>) => {
            state = action.payload;
        }
    }
});

export const { login, logout, update } = userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;