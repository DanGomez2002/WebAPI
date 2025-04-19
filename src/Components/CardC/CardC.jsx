import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Box from '@mui/material/Box';

const CardCumt = ({user}) => {
  return (
    <Card sx={{ minWidth: 265, maxWidth: 265, position: 'relative', overflow: 'visible',   borderRadius: 2}}>
        <CardActionArea>

  

        <Box sx={{
          position: 'relative',
          height: 440,
          overflow: 'visible',
          zIndex: 2,       
          backgroundColor: 'rgb(142, 179, 190)',
          borderTopLeftRadius: '8px',
          borderTopRightRadius: '8px'

        }}>
          <Box
            component="img"
            src={user.image}
            alt={user.name}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              backgroundColor: 'transparent',
              transition: 'transform 0.5s ease',
              '&:hover': {
                overflow: 'visible',
                transform: 'scale(1.1)',
                zIndex: 10 
              }
            }}
          />
        </Box>

        <CardContent sx={{ 
          position: 'relative',
          overflow: 'visible', 
          zIndex: 1, 
          backgroundColor: 'white',
          borderRadius: 2
        }}>
            <Typography gutterBottom variant="h5" component="div" 
            sx={{ fontSize: '1.5rem',  color: 'Black',  fontWeight: 700, fontFamily: 'serif', mb: 1}}>
              {user.name}
            </Typography>
            <Typography variant="body2" 
            sx={{ fontSize: '1.1rem',  color: 'rgb(93, 99, 105)',fontWeight: 700, fontFamily: 'serif', mb: 1}}>
              {user.race+" "+user.gender}
            </Typography>
            <Typography variant="body2" 
            sx={{ fontSize: '1.1rem',  color: 'rgb(93, 99, 105)',fontWeight: 700, fontFamily: 'serif', mb: 1}}>
              {"Base KI: "+user.ki}             
            </Typography>
            <Typography variant="body2" 
            sx={{ fontSize: '1.1rem',  color: 'rgb(93, 99, 105)',fontWeight: 700, fontFamily: 'serif', mb: 1}}>
              {"Affiliation: "+user.affiliation}             
            </Typography>
        </CardContent>
        </CardActionArea>
    </Card>
  )
}

export default CardCumt