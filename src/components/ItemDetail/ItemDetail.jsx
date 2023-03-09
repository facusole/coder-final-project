import { useState } from "react"
import { useNavigate } from "react-router-dom"

import './ItemDetail.css'
import '../Item/Item'


export default function ItemDetail({ item }) {

    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
    }

    const [isLoading, setIsLoading] = useState(true)

    setTimeout(() => {
        setIsLoading(false)
    }, 300)

    return (
        <div>

            { isLoading ? <h1>Loading...</h1>
                :
            <div className="item__detail_container">
                <div className="item__detail__info">
                    <img className="item__detail__img" src={item.img} alt={item.name} />
                    <div className="item__detail">
                        <h2 className="item__detail_name">{item.name}</h2>
                        <p className="item__detail__description">{item.description}</p>
                        <p className="item__detail__price">${item.price}</p>
                        <button className="item__detail__link" onClick={handleVolver}>Volver</button>
                    </div>
                </div>
            </div>
            
            }

            {/* HACER SECCION PRODUCTOS RELACIONADOS */}
        </div>
    )
}