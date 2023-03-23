import { ShoppingCart } from 'iconsax-react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

import '../Navbar.css'

export default function CartWidget() {

    const { cart } = useContext(CartContext)

    return (
        <div>
            <ShoppingCart size="32" className='cart__icon'/>
            <span className='cart__size'>{cart.length}</span>
            
        </div>

    )
}