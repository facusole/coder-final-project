import { ShoppingCart } from 'iconsax-react';

import './Navbar.css';

export default function Navbar() {
    return (
        <div className='navbar__container mg__inline'>
            <div className="brand__container">
                <div className="brand__logo"></div>
                <h2 className="brand__name">
                    Pluma de Papel
                </h2>
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
                        <ShoppingCart size="32" color="#2ccce4" className='cart__icon'/>
                        <div className="hardcoded__number"><div className="bg__color">4</div></div>
                    </li>
                </ul>
            </div>
        </div>
    )
}