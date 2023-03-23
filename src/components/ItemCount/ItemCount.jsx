

export default function ItemCount({quantity, setQuantity, handleAddToCart}) {

    const handleAdd = () => {
        setQuantity(quantity + 1)
    }

    const handleSubstract = () => {
        quantity > 1 && setQuantity(quantity - 1)
    }
    

    return (
        
        <div>
            <button onClick={handleSubstract}>-</button>

            <span>{quantity}</span>

            <button onClick={handleAdd}>+</button>

            <br />
            <button onClick={handleAddToCart}>Agregar al carrito</button>
        </div>
    )
}