import { useContext } from 'react';
import { ProductContex } from './ProductCard';

//importamos los estilos en modulos como hicimoos en styles/styles.module.css
import styles from '../styles/styles.module.css';

//creamos una interfaz para tipar las Props
export interface Props {
    className?: string;
    style?: React.CSSProperties; //usamos este atributo para poder poner estilos en linea de tipo React.CSSProperties usado en el ultimo elemento creado en el ShoppingPagwe
}

//creamos un componente para manejar los botones
export const ProductButtons = ({ className, style }: Props) => {

    //usamos el Provider creado en ProductCard.tsx para recibir las propiedades comunes
    //usando para ello el useContext
    const { increaseBy, counter } = useContext(ProductContex)

    return (
        <div
            className={`${styles.buttonsContainer} ${className}`}
            //le pasamos el style recibido en las props para crear un estilo en linea
            style={style}
        >
            <button
                className={styles.buttonMinus}
                onClick={() => increaseBy(-1)}
            > - </button>

            <div className={styles.countLabel}> {counter} </div>

            <button
                className={styles.buttonAdd}
                onClick={() => increaseBy(1)}
            > + </button>

        </div>
    );
}