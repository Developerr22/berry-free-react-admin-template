import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
//lazy: es una función proporcionada por React que permite la carga diferida (lazy loading)
//de componentes. Se utiliza para cargar de forma dinámica un componente solo cuando se necesita,
//mejorando así el rendimiento de la aplicación al reducir el tiempo de carga inicial.

//Loadable:Loadable es una biblioteca externa (como react-loadable) que envuelve el componente
//devuelto por lazy y proporciona opciones adicionales para la carga diferida, como manejo de
//estados de carga, errores, entre otros. Se utiliza para gestionar de manera más avanzada
//la carga de componentes, especialmente cuando se necesita un control más granular sobre
//el proceso de carga y visualización de indicadores de carga.
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout /> /** Aqui carga la carpeta con todo lo que contiene*/,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    /*{
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },*/
    {
      path: 'utils',
      children: [
        {
          path: 'util-typography',
          element: <UtilsTypography />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-color',
          element: <UtilsColor />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-shadow',
          element: <UtilsShadow />
        }
      ]
    },
    {
      path: 'icons',
      children: [
        {
          path: 'tabler-icons',
          element: <UtilsTablerIcons />
        }
      ]
    },
    {
      path: 'icons',
      children: [
        {
          path: 'material-icons',
          element: <UtilsMaterialIcons />
        }
      ]
    },
    {
      path: 'sample-page',
      element: <SamplePage />
    }
  ]
};

export default MainRoutes;
