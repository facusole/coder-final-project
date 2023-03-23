import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { pedirProductosPorId } from "../../utils/pedirDatos"
import { db } from "../../firebase/config"
import { doc, getDoc } from 'firebase/firestore'
import ItemDetail from "../ItemDetail/ItemDetail"

export default function ItemDetailContainer() {

    const [item, setItem] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        setIsLoading(true)

        // //1- referencia (sync)
        // const docRef = doc(db, 'productos', itemId)

        // //2- llamado (async)
        // getDoc(docRef)
        //     .then((doc) => {
        //         setItem({
        //             ...doc.data(),
        //             id: doc.id
        //         })
        //     })
        //     .finally(() => setIsLoading(false))

        pedirProductosPorId(Number(itemId)) // El param viene como string, la data es un numero, necesita ser parseado
            .then(res => {
                setItem(res)
            })
            .catch(error => console.log(error))
            .finally(() => setIsLoading(false))
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