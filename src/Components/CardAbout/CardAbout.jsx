
import { Card, Typography } from '@mui/material';


const CardAbout = () => {
  return (

    <Card sx={{ 
        maxWidth: 800, 
        mx: 'auto', 
        p: 4,
        mt: 4,
        textAlign: 'center',
        backgroundColor: 'rgb(142, 179, 190)'
      }}>
       


        <Typography component="h2" sx={{ fontSize: '2.7rem', fontWeight: 700, fontFamily: 'sans-serif', 
            color: 'black', mb: 1}}>
            Sobre mí
        </Typography>

        <Typography component="div" variant="caption" paragraph sx={{ fontSize: '2.0rem', 
            fontFamily: 'sans-serif', textAlign: 'justify', mb: 3 }}>
        Soy Carlos Daniel Gómez Murcia, estudiante de Ingenieria de Sistemas en la Universidad de la Amazonia
        </Typography>       
    </Card>   
  );
}

export default CardAbout