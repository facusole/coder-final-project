import { useState } from "react"
import { useNavigate } from "react-router-dom"


export default function ItemDetail({ item }) {

    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
    }

    const [isLoading, setIsLoading] = useState(true)

    setTimeout(() => {
        setIsLoading(false)
    }, 300)

    return (
        <div>

            { isLoading ? <h1>Loading...</h1>
                :
            <div>
                <h2>{item.name}</h2>
                <img src={item.img} alt={item.name} />
                <p>{item.description}</p>
                <p>{item.price}</p>
                <button onClick={handleVolver}>Volver</button>
            </div>
            
            }
        </div>
    )
}