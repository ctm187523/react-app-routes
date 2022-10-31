//instalamos router 6 --> yarn add react-router-dom@6 
import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { routes } from './routes';
import logo from '../logo.svg';
import { Suspense } from 'react';

export const Navigation = () => {
    return (
        //para usar el lazy load debemos envolver el BrowserRouter con el Suspense importado arriba
        //el suspense sirve para decirle a React que cuando cargamos algun modulo o componente que espere
        //en el fallback podemos poner un modulo que indica la carga del componente
        <Suspense fallback={ <span>Loading...</span>}>
            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={logo} alt="React Logo" />
                        <ul>
                            {
                                // colocamos el classname y dentro de ella una funcion de flecha con el parametro
                                // isActive si el link esta activo usamos el css del archivo index.css nav-active en caso contrario
                                // mandamos un string vacio
                                // Creamos los NavLink dinámicos usando el archivo exportado arriba routes creado por mi*/}
                                // ponemos un parantesis despues de la flecha porque retorna un jsx
                                routes.map(route => (
                                    <li key={route.to}>
                                        <NavLink
                                            to={route.to}
                                            className={({ isActive }) => isActive ? 'nav-active' : ''}>
                                            {route.name}
                                        </NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>

                    {/* definimos las rutas como hicimos arriba las definimos dinamicamente usando el arichivo importado routes.ts*/}
                    <Routes>

                        {
                            //en este caso hemos desestructurado el route
                            routes.map(({ path, Component, to }) => (
                                <Route
                                    key={to}
                                    path={path}
                                    element={< Component />}
                                />
                            ))
                        }

                        {/* ruta alternativa por si no coincide ningna de las rutas el replace se pone
                     para que no pueda regresar, usamos el array routes creado en routes.js como hicimos arriba
                     sin usar el map*/}
                        <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </Suspense>
    )
}
