import { Props as ProductButtonsProps } from '../components/ProductButtons';
import { Props as ProductCardProps } from '../components/ProductCard';
import { Props as ProductImageProps } from '../components/ProductImage';
import { Props as ProductTitleProps } from '../components/ProductTitle';



//creamos un archivo donde almacenaremos todas las interfaces que usamos en 
//el archivo componets/ProductCard.tsx


//creamos la interface con los atributos de Product 
export interface Product {
    id: string;
    title: string;
    img?: string; //la imagen es opcional
}


//creamos un interfaz para tipar el contexto ProductContext  compartir informacion entre padres y hijos
export interface ProductContextProps {
    counter: number;
    increaseBy: (value: number) => void;
    product: Product;
}

//creamos una interfaz para tipar en el components/index.ts ProductCard
//la interfaz Props la importamos de components/ProductCard linea 1 como ProductCardProps
export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps ):JSX.Element,
    //importamos las Props de despues de los dos puntos de /components/ProductTitle ver linea 2
    Title: ( Props: ProductTitleProps) => JSX.Element,
    //importamos las Props de despues de los dos puntos de /components/ProductImage ver linea 3
    Image: ( Props: ProductImageProps) => JSX.Element,
     //importamos las Props de despues de los dos puntos de /components/ProductButtons ver linea 4
    Buttons: (Props: ProductButtonsProps ) => JSX.Element
}
