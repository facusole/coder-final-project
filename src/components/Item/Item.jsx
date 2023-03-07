import { Link } from "react-router-dom";


export default function Item({ item }) {
    return (
        <div>
            <img src={item.img} alt={item.name} />
            <h4>{item.name}</h4>
            <p>{item.price}</p>
            <Link to={`/item/${item.id}`}>Ver más</Link>
        </div>
    )
}