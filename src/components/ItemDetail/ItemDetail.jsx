import { useContext, useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"
import ItemCount from "../ItemCount/ItemCount"

import './ItemDetail.css'
import '../Item/Item'
import Item from "../Item/Item"


export default function ItemDetail({ item }) {

    const [quantity, setQuantity] = useState(1)

    const navigate = useNavigate()
    const { handleAddItem, isInCart } = useContext(CartContext)

    const handleBack = () => {
        navigate(-1)
    }

    const [isLoading, setIsLoading] = useState(true)

    setTimeout(() => {
        setIsLoading(false)
    }, 300)

    const handleAddToCart = () => {
        const newItem = {
            ...item,
            quantity
        }

        handleAddItem(newItem)
    }

    return (
        <div>

            { isLoading ? <h1>Loading...</h1>
                :
            <div className="item__detail_container">
                <div className="item__detail__info">
                    {/* <img className="item__detail__img" src={item.img} alt={item.name} /> */}
                    <div className="item__detail">
                        <h2 className="item__detail_name">{item.name}</h2>
                        <p className="item__detail__description">{item.description}</p>
                        <p className="item__detail__price">${item.price}</p>
                        {
                            isInCart(item.id)
                            ? <Link to='/cart'>Finalizar compra</Link>
                            : <ItemCount quantity={quantity} setQuantity={setQuantity} handleAddToCart={handleAddToCart}/>
                        } 
                        <button className="item__detail__link" onClick={handleBack}>Volver</button>

                    </div>
                </div>
            </div>
            
            }

            {/* HACER SECCION PRODUCTOS RELACIONADOS */}
        </div>
    )
}