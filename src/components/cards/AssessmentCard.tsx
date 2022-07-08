import { Star, Timer, KeyboardArrowRight } from '@mui/icons-material';
import { Card, CardMedia, CardContent, Typography, Box, CardActions, Button, IconButton, Chip } from '@mui/material';

interface Props {
   image: string;
   description: string;
}

export const AssessmentCard = ({ image, description }: Props) => {
   return (
      <Card sx={{ margin: '10px', height: '380px', position: 'relative' }} variant='outlined'>
         <Chip label='Nivel' size='small' variant='filled' sx={{ position: 'absolute', top: 10, left: 10, backgroundColor: '#4b5c6b', color: 'white' }} />
         <CardMedia
            component="img"
            height="150"
            image={image}
            alt="green iguana"

         />
         <CardContent sx={{ mb: 0, maxHeight: '140px', minHeight: '140px' }}>
            <Box sx={{ mb: 0, height: '100px' }}>

               <Typography gutterBottom variant="h5">
                  Lizard
               </Typography>
               <Typography variant="body2">
                  {
                     `${description.substring(0, 90)}`
                  }
                  {
                     description.length > 90 ? '...' : ''
                  }
               </Typography>
            </Box>
            <Box mt={4} mb={-2} display='flex' flexDirection='row'>
               <Star color='error' fontSize="small" />
               <Star color='error' fontSize="small" />
               <Star color='error' fontSize="small" />
               <Star color='disabled' fontSize="small" />
               <Star color='disabled' fontSize="small" />
               <Typography variant='body2' ml="5px">270</Typography>
               <Box flex={1} />
               <Timer /><Typography variant='body2' ml="5px">5 h 20 min</Typography>

            </Box>
         </CardContent>
         <CardActions >
            <Typography variant='body1' ml="5px">12 competencias</Typography>
            <Box flex={1} />
            <IconButton><KeyboardArrowRight /></IconButton>
         </CardActions>
      </Card>
   )
}