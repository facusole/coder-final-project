import CartWidget from './CartWidget/CartWidget';
import BrandLogo from '../../assets/pluma-logo.webp'

import './Navbar.css';

export default function Navbar() {
    return (
        <nav className='navbar__container mg__inline'>
            <div className="brand__container">
                <a href="#"><img src={BrandLogo} aria-label='Pluma de Papel' className='brand__logo' alt="Logo de la marca Pluma de papel" /></a>
                {/* <h2 className="brand__name">
                    Pluma de Papel
                </h2> */}
            </div>
            <div className="searchBar__container">
                <label htmlFor="searchbar" className='visually-hidden'>Buscá tu producto deseado</label>
                <input  type="search" 
                        autoComplete='off'
                        spellCheck='off'
                        placeholder='Buscá tu producto deseado'
                        aria-label='Ingresá lo que estás buscando'
                        name="Searchbar" 
                        className='searchbar__input'
                        id="searchbar" />
            </div>
            <div>
                <ul className="menu__container">
                    <li><a href="#" className="categories">Juegos de mesa</a></li>
                    <li><a href="#" className="categories">Útiles escolares</a></li>
                    <li><a href="#" className="categories">Cuadernos</a></li>
                    <li className="shopping__cart">
                        <CartWidget />
                        <div className="hardcoded__number"><div className="bg__color">4</div></div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}