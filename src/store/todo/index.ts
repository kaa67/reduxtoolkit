import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type TodoStore = {
    todoList: string[];
    todoAddValue: string;
};

const getInitial = (): TodoStore => ({
    todoList: [],
    todoAddValue: '',
});

export const todoSlice = createSlice({
  name: 'todo',
  initialState: getInitial(),
  reducers: {
    todoAdd: (store) => {
      store.todoList.push(store.todoAddValue)
      store.todoAddValue = ''
    },
    todoRemove: (store, action: PayloadAction<number>) => {
      store.todoList = store.todoList.filter(
        (_, index) => index !== action.payload
      )
    },
    setTodoAddValue: (store, action: PayloadAction<string>) => {
      store.todoAddValue = action.payload
    }
  },
})

export const { todoAdd, todoRemove, setTodoAddValue } = todoSlice.actions

export default todoSlice.reducer