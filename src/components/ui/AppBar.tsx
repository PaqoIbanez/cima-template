import { styled, useTheme } from '@mui/material/styles';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Button, Tab, Tabs, TextField, useMediaQuery } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import { Search, ShoppingCart, ShoppingCartRounded } from '@mui/icons-material';
import { useState } from 'react';

const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
   open?: boolean;
}

const AppBar = styled(MuiAppBar, {
   shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
   transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
   }),
   ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
      transition: theme.transitions.create(['margin', 'width'], {
         easing: theme.transitions.easing.easeOut,
         duration: theme.transitions.duration.enteringScreen,
      }),
   }),
}));

interface Props {
   setOpen: (open: boolean) => void;
   open: boolean;
}

export const AppBarComponent = ({ setOpen, open }: Props) => {
   const theme = useTheme();
   const matches = useMediaQuery(theme.breakpoints.up('md'));
   const [value, setValue] = useState('one');

   const handleChange = (event: React.SyntheticEvent, newValue: string) => {
      setValue(newValue);
      console.log(newValue);

   };

   return (
      <AppBar position="fixed" open={open} color='default'>
         <Toolbar>
            {
               !matches &&
               <>
                  <IconButton
                     color="secondary"
                     aria-label="open drawer"
                     onClick={() => setOpen(true)}
                     edge="start"
                     sx={{ mr: 2, ...(open && { display: 'block' }) }}
                  >
                     <MenuIcon />
                  </IconButton>
                  <Box flex={1} />
               </>
            }

            {
               !open &&
               <Box sx={{
                  backgroundColor: '#dfe6ed',
                  width: '120px',
                  height: '40px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  mr: 2
               }}
               >
                  <ImageIcon sx={{ color: '#6e7b87', }} />
               </Box>
            }
            <TextField
               sx={{ display: { xs: 'none', sm: 'block' } }}
               placeholder='¿Qué deseas evaluar?'
               size='small'
               InputProps={{
                  endAdornment: <Search />,
               }}
            />
            <Box flex={1} />
            {
               matches &&
               <Tabs
                  value={value}
                  onChange={handleChange}
                  textColor="primary"
                  indicatorColor="primary"
                  aria-label="secondary tabs example"
                  TabIndicatorProps={{ style: { border: '1px solid #6558f5' } }}
               >
                  <Tab value="one" label="Inicio" />
                  <Tab value="two" label="Competencias" />
                  <Tab value="three" label="Nuestros paquetes" />
                  <Tab value="four" label="Empresas" />
               </Tabs>
            }
            <IconButton
               color="secondary"
               aria-label="search"
               edge="start"
               sx={{ display: { xs: 'block', sm: 'none' } }}
            >
               <SearchIcon fontSize='large' />
            </IconButton>
            <IconButton
               color="secondary"
               aria-label="cart"
               edge="start"
               sx={{ mx: '6px' }}
            >
               <ShoppingCartRounded fontSize='large' />
            </IconButton>
            {
               matches && <>
                  <Button variant='outlined' size='small' >Iniciar sesión</Button>
                  <Button variant='contained' size='small' disableElevation sx={{ ml: '10px' }}>Crea una cuenta</Button>
               </>
            }
         </Toolbar>
      </AppBar>
   );
}
