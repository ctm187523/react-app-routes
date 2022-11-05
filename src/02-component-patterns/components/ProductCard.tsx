//importamos los estilos en modulos como hicimoos en styles/styles.module.css
import styles from '../styles/styles.module.css';

//importamos el customHook creado
import { useProduct } from '../hooks/useProduct';

import { createContext } from 'react';
import { ProductContextProps, ProductCardProps } from '../interfaces/interfaces';



//Utilizamos el Context APi para compartir informacion entre padres y hijos alternativo a la props
//creamos un contexto para intercambiar informacion entre padres y hijos() lo tipamos con la interfaz 
//importada de interfaces/interfaces
export const ProductContex = createContext({} as ProductContextProps);
//desestructuramos del ProductContext el Provider(es un Higher Order Component)que es el proveedor de informacion
//lo colocaremos en el return del componente principal ProductCard para que envuelva todos los componentes
const { Provider } = ProductContex;


//componente principal recibe los props children y el product del archivo ShoppingPage.tsx
//en el children implementa los componentes , tipamos con la interfaz creada en interfaces/interfaces
export const ProductCard = ({ children, product }: ProductCardProps) => {

    //usamos el custom hook creado por nosotros en hooks/useProduct
    const { counter, increaseBy } = useProduct();

    return (
        //usamos el Privider definido arriba para pasar informacion entre padres y hijos el value es lo que se comparte
        <Provider value={{
            counter,
            increaseBy,
            product
        }}>
            <div className={styles.productCard}>

                {children}

            </div>
        </Provider>

    )
}


