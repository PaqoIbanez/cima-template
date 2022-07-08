import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import ListItem from '@mui/material/ListItem';
import ImageIcon from '@mui/icons-material/Image';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Button, Chip, Container } from '@mui/material';
import { useState } from 'react';
import { AppBarComponent } from '../components/ui/AppBar';
import Typography from '@mui/material/Typography';
import { AssessmentCarousel } from '../components/carousel/AssessmentCarousel';
import { Badge } from '@mui/icons-material';

const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
   display: 'flex',
   alignItems: 'center',
   padding: theme.spacing(0, 2),
   // necessary for content to be below app bar
   ...theme.mixins.toolbar,
   justifyContent: 'flex-end',
}));

export const MenuLayout = () => {
   const [open, setOpen] = useState(false);

   return (
      <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column' >
         <AppBarComponent setOpen={setOpen} open={open} />
         <Drawer
            sx={{
               flexShrink: 0,
               '& .MuiDrawer-paper': {
                  width: drawerWidth,
                  boxSizing: 'border-box',
               },
               transition: 'all 0.5s ease-out', backgroundColor: 'rgba(108,124,135,0.7)'
            }}
            anchor="left"
            open={open}
            onClose={() => setOpen(false)}
         >
            <DrawerHeader sx={{ display: 'flex', justifyContent: 'space-between' }}>
               <Box sx={{ backgroundColor: '#dfe6ed', width: 'calc(150px)', height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                  <ImageIcon sx={{ color: '#6e7b87' }} />
               </Box>
               <IconButton onClick={() => setOpen(false)}>
                  <ClearIcon />
               </IconButton>
            </DrawerHeader>
            <Box padding={2}>
               <Button variant='outlined' fullWidth sx={{ mb: 2 }}>Iniciar sesión</Button>
               <Button variant='contained' fullWidth>Crea una cuenta</Button>
               <Divider />
               <List>
                  {['Competencias', 'Nuestros paquetes', 'Empresas'].map((text) => (
                     <ListItem key={text} disablePadding>
                        <ListItemButton>
                           <ListItemText secondary={text} />
                        </ListItemButton>
                     </ListItem>
                  ))}
               </List>
            </Box>
         </Drawer>
         <Box style={{ backgroundColor: '#f7f9fa', width: '100%', marginTop: '70px' }}>
            <Container maxWidth='xl' >
               <Box maxWidth={370} margin='50px'>
                  <Typography variant='h5' sx={{ mb: '15px' }}>Certifícate con nosotros</Typography>
                  <Typography variant='body2' sx={{ mb: '35px' }}>
                     Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                     Non nesciunt, quae eos similique tenetur veritatis placeat ducimus culpa autem. Quaerat, quos dolorum. Vero tempora ipsam
                     deserunt aut voluptatem tempore blanditiis!
                  </Typography>
                  <Box maxWidth={400} display='flex' sx={{ flexDirection: { xs: 'column', sm: 'row' } }} justifyContent='space-between'>
                     <Button variant='contained'>Únete ahora </Button>
                     <Button variant='outlined' sx={{ mt: { xs: '10px', sm: '0px' } }}>Crece con tu empresa</Button>
                  </Box>
               </Box>
            </Container>
         </Box>
         <AssessmentCarousel titulo='Competencias populares' descripcion='Los favoritos entre la comunidad' />
         <AssessmentCarousel titulo='Paquetes recomendados' descripcion='Certifícate en las habilidades de tu rama profesional' />
      </Box>
   );
}
