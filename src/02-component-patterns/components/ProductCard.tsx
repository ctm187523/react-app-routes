//importamos los estilos en modulos como hicimoos en styles/styles.module.css
import styles from '../styles/styles.module.css';

//importamos el customHook creado
import { useProduct } from '../hooks/useProduct';

import { createContext, ReactElement } from 'react';
import { ProductContextProps, Product } from '../interfaces/interfaces';



//Utilizamos el Context APi para compartir informacion entre padres y hijos alternativo a la props
//creamos un contexto para intercambiar informacion entre padres y hijos() lo tipamos con la interfaz 
//importada de interfaces/interfaces
export const ProductContex = createContext({} as ProductContextProps);
//desestructuramos del ProductContext el Provider(es un Higher Order Component)que es el proveedor de informacion
//lo colocaremos en el return del componente principal ProductCard para que envuelva todos los componentes
const { Provider } = ProductContex;

//creamos una interface para definir las props que recibiremos del padre
export interface Props {
    product: Product;
    children?: ReactElement | ReactElement[] //tipado para los componentes hijos recibidos puede ser uno o varios en forma de array
    className?: string; //usamos el className para dar estilos a los componentes
    style?: React.CSSProperties; //usamos este atributo para poder poner estilos en linea de tipo React.CSSProperties usado en el ultimo elemento creado en el ShoppingPagwe
}


//componente principal recibe los props children y el product del archivo ShoppingPage.tsx
//en el children implementa los componentes , tipamos con la interfaz Props creada arriba
export const ProductCard = ({ children, product, className, style }: Props) => {

    //usamos el custom hook creado por nosotros en hooks/useProduct
    const { counter, increaseBy } = useProduct();

    return (
        //usamos el Privider definido arriba para pasar informacion entre padres y hijos el value es lo que se comparte
        <Provider value={{
            counter,
            increaseBy,
            product
        }}>
            {/* usamos el classname recibido del componente ShoppingPage al crear el compound component */}
            <div className={`${styles.productCard} ${className}`}
                //le pasamos el style recibido en las props para crear un estilo en linea
                style={style}
            >

                {children}

            </div>
        </Provider>

    )
}


