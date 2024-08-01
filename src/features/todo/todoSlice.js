import { createSlice, nanoid } from '@reduxjs/toolkit';

// Initial state for the slice
const initialState = {
  todos: [], // Start with an empty list
};

// Create the slice
export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    // Action to add a new todo
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(), // Generate a unique id for the new todo
        task: action.payload.task, // Get the task from the action payload
        isDone: false,
      };
      state.todos.push(newTodo); // Directly mutate state with Redux Toolkit
    },
    // Action to delete a todo by id
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    // Action to mark a todo as done or not done
    markAsDone: (state, action) => {
      state.todos = state.todos.map(todo =>
        todo.id === action.payload
          ? { ...todo, isDone: !todo.isDone }
          : todo
      );
    },
  },
});

// Export the actions
export const { addTodo, deleteTodo, markAsDone } = todoSlice.actions;

// Export the reducer
export default todoSlice.reducer;
