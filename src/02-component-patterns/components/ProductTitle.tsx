import { useContext } from 'react';
import { ProductContex } from './ProductCard';

//importamos los estilos en modulos como hicimoos en styles/styles.module.css
import styles from '../styles/styles.module.css';

//creamos un componente para el titulo, podiamos haver puesto title = '' como string vacio pero
//lo hemos echo de otra manera poniendo que title es de tipo string como en la interfaz Product
//ponemos que el titulo es opcional
export const ProductTitle = ({ title = '' }: { title?: string }) => {

    //usamos el Provider creado en ProductCard.tsx para recibir las propiedades comunes
    //usando para ello el useContext
    const { product } = useContext(ProductContex);

    return (
        <span className={styles.productDescription}>
            {/* ponemos en un ternario que si el titulo viene pongamos el que viene si no el que viene
            en el product que es el objeeto que recibimos en ShoppingPage */}
            { title ? title : product.title} </span>
    )
}
