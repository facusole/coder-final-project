import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { pedirDatos } from '../../utils/pedirDatos'

import Item from '../Item/Item'
import './ItemListContainer.css'



export default function ItemListContainer() {

    let [productos, setProductos] = useState([])
    let [isLoading, setIsLoading] = useState(true)

    const {categoryId} = useParams()
    console.log(categoryId)


    useEffect(() => {

        setIsLoading(true)

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

            {isLoading == true ?
                <h2>Cargando...</h2>
                :
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 64, marginTop: 32 }}>
                    {productos.map((item) =>
                        <Item key={item.id} item={item}/>
                    )}
                </div>
            }

        </>

    )
}