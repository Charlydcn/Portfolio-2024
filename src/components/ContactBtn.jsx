import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ContactBtn({ icon, text, link, aos, aosDelay, className = null }) {
    return (
        <div 
            className={`bg-white w-80 flex items-center gap-4 p-3 max-w-[85vw] text-noir font-semibold col-span-1 ${className}`}
            data-aos={aos} 
            data-aos-delay={aosDelay}
        >
            <FontAwesomeIcon icon={icon} className="h-10 text-noir" />
            {link ? (
                <a 
                    href={link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-noir"
                >
                    {text}
                </a>
            ) : (
                <p className="text-noir">{text}</p>
            )}
        </div>
    );
}

ContactBtn.propTypes = {
    icon: PropTypes.object.isRequired, // FontAwesome icon object
    text: PropTypes.string.isRequired,
    link: PropTypes.string,
    aos: PropTypes.string,
    aosDelay: PropTypes.string,
    className: PropTypes.string
};
