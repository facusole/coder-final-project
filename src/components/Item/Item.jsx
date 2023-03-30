import { Link } from "react-router-dom";

import './Item.css'


export default function Item({ item }) {
    return (
        <Link className="link item__card" to={`/item/${item.id}`}>
            <img src={item.img} alt={item.name} />
            <div className="item__description">
                <h4 className="item__name">{item.name}</h4>
                <p className="item__price">${item.price}</p>
            </div>
        </Link>
    )
}