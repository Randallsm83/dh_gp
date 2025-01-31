import * as React from 'react';
import { useState } from 'react';
import { 
  Box, 
  Typography, 
  TextField, 
  Button, 
  Card, 
  CardContent, 
  CardMedia,
  Stack
} from '@mui/material';

interface Character {
  name: string;
  image: string;
}

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [character, setCharacter] = useState<Character | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Replace with actual API call when available
    setCharacter({
      name: searchQuery,
      image: 'https://via.placeholder.com/300'
    });
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome to Your Dashboard
      </Typography>

      <Box component="form" onSubmit={handleSearch} sx={{ mt: 3, mb: 4 }}>
        <Stack direction="row" spacing={2}>
          <TextField
            fullWidth
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for a character..."
            variant="outlined"
            size="medium"
          />
          <Button 
            type="submit" 
            variant="contained" 
            size="large"
            sx={{ minWidth: '120px' }}
          >
            Search
          </Button>
        </Stack>
      </Box>

      {character && (
        <Card sx={{ maxWidth: 345, mt: 3 }}>
          <CardMedia
            component="img"
            height="300"
            image={character.image}
            alt={character.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {character.name}
            </Typography>
          </CardContent>
        </Card>
      )}
    </Box>
  );
}
