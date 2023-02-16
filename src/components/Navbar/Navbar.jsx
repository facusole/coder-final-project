import './Navbar.css'

export default function Navbar() {
    return (
        <div className='navbar__container'>
            <div className="brand__container">
                <div className="brand__logo"></div>
                <h2 className="brand__name">
                    Pluma de Papel
                </h2>
            </div>
            <div className="searchBar__container">
                <input type="search" name="Searchbar" id="searchbar" />
            </div>
            <div>
                <ul className="menu__container">
                    <li><a href="#" className="categories">Juegos de mesa</a></li>
                    <li><a href="#" className="categories">Útiles escolares</a></li>
                    <li><a href="#" className="categories">Cuadernos</a></li>
                </ul>
            </div>
        </div>
    )
}