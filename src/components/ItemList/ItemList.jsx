import Item from '../Item/Item'

export default function ItemList({productos}) {


    return (
        <div className='itemList__container'>
                    {productos.map((item) =>
                        <Item key={item.id} item={item} />
                    )}
                </div>
    )
}