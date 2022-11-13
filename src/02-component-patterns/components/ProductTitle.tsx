import { useContext } from 'react';
import { ProductContex } from './ProductCard';

//importamos los estilos en modulos como hicimoos en styles/styles.module.css
import styles from '../styles/styles.module.css';


//creamos una interface para tipar las props
export interface Props {
    title?: string,
    className?: string //className para los estilos personalizados mandados desde ShoppingPage al componente
    style?: React.CSSProperties; //usamos este atributo para poder poner estilos en linea de tipo React.CSSProperties usado en el ultimo elemento creado en el ShoppingPagwe
}

//creamos un componente para el titulo, podiamos haver puesto title = '' como string vacio pero
//lo hemos echo de otra manera poniendo que title es de tipo string como en la interfaz Product
//ponemos que el titulo es opcional
export const ProductTitle = ({ title, className, style }: Props) => {

    //usamos el Provider creado en ProductCard.tsx para recibir las propiedades comunes
    //usando para ello el useContext
    const { product } = useContext(ProductContex);

    return (
        // aplicamos los estilos el className lo recibimos de las Props recibidas de ShoppingPage.tsx
        <span
            className={`${styles.productDescription} ${className}`}
            //le pasamos el style recibido en las props para crear un estilo en linea
            style={style}
        >
            {/* ponemos en un ternario que si el titulo viene pongamos el que viene si no el que viene
            en el product que es el objeeto que recibimos en ShoppingPage */}
            { title ? title : product.title} </span>
    )
}
