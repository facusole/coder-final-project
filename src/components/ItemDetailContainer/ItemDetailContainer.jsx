import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { db } from "../../firebase/config"
import { doc, getDoc } from 'firebase/firestore'
import ItemDetail from "../ItemDetail/ItemDetail"

export default function ItemDetailContainer() {

    const [item, setItem] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        setIsLoading(true)

        //1- referencia (sync)
        const docRef = doc(db, 'productos', itemId)

        //2- llamado (async)
        getDoc(docRef)
            .then((doc) => {
                setItem({
                    ...doc.data(),
                    id: doc.id
                })
            })
            .finally(() => setIsLoading(false))
    }, [itemId])

    return (
        <div className="contenedor">
            {
                isLoading ? <h2 className="loader">Loading...</h2>
                :
                <ItemDetail item={item}/>
            }
        </div>
    )
}