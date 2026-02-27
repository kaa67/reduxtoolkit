import { configureStore } from "@reduxjs/toolkit"
import { useDispatch, useSelector } from "react-redux";

import { charactersSlice } from "./charactersSlice"

export const store = configureStore({
    reducer: {
        characters: charactersSlice.reducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()

export default store
