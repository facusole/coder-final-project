import { ArrowRight } from "iconsax-react"

export default function ItemCount({quantity, setQuantity, handleAddToCart}) {

    const handleAdd = () => {
        setQuantity(quantity + 1)
    }

    const handleSubstract = () => {
        quantity > 1 && setQuantity(quantity - 1)
    }
    

    return (
        
        <div className="item__counter__container">
            <span className="item__counter">
                <button className="item__counter__handler" onClick={handleSubstract}>-</button>
                <span>{quantity}</span>
                <button className="item__counter__handler" onClick={handleAdd}>+</button>
            </span>
            <button onClick={handleAddToCart} className='cta__button add__cart'><span className="add__cart__span">Agregar al carrito <ArrowRight size={24} color={'#fff'}/></span></button>
        </div>
    )
}