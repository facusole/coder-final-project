import { Box1, Shop, I3DRotate } from 'iconsax-react'

import './InfoCard.css'

export default function InfoCard() {
    return (
        <div className='info__card'>
            <ul className='info__list'>
                <li className='info__item'>
                    <Box1 size={40} />
                    <div>
                        <h3>Envío gratis</h3>
                        <p>En compras superiores a $6000</p>
                    </div>
                </li>
                <li className='info__item'>
                    <Shop size={40} />
                    <div>
                        <h3>Retiros en local</h3>
                        <p>Pide online y retira presencial</p>
                    </div>
                </li>
                <li className='info__item'>
                    <I3DRotate size={64} />
                    <div>
                        <h3>Cambios</h3>
                        <p>Podes cambiar o devolver tu producto</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}