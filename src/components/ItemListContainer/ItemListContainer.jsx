import './ItemListContainer.css'

export default function ItemListContainer({greeting}) {

    return (
        <section className='itemList__container mg__inline'>
            <h1 className=".greetings">Hola, {greeting}</h1>            
        </section>
    )
}