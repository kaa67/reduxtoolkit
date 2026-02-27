import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { charactersFetchCallback, initialState } from './utils';

export const charactersFetch = createAsyncThunk(
    'characters/fetch',
    charactersFetchCallback,
);

export const charactersSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {},
    extraReducers: (b) => {
        console.log('extraReducers')
        b.addCase(
            charactersFetch.fulfilled,
            (state, action) => {
                state.characters = action?.payload?.result || null
            },
        )
    },
})

export default charactersSlice
