import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import { ButtonBase } from '@mui/material';

// project imports
import config from 'config';
import Logo from 'ui-component/Logo';
import { MENU_OPEN } from 'store/actions';

// ==============================|| MAIN LOGO ||============================== //

// Definición de la sección del logo
const LogoSection = () => {
  // Obtener el id por defecto desde el estado de personalización
  const defaultId = useSelector((state) => state.customization.defaultId);
  // Obtener la función de despacho de acciones
  const dispatch = useDispatch();
  // Retornar el componente del logo con un botón base que al hacer clic despacha la acción de abrir el menú con el id por defecto
  return (
    /**Al momento de hacer click en el logo por defecto me va a seleccionar el menu-item/dashboard por que tiene el ID:default */
    <ButtonBase disableRipple onClick={() => dispatch({ type: MENU_OPEN, id: defaultId })} component={Link} to={config.defaultPath}>
      <Logo />
    </ButtonBase>
  );
};

export default LogoSection;
