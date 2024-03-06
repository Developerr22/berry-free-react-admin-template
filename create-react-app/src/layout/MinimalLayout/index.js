import { Outlet } from 'react-router-dom';

// project imports
import Customization from '../Customization';

// ==============================|| DISEÑO MÍNIMO ||============================== //

// La función MinimalLayout renderiza el componente Outlet y Customization
const MinimalLayout = () => (
  <>
    {/**El Outlet se utiliza para renderizar el contenido de las rutas anidadas */}
    <Outlet />
    <Customization />
  </>
);

export default MinimalLayout;
