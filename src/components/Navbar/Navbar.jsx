import CartWidget from './CartWidget/CartWidget';
import BrandLogo from '../../assets/pluma-logo.webp'

import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className='navbar__container mg__inline'>
            <div className="brand__container">
                <Link to='/'><img src={BrandLogo} aria-label='Pluma de Papel' className='brand__logo' alt="Logo de la marca Pluma de papel" /></Link>
            </div>
            <div className="searchBar__container">
                <label htmlFor="searchbar" className='visually-hidden'>Buscá tu producto deseado</label>
                <input  type="search" 
                        autoComplete='off'
                        spellCheck='off'
                        placeholder='Buscar'
                        aria-label='Ingresá lo que estás buscando'
                        name="Searchbar" 
                        className='searchbar__input'
                        id="searchbar" />
            </div>
            <div>
                <Link to='/cart'><CartWidget /></Link>
                {/* <ul className="menu__container">
                    <li><Link to="/category/juegos-de-mesa" className="categories">Juegos de mesa</Link></li>
                    <li><Link to="/category/utiles-escolares" className="categories">Útiles escolares</Link></li>
                    <li><Link to="/category/cuadernos" className="categories">Cuadernos</Link></li>
                    <li className="shopping__cart">
                        
                    </li>
                    </ul> */}
            </div>
        </nav>
    )
}