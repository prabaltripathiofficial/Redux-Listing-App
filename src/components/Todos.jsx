import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo, markAsDone } from '../features/todo/todoSlice';
import { Box, Button, Typography, List, ListItem, ListItemText, IconButton, ListItemIcon, Checkbox } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const Todos = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const handleToggle = (id) => {
    dispatch(markAsDone(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 600,
        mt: 4,
        p: 3,
        bgcolor: 'white',
        borderRadius: 1,
        boxShadow: 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
      }}
    >
      <Typography variant="h6" sx={{ mb: 2, color: '#333' }}>
        Todo List
      </Typography>
      <List sx={{ width: '100%' }}>
        {todos.length > 0 ? (
          todos.map((todo) => (
            <ListItem
              key={todo.id}
              secondaryAction={
                <IconButton edge="end" onClick={() => handleDelete(todo.id)} aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              }
              sx={{
                bgcolor: todo.isDone ? '#e0f7fa' : '#ffffff',
                mb: 1,
                borderRadius: 1,
                boxShadow: 1,
              }}
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={todo.isDone}
                  onChange={() => handleToggle(todo.id)}
                />
              </ListItemIcon>
              <ListItemText
                primary={todo.task}
                sx={{ color: '#333' }}
              />
            </ListItem>
          ))
        ) : (
          <Typography variant="body1" sx={{ color: '#777' }}>
            No todos available.
          </Typography>
        )}
      </List>
    </Box>
  );
};

export default Todos;
