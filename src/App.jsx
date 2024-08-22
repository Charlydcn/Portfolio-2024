import './index.css'

// ---------------------------------------------------------------------------
// img imports ---------------------------------------------------------------
import photoIntro from "../src/assets/img/photo-intro.png";

import circle1 from "../src/assets/img/circle_1.png";
// import circle2 from "../src/assets/img/circle_2.png";
import circle3 from "../src/assets/img/circle_3.png";
// import circle4 from "../src/assets/img/circle_4.png";

import collaborationIcon from "../src/assets/img/collaboration.png";
import curiosityIcon from "../src/assets/img/curiosity.png";
import creativeIcon from "../src/assets/img/creative.png";
// ---------------------------------------------------------------------------



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faEllipsis } from '@fortawesome/free-solid-svg-icons';


function App() {
    return (
        <>
            <section className='relative w-screen h-screen text-blanc flex items-center justify-center overflow-x-hidden'>
                {/* backgrounds */}
                <div className='absolute w-full h-full top-0 z-0 flex flex-row'>
                    <div className='bg-noir w-3/4 h-full'></div>
                    <div className='bg-blanc w-1/4 h-full'></div>
                </div>

                {/* circles */}
                <img src={circle1} className="absolute z-10 left-12 -bottom-24" alt=""/>
                <img src={circle3} className="absolute z-10 -top-36 -left-40" alt=""/>
                
                {/* intro */}
                <div className='relative z-5 flex items-center justify-between m-auto text-blanc'>
                    <div className='flex flex-col w-3/4'>
                        <h3 className='text-lg font-light opacity-50 mb-2'>Enchanté</h3>

                        <h2 className='text-5xl font-semibold'>Moi c&apos;est <span className="text-vert">Charly</span></h2>

                        <p className='opacity-50 my-4 font-light'>Votre futur Alternant développeur web pour 2024-25 et au-delà !</p>

                        <button className='border-2 border-blanc flex items-center justify-between font-semibold px-2 pr-0 w-72 h-10'>
                            Pourquoi moi ?
                            <div className='bg-blanc h-full w-16 flex items-center justify-center'>
                                <FontAwesomeIcon className="text-noir text-xl" icon={faArrowRight}/>
                            </div>
                        </button>

                        <FontAwesomeIcon className="text-blanc w-fit text-6xl mt-10" icon={faEllipsis}/>
                    </div>

                    <div className='w-1/4'>
                        <img className='max-w-96' src={photoIntro} alt="" />
                    </div>
                </div>
            </section>

            <section className='flex content-between w-3/4'>
                <article className="article">
                    <img src={creativeIcon} alt=""/>
                    
                    <h4>Au-delà du code</h4>
                    
                    <span className="line"></span>

                    <p>
                        Plus qu&apos;un simple exécutant, je propose activement des idées innovantes qui enrichissent chaque projet,
                        tout en respectant ses fondements initiaux
                    </p>
                </article>

                <article className="article">
                    <img src={curiosityIcon} alt=""/>
                    
                    <h4>Au-delà du code</h4>
                    
                    <span className="line"></span>

                    <p>
                        Plus qu&apos;un simple exécutant, je propose activement des idées innovantes qui enrichissent chaque projet,
                        tout en respectant ses fondements initiaux
                    </p>
                </article>

                <article className="article">
                    <img src={collaborationIcon} alt=""/>
                    
                    <h4>Au-delà du code</h4>
                    
                    <span className="line"></span>

                    <p>
                        Plus qu&apos;un simple exécutant, je propose activement des idées innovantes qui enrichissent chaque projet,
                        tout en respectant ses fondements initiaux
                    </p>
                </article>
            </section>
        </>

    )
}

export default App
