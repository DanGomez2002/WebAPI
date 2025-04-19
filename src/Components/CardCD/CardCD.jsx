import * as React from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const CardCusmDetail = ({ user }) => {
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'row',
        width: 640,
        height: 700,
        backgroundColor: 'rgb(142, 179, 190)',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: '50%',
        }}
      >
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography
            component="div"
            sx={{
              fontSize: '3rem',
              fontWeight: 700,
              fontFamily: 'cursive',
              color: 'white',
              mb: 1,
            }}
          >
            {user.name}
          </Typography>

          <Typography
            sx={{ fontSize: '1.4rem', color: 'black', fontFamily: 'serif', mb: -1 }}
          >
            Raza
          </Typography>
          <Typography sx={{ fontSize: '1.4rem', color: 'white', fontFamily: 'serif', mb: 1 }}>
            {user.race}
          </Typography>

          <Typography
            sx={{ fontSize: '1.4rem', color: 'black', fontFamily: 'serif', mb: -1 }}
          >
            Género
          </Typography>
          <Typography sx={{ fontSize: '1.4rem', color: 'white', fontFamily: 'serif', mb: 1 }}>
            {user.gender}
          </Typography>

          <Typography
            sx={{ fontSize: '1.4rem', color: 'black', fontFamily: 'serif', mb: -1 }}
          >
            Ki Base
          </Typography>
          <Typography sx={{ fontSize: '1.4rem', color: 'white', fontFamily: 'serif', mb: 1 }}>
            {user.ki}
          </Typography>

          <Typography
            sx={{ fontSize: '1.4rem', color: 'black', fontFamily: 'serif', mb: -1 }}
          >
            Ki Total
          </Typography>
          <Typography sx={{ fontSize: '1.4rem', color: 'white', fontFamily: 'serif', mb: 1 }}>
            {user.maxKi}
          </Typography>

          <Typography
            sx={{ fontSize: '1.4rem', color: 'black', fontFamily: 'serif', mb: -1 }}
          >
            Afiliación
          </Typography>
          <Typography sx={{ fontSize: '1.4rem', color: 'white', fontFamily: 'serif', mb: 1 }}>
            {user.affiliation}
          </Typography>
        </CardContent>
      </Box>

      <CardMedia
        component="img"
        image={user.image}
        alt={user.name}
        sx={{
          width: '60%',
          height: '100%',
          backgroundColor: 'rgb(142, 179, 190)',
          objectFit: 'contain',
        }}
      />
    </Card>
  );
};

export default CardCusmDetail;
