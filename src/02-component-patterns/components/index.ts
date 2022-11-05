import { ProductCard as ProductCardHOC } from './ProductCard';

import  { ProductButtons } from './ProductButtons';
import  { ProductImage } from './ProductImage';
import  { ProductTitle } from './ProductTitle';
import { ProductCardHOCProps } from '../interfaces/interfaces';

export  { ProductButtons } from './ProductButtons';
export  { ProductImage } from './ProductImage';
export  { ProductTitle } from './ProductTitle';



//creamos un componente para poder exportar los demas componentes
//usamos Object.assign, tipamos con la interfaz ProductCardHOCProps creada
//en interfaces/interfaces
export const ProductCard: ProductCardHOCProps = Object.assign( ProductCardHOC, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons
})

export default ProductCard;