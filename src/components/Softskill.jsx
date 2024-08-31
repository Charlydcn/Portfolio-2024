import PropTypes from 'prop-types';

export default function Softskill({img, title, text, aosData = null, aosDelay = null}) {
    return (
        <article 
            className="softskill flex flex-col items-center gap-2 max-w-[80vw] xl:w-1/3 group" 
            data-aos={aosData} 
            data-aos-delay={aosDelay}
        >
            <img 
                loading="lazy" 
                src={img} 
                alt="Illustration d'une ampoule" 
                className="h-24 object-scale-down transition-transform duration-200 md:group-hover:rotate-6 md:group-hover:-translate-y-2"
            />
            
            <h4 className="font-bold text-noir text-lg text-center xl:text-2xl">
                {title}
            </h4>
            
            <span className="line block h-0.5 opacity-50 w-3/4 bg-vert"></span>

            <p className="opacity-50 font-light max-w-96 text-sm xl:text-base">
                {text}
            </p>
        </article>
    )
}

Softskill.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    aosData: PropTypes.string,
    aosDelay: PropTypes.string,
};
