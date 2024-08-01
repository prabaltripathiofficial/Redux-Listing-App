import React from 'react';
import { Provider } from 'react-redux';
import store from './app/store'; // Correct path to store
import AddForm from './components/AddForm'; // Correct path to AddForm
import Todos from './components/Todos'; // Correct path to Todos
import { Container, Typography, Box } from '@mui/material';

function App() {
  return (
    <Provider store={store}>
      <Container
        maxWidth={false}
        sx={{
          width: '100vw',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          bgcolor: '#f5f5f5',
          p: 2
        }}
      >
        <Box
          sx={{
            p: 4,
            bgcolor: 'white',
            borderRadius: 2,
            boxShadow: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            maxWidth: '800px',
            textAlign: 'center'
          }}
        >
          <Typography
            variant="h2"
            sx={{ mb: 2, fontWeight: 'bold', color: '#1976d2' }}
          >
            Wanderlust
          </Typography>
          <Typography
            variant="h5"
            sx={{ mb: 4, color: '#555' }}
          >
            List Your Destinations
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 4, color: '#777' }}
          >
            Fill Your Bucket List
          </Typography>
          <AddForm />
          <Todos />
        </Box>
      </Container>
    </Provider>
  );
}

export default App;
