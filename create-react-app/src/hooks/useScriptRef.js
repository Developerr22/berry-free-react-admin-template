import { useEffect, useRef } from 'react';

// ==============================|| HOOK DE REFERENCIA AL SCRIPT  ||============================== //

// Este hook devuelve una referencia mutable que se inicializa en true y se actualiza a false cuando el componente se desmonta.
const useScriptRef = () => {
  const scripted = useRef(true);

  useEffect(
    () => () => {
      scripted.current = false;
    },
    []
  );

  return scripted;
};

export default useScriptRef;
