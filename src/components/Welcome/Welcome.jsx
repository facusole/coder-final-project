import { Link } from 'react-router-dom'
import kitEscolar from '../../assets/kit-escolar.webp'
import kitEscolarDesktop from '../../assets/kit-escolar-desktop.webp'
import CTAbutton from '../CTAbutton/CTAbutton'

import './Welcome.css'

export default function Welcome() {
    return (
        <section className='welcome__section mg__inline'>
            <h2 className='subheading'>Kit de útiles escolares</h2>
            <div>
                <h1 className='heading'>Vuelta al cole!</h1>
                <p className='welcome__paragraph'>Podes ver nuestros kits disponibles o pedir el tuyo personalizado por nuestras redes.</p>
            </div>
            <picture>
                <source srcSet={kitEscolarDesktop}
                        media='(min-width: 1024px)'
                />
                <img src={kitEscolar} alt="Un juego de letras de madera y plastilinas encima de una mesa dentor de una sala de juegos infantiles" /></picture>
            <Link to={`/category/utiles-escolares`} className='link welcome__btn'><CTAbutton description={'Ver kits disponibles'} /></Link>
        </section>
    )
}