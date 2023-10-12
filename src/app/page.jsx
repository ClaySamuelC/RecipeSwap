import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import RecipeCard from '@/components/RecipeCard';

export default async function HomePage() {
  const response = await fetch('http://localhost:3000/api/recipes');
  const recipes = await response.json();

  return (
    <Box sx={{ display: 'flex' }}>
      <div>
        <Alert severity="info" sx={{ mt: 2, mb: 5 }}>
          <AlertTitle>Hello 👋</AlertTitle>
          This app uses the Next.js App Router and Material UI v5.
        </Alert>
        <Grid container rowSpacing={3} columnSpacing={3}>
          {recipes.map((recipe) => (
            <Grid xs={6} key={recipe.id}>
              <RecipeCard
                title={recipe.title}
                description={recipe.description}
                image_url={recipe.image_url}
                image_text={recipe.image_text}
              />
            </Grid>
          ))}
          <Grid xs={6}>
            <RecipeCard
              title="CMYK"
              description="The CMYK color model (also known as process color, or four color) is a subtractive color model, based on the CMY color model, used in color printing, and is also used to describe the printing process itself."
              image_url="https://source.unsplash.com/random"
              image_text="A random image"
            />
          </Grid>
        </Grid>
      </div>
      <Drawer
        sx={{
          width: 320,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 320,
            boxSizing: 'border-box',
            top: ['48px', '56px', '64px'],
            height: 'auto',
            bottom: 0,
          },
        }}
        variant="permanent"
        anchor="right"
      >
        <List sx={{ px: 2 }}>
          <ListItem disablePadding>
            <Typography variant="overline" sx={{ fontWeight: 500 }}>
              On this page
            </Typography>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}
