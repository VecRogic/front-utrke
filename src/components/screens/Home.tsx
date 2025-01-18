import React, { useEffect } from 'react';
import { Typography, Button, Container, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../store';

const HomePage = () => {
  const token = useAppSelector((state) => state.account.token);

  return (
    <Container maxWidth="md" sx={{ textAlign: 'center', mt: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to Flight Search
        </Typography>
        <Typography variant="h5" color="textSecondary" paragraph>
          Discover and book flights with ease. Search for flights, compare prices, and make your travel arrangements in just a few clicks.
        </Typography>
      </Box>
      <Box sx={{ mb: 4 }}>
        <Button
          component={Link}
          to={token ? "/search-flight" : "/registration"}
          variant="contained"
          color="primary"
          size="large"
        >
          Start Searching
        </Button>
      </Box>
      <Box sx={{ mt: 4 }}>
        <Typography variant="body1" color="textSecondary">
          Need assistance? <Link to="#">Contact us</Link> for support and more information.
        </Typography>
      </Box>
    </Container>
  );
};

export default HomePage;
