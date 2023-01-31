import './PartnershipImages.css'
import imageOne from '../../images/partnership-one.png';
import imageTwo from '../../images/partnership-two.png';
import imageThree from '../../images/partnership-three.png';
import imageFour from '../../images/partnership-four.png';
import { def } from '@vue/shared';

function PartnershipImages() {
    return (
        <section className='partnership-section__images'>
            <img src={imageOne} className='partnership-section__pic' />
            <img src={imageTwo} className='partnership-section__pic' />
            <img src={imageThree} className='partnership-section__pic' />
            <img src={imageFour} className='partnership-section__pic' />
        </section>
    )
}

export default PartnershipImages