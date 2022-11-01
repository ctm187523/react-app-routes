import React from 'react'
import { Navigate, NavLink, Route, Routes } from 'react-router-dom'
import { LazyPage1, LazyPage2, LazyPage3 } from '../pages'

//cargamos el componente principal de manera perezosa, solo se cargara si es solicitado
// sus hijos tendran una carga sin lazyload cuando se carga el padre se cargan todos los hijos a la vez
export const lazyLayout = () => {
    return (
        <div>
           <h1>LazyLayout Page</h1> 

           {/* Rutas hijas*/}
           <ul>
               <li>
                   {/* cargamos los componentes de manera no perezosa */}
                   <NavLink to="lazy1">Lazy 1</NavLink>
               </li>
               <li>
                   {/* cargamos los componentes de manera no perezosa */}
                   <NavLink to="lazy2">Lazy 2</NavLink>
               </li>
               <li>
                   {/* cargamos los componentes de manera no perezosa */}
                   <NavLink to="lazy3">Lazy 3</NavLink>
               </li>
           </ul>

           <Routes>
               <Route path="lazy1" element= { <LazyPage1 />}/>
               <Route path="lazy2" element= { <LazyPage2 />}/>
               <Route path="lazy3" element= { <LazyPage3 />}/>

               {/* <Route path="/*" element={ <div>Not Found</div>} /> */}
               <Route path="/*" element={ <Navigate replace  to="lazy1" /> } />
           </Routes>
        </div>
    )
}


//debemos exportar por defecto para usar el LazyLoad
export default lazyLayout;
