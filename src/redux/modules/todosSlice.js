import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

/**
 * 2초 지연을 시키는 함수입니다 (비동기 작업).
 */
import { waitTwoSeconds } from '../../utils';

export const __addToDo = createAsyncThunk(
  '__addToDo',
  async (payload, thunkAPI) => { 
    await waitTwoSeconds() 
    thunkAPI.dispatch(addTodo(payload))
  }
);



export const __deleteTodo = createAsyncThunk(
  '__deleteToDo',
  async (payload, thunkAPI) => {
    await waitTwoSeconds() 
    thunkAPI.dispatch(deleteTodo(payload))
  }
);

const initialState = {
  todos :[],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState: initialState.todos,
  reducers: {
    addTodo: (state, action) => {
    return [...state, action.payload];
    },
    deleteTodo: (state, action) => {
    return state.filter((todo)=> todo.id !== action.payload)
    },
  },
});

export const { addTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
