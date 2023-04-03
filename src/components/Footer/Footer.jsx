import { Link } from 'react-router-dom'
import { Instagram, Whatsapp } from 'iconsax-react'

import './Footer.css'

export default function Footer() {
    return (
        <div className="mg__inline footer__container">
            <div className="footer__address">
                <h2>Pluma de Papel</h2>
                <h3>Teniente Ettiene, Fernando de la Mora, Asunción, Paraguay</h3>
            </div>

            <ul className='footer__links'>
                <li><Link className='footer__link' to={"/category/utiles-escolares"}>Útiles escolares</Link></li>
                <li><Link className='footer__link' to={"/category/cuadernos"}>Cuadernos</Link></li>
                <li><Link className='footer__link' to={"/category/juegos-de-mesa"}>Juegos de mesa</Link></li>
            </ul>

            <ul className='footer__social__media'>
                <li><a href="https://www.instagram.com/pluma_de_papel/" target="_blank" rel="noopener noreferrer"></a><Instagram size={40}/></li>
                <li><a href="https://wa.link/4bp7v9" target="_blank" rel="noopener noreferrer"></a><Whatsapp size={40}/></li>
            </ul>
        </div>
    )
}