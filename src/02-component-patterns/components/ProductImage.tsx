import { useContext } from 'react';
import { ProductContextProps } from '../interfaces/interfaces';
import { ProductContex } from './ProductCard';

//importamos la imagen por defecto en caso de no recibir ninguna imagen
import noImage from '../assets/no-image.jpg';

//importamos los estilos en modulos como hicimoos en styles/styles.module.css
import styles from '../styles/styles.module.css';

//creamos un componente para la imagen hacemos que el parametro recibido, la imagen
//img sea un string vacio de esta manera es opcional
export const ProductImage = ({ img = '' }) => {

    //usamos el Provider creado en ProductCard.tsx para recibir las propiedades comunes
    //usando para ello el useContext
    const { product } = useContext(ProductContex);

    //evaluamos el product donde contien la image para ver si es recibida
    let imgToShow: string; //creamos una variable que sera la imagen a mostrar


    if (img) { //si la imagen viene en las props usamos la imagen recibida
        imgToShow = img;
    } else if (product.img) { //si el product recibido en el useContext viene usamos la imagen
        imgToShow = product.img
    } else { // si no viene ninguna imagen usamos la imagen por defecto
        imgToShow = noImage;
    }

    return (

        <img className={styles.productImg} src={imgToShow} alt="Product image" />
    )
}