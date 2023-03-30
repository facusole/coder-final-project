import { Link } from 'react-router-dom'
import utilesEscolares from '../../assets/categories/utiles-escolares.webp'
import cuadernos from '../../assets/categories/cuadernos.webp'
import juegoDeMesa from '../../assets/categories/juegos-de-mesa.webp'

import './CategoriesContainer.css'

export default function CategoriesContainer() {
    return (
        <section className="categories__section mg__inline">
            <h3 className="subheading section__heading">Categorias</h3>
            <article className='categories__container'>
                <Link className='link categories__link' to={"/category/utiles-escolares"}>
                    <img className='categories__img' src={utilesEscolares} alt="Una manzana encima de unos libros encima de una mesa" />
                    <h3>Útiles escolares</h3>
                </Link>
                <Link className='link categories__link' to={"/category/cuadernos"}>
                    <img className='categories__img' src={cuadernos} alt="Cuadernos escolares encima de una mesa" />
                    <h3>Cuadernos</h3>
                </Link>
                <Link className='link categories__link' to={"/category/juegos-de-mesa"}>
                    <img className='categories__img' src={juegoDeMesa} alt="Temperas, pinceles y un cuaderno siendo utilizados por alguien" />
                    <h3>Juegos de mesa</h3>
                </Link>
            </article>
        </section>
    )
}