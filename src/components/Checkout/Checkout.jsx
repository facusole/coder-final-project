import { useContext, useState } from "react"


export default function Checkout() {


    //const { cart, totalPrice, emptyCart } = useContext(CartContext)
    
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
        if( values.name.length < 2 ) {
            alert('Nombre inválido')
            return
        }
        if( values.adress.length < 2 ) {
            alert('Dirección inválida')
            return
        }
        if( values.email.length < 2 ) {
            alert('Email inválido')
            return
        }

        const order = {
            client: values,
            items: cart.map((prod) => ({id: prod.id, name: prod.name, price: prod.price, quantity: prod.quantity})),
            total: totalCompra(),
            date: new Date()
        }

        const ordersRef = collection(db, 'orders') // Si no existe la coleccion, la crea automaticamente

        addDoc(ordersRef, order)
            .then((doc) => {
                setOrderId(doc.id)
                emptyCart() // Viene del cart context que todavia no cree
            })
    }

    if(orederId) {
        return (
            <div>
                <h2>Tu orden se registró con éxito!</h2>
                <p>Guardá tu número de órden: #{orderId}</p>
                <Link to='/'>Volver al inicio</Link>
            </div>
        )
    }

    if (cart.length === 0 ) { // Esto va abajo de todo, porque aunque tenga la order bien, si esta arriba no llegaria a ver nada de la otra vista
        return <Navigate to='/' />
    }

    return (
        <div>
            <h2>Checkout</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nombre</label>
                <input
                onChange={handleInputChange}
                value={values.name} 
                type="text"
                name="name"
                placeholder="Nombre"
                required
                 />
                <label htmlFor="adress">Direccion</label>
                <input
                onChange={handleInputChange}
                value={values.adress} 
                type="text"
                name="adress"
                placeholder="Direccion"
                required
                 />
                <label htmlFor="email">Email</label>
                <input
                onChange={handleInputChange}
                value={values.email} 
                type="email"
                name="email"
                placeholder="Email"
                required
                 />
                 <button>Confirmar</button>
            </form>
        </div>
    )
}