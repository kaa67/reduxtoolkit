import { createSlice } from '@reduxjs/toolkit'

export type CounterStore = {
    value: number;
};

const getInitial = (): CounterStore => ({
    value: 1000,
});

export const counterSlice = createSlice({
  name: 'counter',
  initialState: getInitial(),
  reducers: {
    inc: (store) => {
      store.value += 1;
    },
    dec: (store) => {
      store.value -= 1;
    },
  },
})

export const { inc, dec } = counterSlice.actions

export default counterSlice.reducer
