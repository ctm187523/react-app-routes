import { useContext } from 'react';
import { ProductContextProps } from '../interfaces/interfaces';
import { ProductContex } from './ProductCard';

//importamos la imagen por defecto en caso de no recibir ninguna imagen
import noImage from '../assets/no-image.jpg';

//importamos los estilos en modulos como hicimoos en styles/styles.module.css
import styles from '../styles/styles.module.css';

//creamos una interfaz para tipar las props
export interface Props {
    img?: string,
    className?: string //className para los estilos personalizados mandados desde ShoppingPage al componente
    style?: React.CSSProperties; //usamos este atributo para poder poner estilos en linea de tipo React.CSSProperties usado en el ultimo elemento creado en el ShoppingPagwe
}
//creamos un componente para la imagen hacemos que el parametro recibido, la imagen
//img sea un string vacio de esta manera es opcional
export const ProductImage = ({ img, className, style }: Props) => {

    //usamos el Provider creado en ProductCard.tsx para recibir las propiedades comunes
    //usando para ello el useContext
    const { product } = useContext(ProductContex);

    //evaluamos el product donde contien la image para ver si es recibida
    let imgToShow: string; //creamos una variable que sera la imagen a mostrar


    if (img) { //si la imagen viene en las props usamos la imagen recibida
        imgToShow = img;
    } else if (product.img) { //si no, si viene en el  product usamos la imagen
        imgToShow = product.img
    } else { // si no viene ninguna imagen ni en las props ni en el product usamos la imagen por defecto
        imgToShow = noImage;
    }

    return (

        <img
            className={`${styles.productImg} ${className}`}
            src={imgToShow} alt="Product image"
            //le pasamos el style recibido en las props para crear un estilo en linea
            style={style}
        />
    )
}