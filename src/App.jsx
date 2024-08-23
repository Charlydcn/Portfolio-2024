import './index.css'

// ---------------------------------------------------------------------------
// img imports ---------------------------------------------------------------
import photoIntro from "../src/assets/img/photo-intro.png";


// cercles déco
import circle1 from "../src/assets/img/decorations/circle_1.png";
// import circle2 from "../src/assets/img/decorations/circle_2.png";
import circle3 from "../src/assets/img/decorations/circle_3.png";
import circle4 from "../src/assets/img/decorations/circle_4.png";


// icones section texte
import collaborationIcon from "../src/assets/img/icones/collaboration.png";
import curiosityIcon from "../src/assets/img/icones/curiosity.png";
import creativeIcon from "../src/assets/img/icones/creative.png";


// icones technos
import reactIcon from "../src/assets/img/icones/react.png";
import symfonyIcon from "../src/assets/img/icones/symfony.png";
import tailwindIcon from "../src/assets/img/icones/tailwind.png";
import phpIcon from "../src/assets/img/icones/php.png";
import mysqlIcon from "../src/assets/img/icones/mysql.png";
import gitIcon from "../src/assets/img/icones/git.png";
import figmaPhotoshopIcon from "../src/assets/img/icones/figma_photoshop.png";
import trelloIcon from "../src/assets/img/icones/trello.png";

// ---------------------------------------------------------------------------



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faEllipsis } from '@fortawesome/free-solid-svg-icons';


function App() {
    return (
        <>
            {/* <nav className='absolute top-4 z-50 w-full'>
                <ul className='text-blanc opacity-40 flex items-center justify-center gap-8'>
                    <li>
                        <a href="#">Accueil</a>
                    </li>
                    
                    <li>
                        <a href="#">Technologies</a>
                    </li>
                    
                    <li>
                        <a href="#">Parcours</a>
                    </li>
                    
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </nav> */}
        
            <main className='overflow-x-hidden'>
                <section className='relative w-screen h-screen text-blanc flex items-center justify-center'>
                    {/* backgrounds */}
                    <div className='absolute w-full h-full top-0 z-0 flex flex-row'>
                        <div className='bg-noir w-screen h-full'></div>
                        {/* <div className='absolute right-16 bg-blanc w-6 h-full'></div> */}
                    </div>

                    {/* circles */}
                    <img src={circle1} className="hidden absolute z-10 left-12 -bottom-24 xl:block" alt=""/>
                    <img src={circle3} className="absolute z-10 -top-36 -left-40" alt=""/>
                    
                    {/* intro */}
                    <div className='relative z-5 w-2/3 max-w-screen-lg flex items-center justify-between m-auto text-blanc 2xl:w-4/6'>

                        {/* texte */}
                        <div className='flex flex-col w-2/3'>
                            <h3 className='text-lg font-light opacity-50 mb-2'>Enchanté</h3>

                            <h2 className='text-5xl font-semibold'>Moi c&apos;est <span className="text-vert">Charly</span></h2>

                            <p className='opacity-50 my-4 font-light'>Votre futur Alternant développeur web pour 2024-25 et au-delà !</p>

                            <button className='border-2 border-blanc flex items-center justify-between font-semibold px-2 pr-0 w-72 h-10 group'>
                                <span className='transition-transform duration-200 group-hover:translate-x-1'>Pourquoi moi ?</span>
                                <div className='bg-blanc h-full w-16 flex items-center justify-center'>
                                    <FontAwesomeIcon className="text-noir text-xl" icon={faArrowRight}/>
                                </div>
                            </button>

                            <FontAwesomeIcon className="text-blanc w-fit text-6xl mt-10" icon={faEllipsis}/>
                        </div>


                        {/* photo */}
                        <div className='w-1/3 relative'>
                            <img className='max-w-full relative' src={photoIntro} alt="" />
                            <img src={circle1} className="absolute h-24 bottom-0 -right-2" alt=""/>
                        </div>
                    </div>
                </section>

                <section className='flex flex-col items-center w-11/12 mx-auto py-20 gap-24 lg:flex-row xl:h-96 xl:w-4/5'>
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
                        
                        <h4>Curiosité professionnelle</h4>
                        
                        <span className="line"></span>

                        <p>
                            Après deux ans de développement, je reste motivé à découvrir de nouvelles technologies et à
                            affiner mes compétences, tout en me remettant en question.
                        </p>
                    </article>

                    <article className="article">
                        
                        <img src={collaborationIcon} alt=""/>
                        
                        <h4>Aisance relationnelle</h4>
                        
                        <span className="line"></span>

                        <p>
                            Mon expérience dans le commerce m&apos;a permis de développer de solides compétences
                            relationnelles et une grande facilité à travailler en équipe.
                        </p>
                    </article>
                </section>

                <section className='relative min-h-screen pt-16 pb-32 bg-noir flex flex-col justify-center lg:min-h-0'>
                    <img src={circle4} className="absolute h-48 z-10 right-12 -bottom-24" alt=""/>

                    <h5 className='text-blanc text-4xl font-bold mx-auto w-fit mb-10'>Technologies</h5>

                    <div className='technos-container grid grid-cols-1 gap-12 w-fit mx-auto sm:grid-cols-2 sm:grid-rows-4 lg:grid-cols-4 lg:grid-rows-2'>
                        <figure className='techno'>
                            <img src={symfonyIcon} alt="Icône Symfony"/>
                            <figcaption>Symfony</figcaption>
                        </figure>

                        <figure className='techno'>
                            <img src={phpIcon} alt="Icône PHP"/>
                            <figcaption>PHP</figcaption>
                        </figure>

                        <figure className='techno'>
                            <img src={reactIcon} alt="Icône React"/>
                            <figcaption>React</figcaption>
                        </figure>

                        <figure className='techno'>
                            <img src={tailwindIcon} alt="Icône Tailwind"/>
                            <figcaption>Tailwind</figcaption>
                        </figure>

                        <figure className='techno'>
                            <img src={mysqlIcon} alt="Icône MySQL"/>
                            <figcaption>MySQL</figcaption>
                        </figure>

                        <figure className='techno'>
                            <img src={gitIcon} alt="Icône Git"/>
                            <figcaption>Git</figcaption>
                        </figure>

                        <figure className='techno'>
                            <img src={figmaPhotoshopIcon} alt="Icône Figma et Photoshop mélangés"/>
                            <figcaption>Figma/Photoshop</figcaption>
                        </figure>

                        <figure className='techno'>
                            <img src={trelloIcon} alt="Icône Trello"/>
                            <figcaption>Trello</figcaption>
                        </figure>
                    </div>
                </section>

                <section className='h-screen'></section>
            </main>
        </>


    )
}

export default App
