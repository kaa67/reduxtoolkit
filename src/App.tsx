import { useDispatch, useSelector } from "react-redux"

import type { RootState } from "./store"
import { setTodoAddValue, todoAdd, todoRemove } from "./store/todo";
import Counting from "./Counting";

function App() {
  const dispatch = useDispatch()

  const { todoList, todoAddValue } = useSelector(
    (state: RootState) => ({
      todoList: state.todo.todoList,
      todoAddValue: state.todo.todoAddValue,
    })
  );

  return (
    <div>
      <h1>Redux Toolkit Todo</h1>

      <ul>
        {todoList.map(
          (todoItem, key) => (
            <li key={key}>
              <b>{todoItem}</b>

              <button onClick={
                () => {
                  dispatch(todoRemove(key));
                }
              }>
                Удалить
              </button>
            </li>
          )
        )}
      </ul>


      <input
        value={todoAddValue}
        onChange={
          (event) => dispatch(setTodoAddValue(event.target.value))
        }
      />

      <button
        disabled={!todoAddValue}
        onClick={() => { dispatch(todoAdd()); }}
      >
        Добавить
      </button>


      <Counting />
    </div>
  )
}

export default App
