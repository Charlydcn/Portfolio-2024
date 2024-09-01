import PropTypes from 'prop-types';

// ---------------------------------------------------------------------------
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
// ---------------------------------------------------------------------------


// ---------------------------------------------------------------------------
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
// ---------------------------------------------------------------------------


export default function Projet({link, img, imgAlt, title, year, desc, technos}) {

    return (
        <article className='projet flex flex-col items-center gap-6 h-[35rem] pb-12 px-6'>
            <header className='aspect-square w-full transition-all  rounded overflow-hidden'>
                <img src={img} alt={imgAlt} className='transition-all  w-full h-full object-cover' />
            </header>

            <main className='flex flex-col h-60'>
                <a
                    href={link}
                    target='_blank'
                    className={`project-title text-2xl text-noir font-[500] mb-1`}
                    data-cursor="pointer"
                >
                    <span className='underline-hover'>{title}</span>

                    <FontAwesomeIcon icon={faArrowRightFromBracket} className='ml-2 text-xl opacity-30'/>
                </a>
                
                <p className='project-year text-sm opacity-50 italic'>{year}</p>

                <p className='project-desc text-base mt-6 text-noir'>
                    {desc}
                </p>

                <footer className='h-7 flex gap-4 mt-auto'>
                    {   
                        technos.map((techno, index) => (
                            <Tippy key={index} content={techno.text}>
                                <img src={techno.img} alt={techno.imgAlt} className='tippy h-full'/>
                            </Tippy>
                        ))
                    }
                </footer>
            </main>
        </article>
    )
}


Projet.propTypes = {
    link: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    technos: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string.isRequired,
          img: PropTypes.string.isRequired
        })
      ).isRequired,
};
