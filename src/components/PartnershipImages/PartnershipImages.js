import './PartnershipImages.css'
import imageOne from '../../images/partnership-one.png';
import imageTwo from '../../images/partnership-two.png';
import imageThree from '../../images/partnership-three.png';
import imageFour from '../../images/partnership-four.png';


function PartnershipImages() {
    return (
        <section className='partnership-section__images'>
            <div className='partnership-section__images-wrap' >
                <img src={imageOne} className='partnership-section__pic' />
                <img src={imageTwo} className='partnership-section__pic' />
                <img src={imageThree} className='partnership-section__pic' />
                <img src={imageFour} className='partnership-section__pic' />
            </div>

        </section>
    )
}

export default PartnershipImages