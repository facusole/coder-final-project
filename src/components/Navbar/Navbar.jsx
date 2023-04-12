import { useState, useEffect } from 'react'
import CartWidget from './CartWidget/CartWidget';
import BrandLogo from '../../assets/pluma-logo.webp'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../firebase/config'


import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar({ input, setInput }) {

    const navigate = useNavigate()

    const [allProducts, setAllProducts] = useState([])
    const [filtered, setFiltered] = useState([])

    useEffect(() => {

        // 1- armar un referencia (sincronico)
        const productsRef = collection(db, 'productos')
        // filtrado de la base de datos
        const q = productsRef;

        // 2- pedir la coleccion (referencia, asincronico)

        getDocs(q)
            .then(res => {
                const docs = res.docs.map((doc) => {

                    return {
                        ...doc.data(),
                        id: doc.id
                    }
                })

                setAllProducts(docs)
            })

    }, [])


    const filterSearch = (value) => {
        const iValue = value.trim().toLowerCase();
        const iLength = iValue.length;

        if (iLength < 1) return []

        const filteredProds = allProducts.filter(product => {
            if (product.name.toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .includes(iValue)) {
                return product;
            }
        });

        return filteredProds;
    }

    const resetInput = () => {
        setInput('')
        setFiltered([])
    }

    const handleChange = (e) => {
        setFiltered(filterSearch(e.target.value))
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (filtered[0])
            navigate(`/item/${filtered[0].id}`)
    }

    return (
        <nav className='navbar__container mg__inline'>
            <div className="brand__container">
                <Link to='/'><img src={BrandLogo} aria-label='Pluma de Papel' className='brand__logo' alt="Logo de la marca Pluma de papel" /></Link>
            </div>
            <form onSubmit={handleSubmit} className="searchBar__container">
                <label htmlFor="searchbar" className='visually-hidden'>Buscá tu producto deseado</label>

                <input type="search"
                    value={input}
                    onChange={handleChange}
                    autoComplete='off'
                    spellCheck='off'
                    placeholder='Buscar'
                    aria-label='Ingresá lo que estás buscando'
                    name="Searchbar"
                    className='searchbar__input'
                    id="searchbar" />
                <ul className='searchbar__dropdown'>
                    {
                        filtered.slice(0, 5).map(prod => (
                            <li key={prod.name}>
                                <Link className='searchbar__product' to={`/item/${prod.id}`}><span onClick={resetInput}>{prod.name}</span></Link>
                            </li>
                        ))
                    }
                </ul>

            </form>
            <div>
                <Link to='/cart'><CartWidget /></Link>
            </div>
        </nav>
    )
}