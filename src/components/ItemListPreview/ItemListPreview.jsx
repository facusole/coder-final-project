import Item from '../Item/Item'

export default function ItemListPreview({productos}) {


    return (
        <div className='item__preview__container'>
                    {productos.map((item) =>
                        <Item key={item.id} item={item} />
                    )}
                </div>
    )
}