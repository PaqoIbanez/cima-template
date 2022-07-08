import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { Button, Typography, Box, IconButton, useMediaQuery } from '@mui/material';
import { Container } from '@mui/system';
import { Carousel } from '@trendyol-js/react-carousel';
import { AssessmentCard } from '../cards/AssessmentCard';
import { useTheme } from '@mui/material/styles';

const assessments = [
   {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGK30LL-e5br68EqPp1oR8v5uFGFMQXbOyHg&usqp=CAU',
      description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'
   },
   {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaunGbOQGmVll6f0WHjinVqDINTalC_m6jgQ&usqp=CAU',
      description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'
   },
   {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJmtLsWkY_JH1FAwQjQ6zXa2WxhbJAAKRTPA&usqp=CAU',
      description: 'Loup of squamate reptiles, with over 6ing across all continents except Antarctica'
   },
   {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfe3aEi4DYWXcntej66glhoRSOz4iC88AE3w&usqp=CAU',
      description: 'Lizards a asddsd asd sadsa sad sdas ds dasd sd asd asddsare a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'
   },
   {
      image: 'https://www.graduateprogram.org/wp-content/uploads/2020/12/Dec-18-What-Questions-Should-Student-Assessment-Results-Answer__web.jpg',
      description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'
   }
]

interface Props {
   titulo: string;
   descripcion: string;
}

export const AssessmentCarousel = ({ titulo, descripcion }:Props) => {
   const theme = useTheme();
   const sm = useMediaQuery(theme.breakpoints.up('sm'));
   const md = useMediaQuery(theme.breakpoints.up('md'));
   const lg = useMediaQuery(theme.breakpoints.up('lg'));
   return (
      <Container maxWidth='xl'>
         <Box ml={6} mt={5}>
            <Typography variant='h6'>{titulo}</Typography>
         </Box>
         <Box mx={6} display='flex'>
            <Typography fontSize='24px'>{descripcion}</Typography>
            <Box flex={1} />
            <Button variant='text' size='large'>Ver catálogo</Button>
         </Box>
         <Carousel
            show={lg ? 4 : md ? 3 : !sm ? 1 : 2}
            slide={1}
            swiping={true}
            rightArrow={
               <Box
                  display='flex'
                  sx={{
                     height: '100%',
                     alignItems: 'center'
                  }} >
                  <IconButton>
                     <KeyboardArrowRight />
                  </IconButton>
               </Box>
            }
            leftArrow={
               <Box
                  display='flex'
                  sx={{
                     height: '100%',
                     alignItems: 'center'
                  }} >
                  <IconButton>
                     <KeyboardArrowLeft />
                  </IconButton>
               </Box>
            }>
            {
               assessments.map(({ image, description }, i) => (
                  <AssessmentCard image={image} description={description} key={1} />
               ))
            }
         </Carousel>
      </Container>
   )
};