import { useRoutes } from 'react-router-dom';

// Se importan las rutas principales y de autenticación
import MainRoutes from './MainRoutes';
// import AuthenticationRoutes from './AuthenticationRoutes';

// ==============================|| RENDERIZACIÓN DE RUTAS ||============================== //

// Se exporta la función ThemeRoutes que utiliza useRoutes para renderizar las rutas MainRoutes y AuthenticationRoutes
export default function ThemeRoutes() {
  return useRoutes([MainRoutes /*AuthenticationRoutes*/]);
}
