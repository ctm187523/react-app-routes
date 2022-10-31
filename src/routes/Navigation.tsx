//instalamos router 6 --> yarn add react-router-dom@6 
import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { LazyPage1, LazyPage2, LazyPage3} from '../01-lazyload/pages';

import logo from '../logo.svg'

export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="React Logo" />
                    <ul>
                        <li>
                            {/* colocamos el classname y dentro de ella una funcion de flecha con el parametro
                            isActive si el link esta activo usamos el css del archivo index.css nav-active en caso contrario
                            mandamos un string vacio*/}
                            <NavLink to="/lazy1" className={ ({ isActive }) => isActive ? 'nav-active' : ''}>Lazy 1</NavLink>
                        </li>
                        <li>
                            <NavLink to="/lazy2" className={ ({ isActive }) => isActive ? 'nav-active' : ''}>Lazy 2</NavLink>
                        </li>
                        <li>
                            <NavLink to="/lazy3" className={ ({ isActive }) => isActive ? 'nav-active' : ''}>Lazy 3</NavLink>
                        </li>
                    </ul>
                </nav>

                {/* definimos las rutas */}
                <Routes>
                    <Route path="lazy1" element={ <LazyPage1/> }/>
                    <Route path="lazy2" element={ <LazyPage2/> }/>
                    <Route path="lazy3" element={ <LazyPage3/>  }/>

                    {/* ruta alternativa por si no coincide ningna de las rutas el replace se pone
                     para que no pueda regresar*/}
                    <Route path="/*" element={ <Navigate to="/lazy1" replace /> } />
                </Routes>
            </div>
        </BrowserRouter>
    )
}
