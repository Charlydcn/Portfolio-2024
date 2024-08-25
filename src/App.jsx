import './index.css'

import $ from 'jquery';

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
import reactIcon from "../src/assets/img/icones/technos/react.png";
import symfonyLightIcon from "../src/assets/img/icones/technos/symfony_light.png";
import symfonyDarkIcon from "../src/assets/img/icones/technos/symfony_dark.png";
import tailwindIcon from "../src/assets/img/icones/technos/tailwind.png";
import phpIcon from "../src/assets/img/icones/technos/php.png";
import mysqlIcon from "../src/assets/img/icones/technos/mysql.png";
import gitIcon from "../src/assets/img/icones/technos/git.png";
import figmaPhotoshopIcon from "../src/assets/img/icones/technos/figma_photoshop.png";
import trelloIcon from "../src/assets/img/icones/technos/trello.png";
import htmlIcon from "../src/assets/img/icones/technos/html.png";
import cssIcon from "../src/assets/img/icones/technos/css.png";
import javascriptIcon from "../src/assets/img/icones/technos/javascript.png";
import jqueryIcon from "../src/assets/img/icones/technos/jquery.png";
import vitejsIcon from "../src/assets/img/icones/technos/vitejs.png";


import elanDentaire from "../src/assets/img/projets/elandentaire.png";
import avotrott from "../src/assets/img/projets/avotrott.png";
import beergarden from "../src/assets/img/projets/beergarden.png";
import hangmanGame from "../src/assets/img/projets/hangman_game.png";
import kucra from "../src/assets/img/projets/kucra.png";
import newsgrid from "../src/assets/img/projets/newsgrid.png";
import githubpfp from "../src/assets/img/projets/githubpfp.png";


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------




// ---------------------------------------------------------------------------
// swiper --------------------------------------------------------------------
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------



// ---------------------------------------------------------------------------
// fontawesome ---------------------------------------------------------------
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faEllipsis, faArrowRightFromBracket, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faGit } from '@fortawesome/free-brands-svg-icons';
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------


function App() {

    // fonction générale pour scroll à une section avec un duration donnée (offset de base de 25% top car plus agréable)
    const goToSection = ($section, duration) => {
        if ($section && $section.length) {
            const offsetTop = $section.offset().top - (window.innerHeight * 0.25);
    
            $('html, body').animate({
                scrollTop: offsetTop
            }, duration);
        }
    };
    
    

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
        
            <main className=''>
                <section className='relative w-full h-screen text-blanc flex items-center justify-center'>
                    {/* backgrounds */}
                    <div className='absolute w-full h-full top-0 z-0 flex flex-row'>
                        <div className='bg-noir w-full h-full'></div>
                        {/* <div className='absolute right-16 bg-blanc w-6 h-full'></div> */}
                    </div>

                    {/* circles */}
                    <img src={circle1} className="hidden absolute z-10 left-12 -bottom-24 xl:block" alt=""/>
                    <img src={circle3} className="absolute z-10 -top-36 -left-40" alt=""/>
                    
                    {/* intro */}
                    <div className='relative z-5 w-2/3 max-w-full-lg flex items-center justify-between m-auto text-blanc 2xl:w-4/6'>

                        {/* texte */}
                        <div className='flex flex-col w-2/3'>
                            <h3 className='text-lg font-light opacity-50 mb-2'>Enchanté</h3>

                            <h2 className='text-5xl font-semibold'>Moi c&apos;est <span className="text-vert">Charly</span></h2>

                            <p className='opacity-50 my-4 font-light'>Votre futur Alternant développeur web pour 2024-25 et au-delà !</p>

                            <button onClick={() => goToSection($('#softskills'), 1000)} className='border-2 border-blanc flex items-center justify-between font-semibold px-2 pr-0 w-72 h-10 group'>
                                <span className='transition-transform duration-200 md:group-hover:translate-x-1'>Pourquoi moi ?</span>
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

                <section id="softskills" className='flex flex-col items-center w-11/12 mx-auto gap-24 lg:flex-row xl:h-96 xl:w-4/5'>
                    <article className="softskill">
                        
                        <img src={creativeIcon} alt=""/>
                        
                        <h4>Au-delà du code</h4>
                        
                        <span className="line"></span>

                        <p>
                            Plus qu&apos;un simple exécutant, je propose activement des idées innovantes qui enrichissent chaque projet,
                            tout en respectant ses fondements initiaux
                        </p>
                    </article>

                    <article className="softskill">
                        
                        <img src={curiosityIcon} alt=""/>
                        
                        <h4>Curiosité professionnelle</h4>
                        
                        <span className="line"></span>

                        <p>
                            Après deux ans de développement, je reste motivé à découvrir de nouvelles technologies et à
                            affiner mes compétences, tout en me remettant en question.
                        </p>
                    </article>

                    <article className="softskill">
                        
                        <img src={collaborationIcon} alt=""/>
                        
                        <h4>Aisance relationnelle</h4>
                        
                        <span className="line"></span>

                        <p>
                            Mon expérience dans le commerce m&apos;a permis de développer de solides compétences
                            relationnelles et une grande facilité à travailler en équipe.
                        </p>
                    </article>
                </section>

                <section id="techno" className='relative min-h-screen pb-32 bg-noir flex flex-col justify-center lg:min-h-0'>
                    <img src={circle4} className="absolute h-48 z-10 right-12 -bottom-24" alt=""/>

                    <h5 className='text-blanc'>Technologies</h5>

                    <div className='technos-container grid grid-cols-1 gap-12 w-fit mx-auto sm:grid-cols-2 sm:grid-rows-4 lg:grid-cols-4 lg:grid-rows-2'>
                        <figure className='techno'>
                            <img src={symfonyLightIcon} alt="Icône Symfony"/>
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

                <section id="projets" className='h-screen'>
                    <h5 className='text-4xl'>Mes projets</h5>

                    <Swiper
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        
                        modules={[Pagination]}
                        className="mySwiper"
                    >

                        {/* ELAN Dentaire */}
                        <SwiperSlide>
                            <article className='projet'>
                                <header>
                                    <a href="https://elan-dentaire.fr" target='_blank' className='relative'>
                                        <img src={elanDentaire} alt="Logo du projet ELAN Dentaire" />
                                        <FontAwesomeIcon
                                            className="opacity-0 pointer-events-none text-5xl text-white z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-200"
                                            icon={faArrowRightFromBracket}
                                        />
                                    </a>
                                </header>

                                <main>
                                    <a
                                        href="https://elan-dentaire.fr"
                                        target='_blank'
                                        className='project-title md:hover:text-[#0e89a4]'>
                                            
                                        ELAN Dentaire
                                    </a>
                                    
                                    <p className='project-year'>2024</p>

                                    <p className='project-desc'>
                                        Site vitrine réalisé pour l&apos;entreprise ELAN Dentaire, mon plus gros projet à ce jour. Réalisé en collaboration avec
                                        Valentin YOMBA pour le design, contient 3 jeux : snake, quizz, chasse au trésor, un formulaire de contact sécurisé et
                                        une multitude de pages toutes optimisées en termes de performances et de SEO.
                                    </p>

                                    <footer>
                                        <img src={symfonyDarkIcon} alt="Icône Symfony"/>
                                        <img src={htmlIcon} alt="Icône HTML"/>
                                        <img src={cssIcon} alt="Icône CSS"/>
                                        <img src={javascriptIcon} alt="Icône JavaScript"/>
                                        <img src={jqueryIcon} alt="Icône jQuery"/>
                                    </footer>
                                </main>
                            </article>
                        </SwiperSlide>

                        {/* Avo'Trott */}
                        <SwiperSlide>
                            <article className='projet'>
                                <header>
                                    <a href="https://avo-trottinettes.fr/" target='_blank' className='relative'>
                                        <img src={avotrott} alt="Logo du projet Avo'Trottinettes" />
                                        <FontAwesomeIcon
                                            className="opacity-0 pointer-events-none text-5xl text-white z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-200"
                                            icon={faArrowRightFromBracket}
                                        />
                                    </a>
                                </header>

                                <main>
                                    <a
                                        href="https://avo-trottinettes.fr/"
                                        target='_blank'
                                        className='project-title md:hover:text-[#006894]'>
                                            
                                        Avo&apos;Trottinettes
                                    </a>
                                    
                                    <p className='project-year'>2024</p>

                                    <p className='project-desc'>
                                        Site vitrine &quot;One Page&quot; réalisé pour l&apos;entreprise Avo&apos;Trottinettes.
                                    </p>

                                    <footer>
                                        <img src={htmlIcon} alt="Icône HTML"/>
                                        <img src={cssIcon} alt="Icône CSS"/>
                                        <img src={javascriptIcon} alt="Icône JavaScript"/>
                                        <img src={jqueryIcon} alt="Icône jQuery"/>
                                    </footer>
                                </main>
                            </article>
                        </SwiperSlide>

                        {/* beer garden */}
                        <SwiperSlide>
                            <article className='projet'>
                                <header>
                                    <a href="https://beer-garden-tailwind.vercel.app/" target='_blank' className='relative'>
                                        <img src={beergarden} alt="Logo du projet Beer Garden" />
                                        <FontAwesomeIcon
                                            className="opacity-0 pointer-events-none text-5xl text-white z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-200"
                                            icon={faArrowRightFromBracket}
                                        />
                                    </a>
                                </header>

                                <main>
                                    <a
                                        href="https://beer-garden-tailwind.vercel.app/"
                                        target='_blank'
                                        className='project-title md:hover:text-[#a77204]'>

                                        Beer Garden
                                    </a>

                                    <p className='project-year'>2024</p>

                                    <p className='project-desc'>
                                        Projet &quot;One page&quot; classique pour expérimenter TailwindCSS. Réalisé à partir d&apos;une maquette donnée en formation.
                                    </p>

                                    <footer>
                                        <img src={vitejsIcon} alt="Icône ViteJS"/>
                                        <img src={tailwindIcon} alt="Icône jQuery"/>
                                        <img src={javascriptIcon} alt="Icône JavaScript"/>
                                        <img src={htmlIcon} alt="Icône HTML"/>
                                        <img src={cssIcon} alt="Icône CSS"/>
                                    </footer>
                                </main>
                            </article>
                        </SwiperSlide>

                        {/* newsgrid */}
                        <SwiperSlide>
                            <article className='projet'>
                                <header>
                                    <a href="https://news-grid-ruddy.vercel.app/" target='_blank' className='relative'>
                                        <img src={newsgrid} alt="Logo du projet News Grid" />
                                        <FontAwesomeIcon
                                            className="opacity-0 pointer-events-none text-5xl text-white z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-200"
                                            icon={faArrowRightFromBracket}
                                        />
                                    </a>
                                </header>

                                <main>
                                    <a
                                        href="https://news-grid-ruddy.vercel.app/"
                                        target='_blank'
                                        className='project-title md:hover:text-[#ac2121]'>

                                        NewsGrid
                                    </a>

                                    <p className='project-year'>2024</p>

                                    <p className='project-desc'>
                                        Projet d&apos;introduction à la propriété CSS display: grid, un site vitrine simple et statique avec 4 pages :
                                        index, contact, article et about. Les articles de la page d&apos;accueil étaient initialement générés dynamiquement
                                        via une API d&apos;actualités, mais sont désormais statiques pour faciliter l&apos;hébergement public du projet.
                                    </p>

                                    <footer>
                                        <img src={htmlIcon} alt="Icône HTML"/>
                                        <img src={cssIcon} alt="Icône CSS"/>
                                        <img src={javascriptIcon} alt="Icône JavaScript"/>
                                    </footer>
                                </main>
                            </article>
                        </SwiperSlide>

                        {/* hangman 2.0 */}
                        <SwiperSlide>
                            <article className='projet'>
                                <header>
                                    <a href="https://hangman-game-2-0.vercel.app/" target='_blank' className='relative'>
                                        <img src={hangmanGame} alt="Logo du projet Hangman Game" />
                                        <FontAwesomeIcon
                                            className="opacity-0 pointer-events-none text-5xl text-white z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-200"
                                            icon={faArrowRightFromBracket}
                                        />
                                    </a>
                                </header>

                                <main>
                                    <a
                                        href="https://hangman-game-2-0.vercel.app/"
                                        target='_blank'
                                        className='project-title md:hover:text-[#62466b]'>

                                        Hangman game
                                    </a>

                                    <p className='project-year'>2024</p>

                                    <p className='project-desc'>
                                        Challenge de formation : jeu du pendu en React, utilisant l&apos;API trouve-mot.fr pour des mots aléatoires par catégorie.
                                        Jouable au clavier, avec historique des parties et statistiques en local storage. Initialement développé en JavaScript
                                        Vanilla avant d&apos;être porté en React.
                                    </p>

                                    <footer>
                                        <img src={reactIcon} alt="Icône React"/>
                                        <img src={vitejsIcon} alt="Icône ViteJS"/>
                                        <img src={javascriptIcon} alt="Icône JavaScript"/>
                                        <img src={htmlIcon} alt="Icône HTML"/>
                                        <img src={cssIcon} alt="Icône CSS"/>
                                    </footer>
                                </main>
                            </article>
                        </SwiperSlide>

                        {/* kucra */}
                        <SwiperSlide>
                            <article className='projet'>
                                <header>
                                    <a href="https://github.com/Charlydcn/Kucra_Landing_Page" target='_blank' className='relative'>
                                        <img src={kucra} alt="Logo du projet Kucra" />
                                        <FontAwesomeIcon
                                            className="opacity-0 pointer-events-none text-5xl text-white z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-200"
                                            icon={faArrowRightFromBracket}
                                        />
                                    </a>
                                </header>

                                <main>
                                    <a
                                        href="https://github.com/Charlydcn/Kucra_Landing_Page"
                                        target='_blank'
                                        className='project-title md:hover:text-[#338ca9]'>

                                        Kucra
                                    </a>

                                    <p className='project-year'>2023</p>

                                    <p className='project-desc'>
                                        Premier projet de formation : une landing page responsive basée sur une maquette. Ajout de PHP pour
                                        gérer les forfaits avec un dashboard admin pour l&apos;ajout/édition/suppression. Non hébergé publiquement, mais présentation complète avec vidéos sur GitHub.
                                    </p>

                                    <footer>
                                        <img src={phpIcon} alt="Icône PHP"/>
                                        <img src={htmlIcon} alt="Icône HTML"/>
                                        <img src={cssIcon} alt="Icône CSS"/>
                                        <img src={javascriptIcon} alt="Icône JavaScript"/>
                                    </footer>
                                </main>
                            </article>
                        </SwiperSlide>

                        {/* github */}
                        <SwiperSlide>
                            <article className='projet'>
                                <header>
                                    <a href="https://github.com/Charlydcn?tab=repositories" target='_blank' className='relative'>
                                        <img src={githubpfp} alt="Photo de profil Github Charlydcn" />
                                        <FontAwesomeIcon
                                            className="opacity-0 pointer-events-none text-5xl text-white z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-200"
                                            icon={faArrowRightFromBracket}
                                        />
                                    </a>
                                </header>

                                <main>
                                    <a
                                        href="https://github.com/Charlydcn?tab=repositories"
                                        target='_blank'
                                        className='project-title'>

                                        Et bien plus sur mon Github !
                                    </a>

                                    <p className='project-year'>2022&nbsp;-&nbsp;2024</p>

                                    <p className='project-desc'>
                                        Pendant mes formations, j&apos;ai réalisé de nombreux projets fictifs dans des conditions proches du réel.
                                        
                                        Bien qu&apos;ils ne soient pas publiquement accessibles, certains ont demandé plusieurs semaines de travail.
                                        
                                        Venez découvrir ces projets sur mon GitHub !
                                    </p>

                                    <footer>
                                    </footer>
                                </main>
                            </article>
                        </SwiperSlide>
                    </Swiper>
                </section>

                <section id="contact" className="bg-noir">
                    <h5 className='text-blanc'>Entrons en contact</h5>

                    <div className='w-fit grid grid-cols-2 grid-rows-2 gap-6 justify-items-center mx-auto'>

                        <div className="contact-div col-span-1">
                            <FontAwesomeIcon icon={faLinkedin} />
                            <a href="https://www.linkedin.com/in/charlydcn/" target="_blank">Charly Ducournau-Guichard</a>
                        </div>

                        <div className="contact-div col-span-1">
                            <FontAwesomeIcon icon={faGithub} />
                            <a href="https://github.com/Charlydcn" target="_blank">@Charlydcn</a>
                        </div>

                        <div className="contact-div col-span-2">
                            <FontAwesomeIcon icon={faLocationDot} />
                            <p>Strasbourg, France</p>
                        </div>
                    </div>
                </section>
            </main>
        </>


    )
}

export default App
