import { CartWidget } from '../CartWidget/CartWidget'
import './NavBar.css'
import { Link } from 'react-router-dom'
import { useLoginContext } from '../../context/LoginContext'

export const Navbar = () =>{
    const { user, logout} = useLoginContext()
    return (
            <>
            <header className="header">
            <h1 className="header_logo my-4">NatPotencia</h1>

            <nav className="my-4">
                <Link className="header_link" to="/home">Inicio</Link>
                <Link className="header_link" to="/productos">Productos</Link>
                <Link className="header_link" to="/productos/corporal">Corporal</Link>
                <Link className="header_link" to="/productos/maquillaje">Maquillaje</Link>
                <Link className="header_link" to="/productos/capilar">Capilar</Link>
                <Link className="header_link" to="/productos/suplementos">Suplementos</Link>
                <CartWidget/>
            </nav>
            <div className='header-container'>
                <p className="m-2 user-welcome">Bienvenido {user.email}</p>
                <Link to="login" className="btn btn-danger m-2" onClick={logout}>Logout</Link>
            </div>
            </header>
            </>  
  )
}