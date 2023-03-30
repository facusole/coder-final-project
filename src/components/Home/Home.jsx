import ItemListContainer from "../ItemListContainer/ItemListContainer"
import Welcome from "../Welcome/Welcome"
import CategoriesContainer from "../CategoriesContainer/CategoriesContainer"
import { ArrowRight } from "iconsax-react"
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <> 
            <Welcome />
            <CategoriesContainer />
            <section className="mg__inline">
                <h3 className="subheading section__heading">Nuestros productos</h3>
                <ItemListContainer />
                <Link className="items__container__label" to={'/all-products'}>Ver todos los productos <ArrowRight size={20}/></Link>
            </section>
            <div style={{height: '100px', backgroundColor: 'red', margin: '50px'}}>Hola</div>
        </>
    )
}