//importamos los estilos en modulos como hicimoos en styles/styles.module.css
import styles from '../styles/styles.module.css';

//importamos la imagen
import noImage from '../assets/no-image.jpg';

//importamos el customHook creado
import { useProduct } from '../hooks/useProduct';


//creamos uan interface para definir las props que recibiremos del padre
interface Props {
    product: Product;
}

//creamos la interface con los atributos de Product 
interface Product {
    id: string;
    title: string;
    img?: string; //la imagen es opcional
}



//DIVIDIMOS LOS COMPONENTES PRINCIPALES

//creamos un componente para la imagen hacemos que el parametro recibido, la imagen
//img sea un string vacio de esta manera es opcional
export const ProductImage = ({ img = '' }) => {
    return (
        // le decimos en es src que si existe la imagen si la ha enviado en las props las use si no
        // que use la imagen por defecto noImage importada arriba, si no hay imagen usa el string vacio que
        // para un ternario es false
        <img className={styles.productImg} src={img ? img : noImage} alt="Product image" />
    )
}

//creamos un componente para el titulo, podiamos haver puesto title = '' como string vacio pero
//lo hemos echo de otra manera poniendo que title es de tipo string como en la interfaz Product, si lo hacemos de la manera que lo
//hemos puesto estamos obligando ha que tiene que venir el titulo no es opcional como con una cadena vacia
export const ProductTitle = ({ title }: { title: string }) => {
    return (
        <span className={styles.productDescription}> { title} </span>
    )
}



//creamos una interfaz para tipar el componente de abajo ProductButtons
interface ProductButtonsProps {

    increaseBy: (value:number) => void; //tipo funcion recibe como argumento un entero y no devuelve nada(void)
    counter: number;

}

//creamos un componente para manejar los botones
export const ProductButtons = ({ increaseBy, counter }: ProductButtonsProps) => {

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

//componente principal donde usamos los componentes creados arriba 
export const ProductCard = ({ product }: Props) => {

    //usamos el custom hook creado por nosotros en hooks/useProduct
    const { counter, increaseBy } = useProduct();


    return (
        <div className={styles.productCard}>

            {/* usamos el componente ProductImage creado arriba como props le mandamos la imagen recibida en las props la imagen enviada o la imagen por defecto*/}
            <ProductImage img={product.img} />

            {/* usamos el componente ProductTitle creado arriba pasando las props recibidas */}
            <ProductTitle title={product.title} />

            {/* usamos el componente ProductButtons y le pasamos la funcion increaseBy y la constante counter
            del customHook creado por nosotros y declarado arriba de este componente ProductCard  */}
            <ProductButtons increaseBy={ increaseBy } counter={ counter }/>


        </div>
    )
}
