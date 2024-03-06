// Se importa el icono IconKey desde '@tabler/icons-react'
import { IconKey } from '@tabler/icons-react';

// Se define un objeto 'icons' que contiene el icono IconKey
const icons = {
  IconKey
};

// ==============================|| ELEMENTOS DEL MENÚ DE PÁGINAS EXTRA ||============================== //

// Se define un objeto 'pages' que representa un grupo de páginas
const pages = {
  id: 'pages',
  title: 'Gestion de RR.HH',
  caption: 'recursos humanos',
  type: 'group',
  children: [
    {
      id: 'authentication',
      title: 'Autenticación',
      type: 'collapse',
      icon: icons.IconKey,

      children: [
        {
          id: 'login3',
          title: 'Iniciar sesión',
          type: 'item',
          url: '/pages/login/login3',
          target: true
        },
        {
          id: 'register3',
          title: 'Registrarse',
          type: 'item',
          url: '/pages/register/register3',
          target: true
        }
      ]
    }
  ]
};

export default pages;
