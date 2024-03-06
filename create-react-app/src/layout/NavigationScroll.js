import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// ==============================|| NAVEGACIÓN CON DESPLAZAMIENTO HACIA ARRIBA ||============================== //

// Se define el componente NavigationScroll que recibe como argumento 'children'.
// Se obtiene la ubicación actual utilizando el hook useLocation de react-router-dom.
// Se extrae la propiedad 'pathname' de la ubicación.

const NavigationScroll = ({ children }) => {
  const location = useLocation();
  const { pathname } = location;

  // Se utiliza el efecto useEffect para desplazar la ventana hacia arriba cuando cambia la 'pathname'.
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  // Se retorna 'children' si existe, de lo contrario se retorna 'null'.
  return children || null;
};

// Se definen las propiedades del componente NavigationScroll.
NavigationScroll.propTypes = {
  children: PropTypes.node
};

export default NavigationScroll;
