// Importación de los hooks useDispatch y useSelector desde 'react-redux'
import { useDispatch, useSelector } from 'react-redux';
// Importación del componente Outlet desde 'react-router-dom'
import { Outlet } from 'react-router-dom';

// Importación de componentes de material-ui
import { styled, useTheme } from '@mui/material/styles';
import { AppBar, Box, CssBaseline, Toolbar, useMediaQuery } from '@mui/material';

// Importación de componentes personalizados
import Breadcrumbs from 'ui-component/extended/Breadcrumbs';
import Header from './Header';
import Sidebar from './Sidebar';
import Customization from '../Customization';
import navigation from 'menu-items';
import { drawerWidth } from 'store/constant';
import { SET_MENU } from 'store/actions';

// Importación de iconos desde '@tabler/icons-react'
import { IconChevronRight } from '@tabler/icons-react';

// Estilos personalizados para el componente Main
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' && prop !== 'theme' })(({ theme, open }) => ({
  ...theme.typography.mainContent,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  transition: theme.transitions.create(
    'margin',
    open
      ? {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen
        }
      : {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen
        }
  ),
  [theme.breakpoints.up('md')]: {
    marginLeft: open ? 0 : -(drawerWidth - 20),
    width: `calc(100% - ${drawerWidth}px)`
  },
  [theme.breakpoints.down('md')]: {
    marginLeft: '20px',
    width: `calc(100% - ${drawerWidth}px)`,
    padding: '16px'
  },
  [theme.breakpoints.down('sm')]: {
    marginLeft: '10px',
    width: `calc(100% - ${drawerWidth}px)`,
    padding: '16px',
    marginRight: '10px'
  }
}));

// ==============================|| MAIN LAYOUT ||============================== //

// Definición del componente funcional MainLayout
const MainLayout = () => {
  // Uso del hook useTheme para acceder al tema actual
  const theme = useTheme();
  // Uso del hook useMediaQuery para determinar si la pantalla está por debajo de 'md'
  const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));
  // Estado para controlar si el cajón izquierdo está abierto
  const leftDrawerOpened = useSelector((state) => state.customization.opened);
  // Función para alternar la apertura y cierre del cajón izquierdo
  const dispatch = useDispatch();
  const handleLeftDrawerToggle = () => {
    dispatch({ type: SET_MENU, opened: !leftDrawerOpened });
  };

  // Renderizado del componente MainLayout
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* Encabezado de la aplicación */}
      <AppBar
        enableColorOnDark
        position="fixed"
        color="inherit"
        elevation={0}
        sx={{
          bgcolor: theme.palette.background.default,
          transition: leftDrawerOpened ? theme.transitions.create('width') : 'none'
          //backgroundColor:'red'
        }}
      >
        <Toolbar>
          <Header handleLeftDrawerToggle={handleLeftDrawerToggle} />
        </Toolbar>
      </AppBar>

      {/* Cajón lateral */}
      <Sidebar drawerOpen={!matchDownMd ? leftDrawerOpened : !leftDrawerOpened} drawerToggle={handleLeftDrawerToggle} />

      {/* Contenido principal */}
      <Main theme={theme} open={leftDrawerOpened}>
        {/* Migas de pan */}
        <Breadcrumbs separator={IconChevronRight} navigation={navigation} icon title rightAlign />
        <Outlet />
      </Main>
      <Customization />
    </Box>
  );
};

// Exportación por defecto del componente MainLayout
export default MainLayout;
