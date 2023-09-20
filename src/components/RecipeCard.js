import * as React from 'react';
import Image from 'next/image';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function RecipeCard({ title, description, image_url, image_text }) {
  return (
    <Card>
      <Image
        alt={image_text}
        src={image_url}
        width={640}
        height={480}
        style={{
          maxWidth: '100%',
          height: '200px',
          objectFit: 'cover',
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
