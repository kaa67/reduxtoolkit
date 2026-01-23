import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './todo'
import counterReducer from './counter'

const store = configureStore({
  reducer: {
    todo: todoReducer,
    counter: counterReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store
