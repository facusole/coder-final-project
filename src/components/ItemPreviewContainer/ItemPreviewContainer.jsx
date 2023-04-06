import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { collection, getDocs, limit, query, where } from 'firebase/firestore'
import { db } from '../../firebase/config'
import ItemListPreview from '../ItemListPreview/ItemListPreview'

import './ItemPreviewContainer.css'



export default function ItemListContainer() {

    const [productos, setProductos] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {

        setIsLoading(true)

        // 1- armar un referencia (sincronico)
        const productosRef = collection(db, 'productos')
        // filtrado de la base de datos
        const q =   categoryId 
                    ? query(productosRef, where('category', '==', categoryId))
                    : query(productosRef, limit(4))

        // 2- pedir la coleccion (referencia, asincronico)
        
        getDocs(q)
            .then(res => {
                const docs = res.docs.map((doc) => {

                    return {
                        ...doc.data(),
                        id: doc.id
                    }
                })

                setProductos(docs)
            })
            .finally(setIsLoading(false))

    }, [categoryId])




    return (
        <>

            {isLoading ?
                <h2>Cargando...</h2>
                :
                <ItemListPreview productos={productos} />
            }

        </>

    )
}