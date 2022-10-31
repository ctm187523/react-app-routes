import { lazy, LazyExoticComponent } from 'react';
import { LazyPage1, LazyPage2, LazyPage3} from '../01-lazyload/pages';


//creamos un archivo para crear las rutas dinamicas que usaremos en el archivo Navigation.jsx


//creamos un type para en el Component de la interfaz de abajo los componentes puedan ser
//de tipo lazy load ->  React.LazyExoticComponent<() => JSX.Element> o de tipo component () => JSX.Element
type JSXComponent = () => JSX.Element; //ponemos que es de tipo component


//interfaz para el tipado
interface Route {
    to: string,
    path: string,
    Component:  LazyExoticComponent<() => JSX.Element> | JSXComponent // LazyExoticComponent<() => JSX.Element> es el tipo que tiene un componete con lazy load ponemos que puede ser de tipo componet o lazy load, lo ponemos con la c mayuscula poruque sera un componente y estos deben ir en mayuscula la primera letra
    name: string
}

//creamos los lazyload que es un componente que sera cargado bajo demanda
//el /* webpackCunkName: "LazyPage1 */ lo usamos para cambiar el nombre del chunk
//para cuando en el navegodor en herramientas de desarrolladores network identificamos el componente que se carga
//importamos el componente lazy de React
const Lazy1 = lazy(() => import(/* webpackChunkName: "LazyPage1" */'../01-lazyload/pages/LazyPage1'));
const Lazy2 = lazy(() => import(/* webpackChunkName: "LazyPage2" */'../01-lazyload/pages/LazyPage2'));
const Lazy3 = lazy(() => import(/* webpackChunkName: "LazyPage3" */'../01-lazyload/pages/LazyPage3'));

//usamos la interfaz creada arriba para el tipado decimos que es un array de tipo Route
export const routes: Route[] = [
    {
        to: '/lazy1',
        path: 'lazy1',
        Component: Lazy1,//colocamos los lazy load creados arriba en lugar de los compontenes importados en la linea 2
        name: 'Lazy-1'
    },
    {
        to: '/lazy2',
        path: 'lazy2',
        Component: Lazy2, //colocamos los lazy load creados arriba en lugar de los compontenes importados en la linea 2
        name: 'Lazy-2'
    },
    {
        to: '/lazy3',
        path: 'lazy3',
        Component: Lazy3, //le ponemos que es de tipo component no lazyload
        name: 'Lazy-3'
    },
]