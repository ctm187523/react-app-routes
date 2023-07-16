import { lazy, LazyExoticComponent } from 'react';
import { NoLazy } from '../01-lazyload/pages/NoLazy';


//creamos un archivo para crear las rutas dinamicas que usaremos en el archivo Navigation.jsx


//creamos un type para en el Component de la interfaz de abajo los componentes puedan ser
//de tipo lazy load ->  React.LazyExoticComponent<() => JSX.Element> o de tipo component () => JSX.Element
type JSXComponent = () => JSX.Element; //ponemos que es de tipo component


//interfaz para el tipado
interface Route {
    to: string,
    path: string,
    Component:  LazyExoticComponent< JSXComponent > | JSXComponent // LazyExoticComponent<() => JSX.Element> es el tipo que tiene un componete con lazy load ponemos que puede ser de tipo component o lazy load, lo ponemos con la c mayuscula poruque sera un componente y estos deben ir en mayuscula la primera letra
    name: string
}

//creamos los lazyload que es un componente que sera cargado bajo demanda
//el /* webpackCunkName: "LazyLayout */ lo usamos para cambiar el nombre del chunk
//para cuando en el navegodor en herramientas de desarrolladores network/all identificamos el componente que se carga
//importamos el componente lazy de React
const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout" */'../01-lazyload/layout/lazyLayout'));


//usamos la interfaz creada arriba para el tipado decimos que es un array de tipo Route
export const routes: Route[] = [
    {
        path: '/lazyload/*', //ponemos el asterisco para indicar que despues del lazyload iran las rutas hijas
        to: '/lazyload/',
        Component: LazyLayout,//cargamos con lazy load
        name: 'LazyLayout - Dash'
    },
    {
        path: 'no-lazy',
        to: '/no-lazy',
        Component: NoLazy,  //cargamos sin lazy load
        name: 'No Lazy'
    },
]