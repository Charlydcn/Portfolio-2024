import PropTypes from 'prop-types';

export default function Softskill({img, imgAlt, text, aosData = null, aosDelay = null}) {
    return (
        <figure 
            className='techno flex flex-col items-center justify-center text-blanc w-52 h-52 bg-[#383A35] gap-6 transition-all md:hover:-translate-y-2' 
            data-aos={aosData} 
            data-aos-delay={aosDelay}
        >
            <img loading="lazy" src={img} alt={imgAlt} className='max-h-16 object-scale-down'/>
            <figcaption className='font-light'>{text}</figcaption>
        </figure>
    )
}

Softskill.propTypes = {
    img: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    aosData: PropTypes.string,
    aosDelay: PropTypes.string,
};
