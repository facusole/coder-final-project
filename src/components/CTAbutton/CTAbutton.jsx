import {ArrowRight} from 'iconsax-react'

import './CTAbutton.css'

export default function CTAbutton({description}) {
    return (
        <button className='cta__button'>{description} <ArrowRight size={24} color='#fff'/></button>
    )
}