

export default function ItemCount({quantity, setQuantity, handleAddToCart}) {

    const handleAdd = () => {
        setQuantity(quantity + 1)
    }

    const handleSubstract = () => {
        quantity > 1 && setQuantity(quantity - 1)
    }
    

    return (
        
        <div>
            <span className="item__counter">
                <button className="item__counter__handler" onClick={handleSubstract}>-</button>
                <span>{quantity}</span>
                <button className="item__counter__handler" onClick={handleAdd}>+</button>
            </span>
            <button className="cta__button add__cart" onClick={handleAddToCart}>Agregar al carrito</button>
        </div>
    )
}