import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"
import { Navigate } from "react-router-dom"
import { collection, addDoc } from 'firebase/firestore'
import { ArrowRight } from "iconsax-react"
import { db } from '../../firebase/config'
import iconMobile from '../../assets/checkout-icon-mobile.png'
import iconTabletDesktop from '../../assets/checkout-icon-tablet.png'

import './Checkout.css'

export default function Checkout() {

    const { cart, totalPrice, emptyCart } = useContext(CartContext)

    const [orderId, setOrderId] = useState('')
    const [values, setValues] = useState({
        name: '',
        adress: '',
        email: ''
    })

    // Los corchetes dentro del handle hace que los valores sean dinamicos, permitiendo poder apuntar a la propiedad que a mi me interesa modificar.

    const handleInputChange = (e) => {
        e.target.name
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // validaciones
        if (values.name.length < 2) {
            alert('Nombre inválido')
            return
        }
        if (values.adress.length < 2) {
            alert('Dirección inválida')
            return
        }
        if (values.email.length < 2) {
            alert('Email inválido')
            return
        }

        const order = {
            client: values,
            items: cart.map((prod) => ({ id: prod.id, name: prod.name, price: prod.price, quantity: prod.quantity })),
            total: totalPrice(),
            date: new Date()
        }

        const ordersRef = collection(db, 'orders') // Si no existe la coleccion, la crea automaticamente

        addDoc(ordersRef, order)
            .then((doc) => {
                setOrderId(doc.id)
                emptyCart()
            })
    }

    if (orderId) {
        return (
            <div className="checkout__success__container mg__inline">
                <picture className="checkout__success__img">
                    <source srcSet={iconTabletDesktop}
                            media='(min-width: 768px)'
                    />
                    <img src={iconMobile} alt="success icon" />
                </picture>
                <h2>¡Recibimos tu pedido!</h2>
                <p>Una vez despachado el pedido, te enviaremos el número de seguimiento vía mail.</p>
                <p>Guardá tu número de órden: <span onClick={() => navigator.clipboard.writeText(`#${orderId}`)} className="checkout__orderId">#{orderId}</span></p>
                <span><Link className='checkout__success__cta' to='/'>Volver al inicio</Link></span>
            </div>
        )
    }

    if (cart.length === 0) { // Esto va abajo de todo, porque aunque tenga la order bien, si esta arriba no llegaria a ver nada de la otra vista
        return <Navigate to='/' />
    }

    return (
        <section className="mg__inline">
            <article className="checkout__form__section">
                <h2>Checkout</h2>
                <form className="checkout__form" onSubmit={handleSubmit}>
                    <div className="form__input__container">
                        <label className="form__label" htmlFor="name">Nombre</label>
                        <input
                            className="form__input"
                            onChange={handleInputChange}
                            value={values.name}
                            type="text"
                            name="name"
                            placeholder="Nombre"
                            required
                        />
                    </div>
                    <div className="form__input__container">
                        <label className="form__label" htmlFor="adress">Direccion</label>
                        <input
                            className="form__input"
                            onChange={handleInputChange}
                            value={values.adress}
                            type="text"
                            name="adress"
                            placeholder="Direccion"
                            required
                        />
                    </div>
                    <div className="form__input__container">
                        <label className="form__label" htmlFor="email">Email</label>
                        <input
                            className="form__input"
                            onChange={handleInputChange}
                            value={values.email}
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                        />
                    </div>

                    <article className="checkout__summary mg__inline">
                        <div className="checkout__summary__header">
                            <h2>Resumen de compra</h2>
                            {cart.length == 1
                                ? <p>{cart.length} artículo</p>
                                : <p>{cart.length} artículos</p>
                            }
                        </div>
                        {cart.map((prod) => {
                            return (
                                <article key={prod.id} className="checkout__item">
                                    <h3>{prod.name}</h3>
                                    <p>${prod.price}</p>
                                </article>
                            )
                        }
                        )}
                        <h3>Total: <span className="checkout__total">${totalPrice()}</span></h3>
                    </article>
                    <span className="span__btn"><button className="form__submit__btn">Finalizar compra <ArrowRight size={24} /></button></span>
                </form>
            </article>

        </section>
    )
}