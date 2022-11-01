import { useState } from 'react';

export const useProduct = () => {

    const [counter, setCounter] = useState(0);

    const increaseBy = (value: number) => {
        //usamos Math.max( prev + value, 0) para que elija el valor maximo entre prev + value o 0
        //esto lo hacemos porque si tenemos valores negativos elija el cero y no baje de cero el contador
        //de esta manera con un solo metodo ponemos tanto aumentar como decrementar
        setCounter(prev => Math.max(prev + value, 0));
    }


    return {
        counter,
        increaseBy
    }
}
