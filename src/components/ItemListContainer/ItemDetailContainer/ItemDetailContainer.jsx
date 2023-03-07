import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { pedirProductosPorId } from "../../../utils/pedirDatos"
import ItemDetail from "../../ItemDetail/ItemDetail"

export default function ItemDetailContainer() {

    const [item, setItem] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        setIsLoading(true)

        pedirProductosPorId(Number(itemId)) // El param viene como string, la data es un numero, necesita ser parseado
            .then(res => {
                setItem(res)
            })
            .catch(error => console.log(error))
            .finally(setIsLoading(false))
    }, [])

    return (
        <div className="contenedor">
            {
                isLoading ? <h1>Loading...</h1>
                :
                <ItemDetail item={item}/>
            }
        </div>
    )
}