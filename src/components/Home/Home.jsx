import ItemListContainer from "../ItemListContainer/ItemListContainer"
import Welcome from "../Welcome/Welcome"
import CategoriesContainer from "../CategoriesContainer/CategoriesContainer"

export default function Home() {
    return (
        <> 
            <Welcome />
            <CategoriesContainer />
            <div>Soy el item list container</div>
            {/* <ItemListContainer /> */}
        </>
    )
}