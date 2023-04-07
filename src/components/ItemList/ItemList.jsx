import Item from '../Item/Item'

export default function ItemList({productos, filterCondition}) {


    return (
        <div className='itemList__container mg__inline'>
                    {productos
                    .filter(prod => prod.name.toLowerCase().includes(filterCondition.toLowerCase()))
                    .slice(0)
                    .map((item) =>
                        <Item key={item.id} item={item} />
                    )}
                </div>
    )
}