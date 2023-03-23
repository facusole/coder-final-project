import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { pedirDatos } from '../../utils/pedirDatos'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../firebase/config'

import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'



export default function ItemListContainer() {

    let [productos, setProductos] = useState([])
    let [isLoading, setIsLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {

        setIsLoading(true)

        //// 1- armar un referencia (sincronico)
        // const productosRef = collection(db, 'productos')
        // filtrado de la base de datos
        // const q =   categoryId 
        //             ? query(productosRef, where('category', '==', categoryId))
        //             : productosRef

        //// 2- pedir la coleccion (referencia, asincronico)
        
        // getDocs(q)
        //     .then(res => {
        //         const docs = res.docs.map((doc) => {

        //             return {
        //                 ...doc.data(),
        //                 id: doc.id
        //             }
        //         })

        //         console.log(docs)

        //         setProductos(docs)
        //     })
        //     .finally(setIsLoading(false))

        pedirDatos()
            .then((response) => {
                !categoryId ? 
                setProductos(response) 
                :
                setProductos(response.filter((prod) => prod.category === categoryId))
            })
            .catch((error) => {
                console.error(error)
            })
            .finally(() => {
                setIsLoading(false)
            })

    }, [categoryId])




    return (
        <>

            {isLoading ?
                <h2>Cargando...</h2>
                :
                <ItemList productos={productos} />
            }

        </>

    )
}