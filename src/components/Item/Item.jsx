import { Link } from "react-router-dom";

import './Item.css'


export default function Item({ item }) {
    return (
        <div>
            <img src={item.img} alt={item.name} />
            <div className="item__description">
                <div className="item__info">
                    <h4 className="item__name">{item.name}</h4>
                    <p className="item__price">${item.price}</p>
                </div>
                <span className="item__detail__btn"><Link to={`/item/${item.id}`} className='item__detail__link'>Ver más</Link></span>
            </div>
        </div>
    )
}