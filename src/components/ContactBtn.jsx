import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ContactBtn({ icon, iconColor, text, link, aosData, aosDelay, className = null }) {
    let iconColorLocal = "noir";
    let textHoverEffect;

    iconColor ? (iconColorLocal = iconColor) : "";

    link ? textHoverEffect = "group-hover:translate-x-1" : "";

    const content = (
        <div 
            className={`bg-white rounded w-80 flex items-center gap-4 p-3 max-w-[85vw] group font-semibold col-span-1 ${className}`}
            data-aos={aosData}
            data-aos-delay={aosDelay}
            data-cursor="pointer-dark"
        >
            <FontAwesomeIcon icon={icon} className={`h-10 transition-all text-${iconColorLocal}`} />
            <p className={`text-noir transition-transform ${textHoverEffect}`}>{text}</p>
        </div>
    );

    return link ? (
        <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block"
        >
            {content}
        </a>
    ) : (
        content
    );
}

ContactBtn.propTypes = {
    icon: PropTypes.object.isRequired, // FontAwesome icon object
    iconColor: PropTypes.string,
    text: PropTypes.string.isRequired,
    link: PropTypes.string,
    aosData: PropTypes.string,
    aosDelay: PropTypes.string,
    className: PropTypes.string
};
