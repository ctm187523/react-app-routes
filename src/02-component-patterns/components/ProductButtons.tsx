import { useContext } from 'react';
import { ProductContex } from './ProductCard';

//importamos los estilos en modulos como hicimoos en styles/styles.module.css
import styles from '../styles/styles.module.css';

//creamos un componente para manejar los botones
export const ProductButtons = () => {

    //usamos el Provider creado en ProductCard.tsx para recibir las propiedades comunes
    //usando para ello el useContext
    const { increaseBy, counter } = useContext(ProductContex)

    return (
        <div className={styles.buttonsContainer}>
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