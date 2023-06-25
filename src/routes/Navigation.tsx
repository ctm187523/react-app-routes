import { Routes, Route, NavLink, Navigate, BrowserRouter } from "react-router-dom";
import { ShoppingPage } from "../02-component-patterns/pages/ShoppingPage";

import logo from '../logo.svg'
export const Navigation = () => {
    return (
        <BrowserRouter>
            {/* ver estilos de el classname main-layout en index.css */}
            <div className="main-layout">
                {/* ver los estilos en index.css del nav */}
                <nav>
                    <img src={logo} alt="React Logo" />
                    <ul>
                        <li>
                            {/* usamos el classname con una funcion de flecha que nos dice que si el link este activo muestre un estilo 
                            definido en el index.css usando una condicion terciaria*/}
                            <NavLink to="/home" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Shopping</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/users" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Users</NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="about" element={<h1> About Page</h1>} />
                    <Route path="users" element={<h1> Users Page</h1>} />
                    <Route path="home" element={ <ShoppingPage />} />

                    {/* ponemos una ruta alternativa si no coincide la url mande al home
                    el replace es para que no pueda volver */}
                    <Route path="/*" element={ <Navigate to="/home" replace/> } />
                </Routes>
            </div>
        </BrowserRouter>
    )
}
