import { useSelector } from 'react-redux';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

// routing
import Routes from 'Routers'; //aqui importamos la carpeta de los rutas con todo los archivos

// defaultTheme
import themes from 'themes';

// project imports
import NavigationScroll from 'layout/NavigationScroll';

// ==============================|| APP ||============================== //

// Se importan las dependencias necesarias para el componente App, como useSelector de react-redux para acceder al estado global,
//ThemeProvider de Material-UI para el manejo de temas, CssBaseline y StyledEngineProvider de Material-UI para estilos base y configuración
//del motor de estilos respectivamente, Routes para las rutas de la aplicación, themes para los temas personalizados y NavigationScroll
//para el componente de navegación con scroll.

const App = () => {
  const customization = useSelector((state) => state.customization);

  // Se define el componente funcional App que utiliza el hook useSelector para acceder al estado de personalización desde el store global.
  // Dentro del return se encuentran los componentes anidados en el orden adecuado para la estructura de la aplicación,
  //como StyledEngineProvider, ThemeProvider con el tema personalizado, CssBaseline para los estilos base, NavigationScroll que envuelve
  //las rutas de la aplicación y finalmente las rutas representadas por el componente Routes.

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes(customization)}>
        <CssBaseline />
        <NavigationScroll>
          <Routes />
        </NavigationScroll>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
