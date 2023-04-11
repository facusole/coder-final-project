import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { Trash } from 'iconsax-react'
import CTAbutton from '../CTAbutton/CTAbutton'
import emptyState from '../../assets/emptyState.webp'

import './Cart.css'

export default function Cart() {

    const { cart, totalPrice, removeItem, emptyCart } = useContext(CartContext)

    return (
        <section className="cart__container mg__inline">
            <article className='cart__header'>
                <h2 className="cart__heading">Tu carrito</h2>
                {cart.length > 0 && <button className='cart__delete' onClick={emptyCart}>Vaciar carrito <Trash size={24}/></button>}
            </article>

            {
                cart.map((prod) => (
                    <article className='cart__item__container' key={prod.id}>
                        <img src={prod.img} alt="Product image that you put in the cart" />
                        <div className="cart__item">
                            <h4 className='cart__item__name'>{prod.name}</h4>
                            <p className='cart__item__quantity'>Cantidad: {prod.quantity}</p>
                            <p className='cart__item__price'>${prod.price * prod.quantity}</p>
                        </div>
                        <button className='cart__item__delete' onClick={() => removeItem(prod.id)}><Trash size={24} /></button>
                    </article>
                ))
            }

            {
                cart.length == 0
                    ? <article className='center empty__state'>
                        <img src={emptyState} alt="Icono de un carrito para dar a entender que el carrito de compras está vacío" />
                        <h2 className='empty__cart__header'>¡Tu carrito está vacío, ve a llenarlo!</h2>
                    </article>
                    : <div className='cart__footer'>
                        <h3 className='cart__total'>Total: <span className="cart__total__price">${totalPrice().toFixed(2)}</span></h3>
                        <Link to={'/checkout'} className='cart__cta'><CTAbutton description={'Finalizar compra'} /></Link>
                    </div>
            }
        </section>
    )
}