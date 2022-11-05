import { ReactElement } from 'react';


//creamos un archivo donde almacenaremos todas las interfaces que usamos en 
//el archivo componets/ProductCard.tsx

//creamos uan interface para definir las props que recibiremos del padre
export interface ProductCardProps {
    product: Product;
    children?: ReactElement | ReactElement[] //tipado para los componentes hijos recibidos puede ser uno o varios en forma de array
}

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
export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps ):JSX.Element,
    Title: ({ title }: { title?: string }) => JSX.Element,
    Image: ({ img }: { img?: string }) => JSX.Element,
    Buttons: () => JSX.Element
}
