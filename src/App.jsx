import './index.css'

import $ from 'jquery';


// ---------------------------------------------------------------------------
// components ----------------------------------------------------------------
import Softskill from './components/Softskill';
import Techno from './components/Techno';
// ---------------------------------------------------------------------------



// ---------------------------------------------------------------------------
// img imports ---------------------------------------------------------------
import photoIntro from "../src/assets/img/photo-intro.webp";

// cercles déco
import circle1 from "../src/assets/img/decorations/circle_1.webp";
// import circle2 from "../src/assets/img/decorations/circle_2.webp";
import circle3 from "../src/assets/img/decorations/circle_3.webp";
import circle4 from "../src/assets/img/decorations/circle_4.webp";

// icones section texte
import collaborationIcon from "../src/assets/img/icones/collaboration.webp";
import curiosityIcon from "../src/assets/img/icones/curiosity.webp";
import creativeIcon from "../src/assets/img/icones/creative.webp";

// icones technos
import reactIcon from "../src/assets/img/icones/technos/react.webp";
import symfonyLightIcon from "../src/assets/img/icones/technos/symfony_light.webp";
import symfonyDarkIcon from "../src/assets/img/icones/technos/symfony_dark.webp";
import tailwindIcon from "../src/assets/img/icones/technos/tailwind.webp";
import phpIcon from "../src/assets/img/icones/technos/php.webp";
import mysqlIcon from "../src/assets/img/icones/technos/mysql.webp";
import gitIcon from "../src/assets/img/icones/technos/git.webp";
import figmaPhotoshopIcon from "../src/assets/img/icones/technos/figma_photoshop.webp";
import trelloIcon from "../src/assets/img/icones/technos/trello.webp";
import htmlIcon from "../src/assets/img/icones/technos/html.webp";
import cssIcon from "../src/assets/img/icones/technos/css.webp";
import javascriptIcon from "../src/assets/img/icones/technos/javascript.webp";
import jqueryIcon from "../src/assets/img/icones/technos/jquery.webp";
import vitejsIcon from "../src/assets/img/icones/technos/vitejs.webp";

// projets
import elanDentaire from "../src/assets/img/projets/elandentaire.webp";
import avotrott from "../src/assets/img/projets/avotrott.webp";
import beergarden from "../src/assets/img/projets/beergarden.webp";
import portfolio from "../src/assets/img/projets/portfolio.webp";
import hangmanGame from "../src/assets/img/projets/hangman_game.webp";
import kucra from "../src/assets/img/projets/kucra.webp";
import newsgrid from "../src/assets/img/projets/newsgrid.webp";
import githubpfp from "../src/assets/img/projets/githubpfp.webp";
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
// ---------------------------------------------------------------------------


// ---------------------------------------------------------------------------
import AOS from 'aos';
import 'aos/dist/aos.css';
// ---------------------------------------------------------------------------



// ---------------------------------------------------------------------------
// swiper --------------------------------------------------------------------
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/swiper-bundle.css'
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------



// ---------------------------------------------------------------------------
// fontawesome ---------------------------------------------------------------
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faEllipsis, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import Projet from './components/Projet';
import ContactBtn from './components/ContactBtn';
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------




function App() {

    AOS.init({
        duration: 1000,
        once: true,
    });

    // fonction générale pour scroll à une section avec un duration donnée (offset de base de 25% top car plus agréable)
    const goToSection = ($section, duration) => {
        if ($section && $section.length) {
            const offsetTop = $section.offset().top - (window.innerHeight * 0.25);
    
            $('html, body').animate({
                scrollTop: offsetTop
            }, duration);
        }
    };
    
    // tableau d'objet des technos
    const technologies = {
        symfony : { img: symfonyDarkIcon, imgAlt: 'Icône Symfony', text: 'Symfony' },
        php : { img: phpIcon, imgAlt: 'Icône PHP', text: 'PHP' },
        react : { img: reactIcon, imgAlt: 'Icône React', text: 'React' },
        tailwind : { img: tailwindIcon, imgAlt: 'Icône Tailwind', text: 'Tailwind' },
        mysql : { img: mysqlIcon, imgAlt: 'Icône MySQL', text: 'MySQL' },
        html : { img: htmlIcon, imgAlt: 'Icône HTML', text: 'HTML' },
        css : { img: cssIcon, imgAlt: 'Icône CSS', text: 'CSS' },
        js : { img: javascriptIcon, imgAlt: 'Icône Javascript', text: 'Javascript' },
        git : { img: gitIcon, imgAlt: 'Icône Git', text: 'Git' },
        
        vitejs : { img: vitejsIcon, imgAlt: 'Icône ViteJS', text: 'ViteJS' },
        figmaPhotoshop : { img: figmaPhotoshopIcon, imgAlt: 'Icône Figma et Photoshop mélangés', text: 'Figma/Photoshop' },
        trello : { img: trelloIcon, imgAlt: 'Icône Trello', text: 'Trello' },
        jquery : { img: jqueryIcon, imgAlt: 'Icône jQuery', text: 'jQuery' },
    };

    // tableau des projets
    const projets = [
        // elan dentaire
        {  
            link: "https://elan-dentaire.fr",
            img: elanDentaire,
            imgAlt: "Logo du projet ELAN Dentaire",
            title: "ELAN Dentaire",
            year: "2024",
            desc: "Site vitrine optimisée en termes de performances et de SEO, comprend un formulaire de contact sécurisé.",
            technos: [
                technologies.symfony,
                technologies.html,
                technologies.css,
                technologies.js,
                technologies.jquery,
            ]
        },
    
        // avotrott
        {   
            link: "https://avo-trottinettes.fr/",
            img: avotrott, imgAlt: "Logo du projet Avo'Trottinettes",
            title: "Avo'Trottinettes",
            year: "2024",
            desc: "Site vitrine responsive pour Avo'Trottinettes, optimisé pour les performances et le SEO.",
            technos: [
                technologies.html,
                technologies.css,
                technologies.js,
                technologies.jquery,
            ]
        },
    
        // beer garden
        {   
            link: "https://beer-garden-tailwind.vercel.app/",
            img: beergarden, imgAlt: "Logo du projet Beer Garden",
            title: "Beer Garden",
            year: "2024",
            desc: "Site \"One page\" fictif développé avec TailwindCSS, réalisé à partir d'une maquette.",
            technos: [
                technologies.vitejs,
                technologies.tailwind,
                technologies.js,
                technologies.html,
                technologies.css,
            ]
        },
    
        // newsgrid
        {   
            link: "https://news-grid-ruddy.vercel.app/",
            img: newsgrid, imgAlt: "Logo du projet News Grid",
            title: "NewsGrid",
            year: "2024",
            desc: "Site vitrine fictif utilisant CSS Grid. Comprend quatre pages : Accueil, Contact, Article et À propos.",
            technos: [
                technologies.html,
                technologies.css,
                technologies.js,
            ]
        },
    
        // hangman game
        {   
            link: "https://hangman-game-2-0.vercel.app/",
            img: hangmanGame, imgAlt: "Logo du projet Hangman Game",
            title: "Hangman game",
            year: "2024",
            desc: "Jeu du pendu en React. Inclus un historique des parties et des statistiques sur ce dernier.",
            technos: [
                technologies.react,
                technologies.vitejs,
                technologies.js,
                technologies.html,
                technologies.css,
            ]
        },
    
        // kucra
        {   
            link: "https://github.com/Charlydcn/Kucra_Landing_Page",
            img: kucra, imgAlt: "Logo du projet Kucra",
            title: "Kucra",
            year: "2023",
            desc: "Site vitrine fictif basée sur une maquette. Présentation complète et des vidéos sur GitHub.",
            technos: [
                technologies.php,
                technologies.html,
                technologies.css,
                technologies.js,
            ]
        },
    
        // portfolio
        {   
            link: "",
            img: portfolio, imgAlt: "Logo de mon Portfolio 2024",
            title: "Portfolio",
            year: "2024",
            desc: "Le site que vous visitez actuellement, conçu et développé entièrement par moi-même.",
            technos: [
                technologies.vitejs,
                technologies.tailwind,
                technologies.js,
                technologies.html,
                technologies.css,
            ]
        },
    
        // // github
        // {   
        //     link: "https://github.com/Charlydcn?ta:repositories",
        //     img: githubpfp, imgAlt: "Photo de profil Github Charlydcn",
        //     title: "Github",
        //     year: "2022 - 2024",
        //     desc: "Découvrez mes nombreux projets fictifs réalisés pendant ma formation. Bien que certains ne soient pas accessibles publiquement, ils montrent un travail approfondi et varié.",
        //     technos: []
        // }
    ];
    
    

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
                <section className='relative w-full h-svh text-blanc flex items-center justify-center'>
                    {/* backgrounds */}
                    <div className='absolute w-full h-full top-0 z-0 flex flex-row'>
                        <div className='bg-noir w-full h-full'></div>
                        {/* <div className='absolute right-16 bg-blanc w-6 h-full'></div> */}
                    </div>

                    {/* circles */}
                    <img src={circle1} className="h-40 right-0 -bottom-20 absolute z-10 md:-bottom-24 md:md:left-12" alt="Cercle"/>
                    <img src={circle3} className="w-64 -top-32 -left-32 absolute z-10 lg:-top-36 lg:-left-40 lg:w-auto" alt="Cercle"/>
                    
                    {/* intro */}
                    <div className='relative z-5 max-w-[85vw] flex flex-col-reverse gap-4 items-center justify-between m-auto text-blanc lg:gap-0 lg:w-3/4 2xl:max-w-screen-xl xl:w-2/3 lg:flex-row'>

                        {/* texte */}
                        <div className='flex flex-col mx-auto items-start lg:w-2/3 lg:px-0'>
                            <h3 
                                className='lg:text-lg font-light opacity-50 mb-2'
                                data-aos="fade-left"
                            >
                                Enchanté
                            </h3>

                            <h2 
                                className='text-4xl font-semibold lg:text-5xl'
                                data-aos="fade-left"
                                data-aos-delay="150"
                            >
                                Moi c&apos;est <span className="text-vert">Charly</span>
                            </h2>

                            <p 
                                className='opacity-50 my-4 font-light'
                                data-aos="fade-left"
                                data-aos-delay="300"
                            >
                                Votre futur développeur web pour 2024-25 et au-delà&nbsp;!
                            </p>

                            <button
                                onClick={() => goToSection($('#softskills'), 1000)}
                                className='border-2 border-blanc flex items-center justify-between font-semibold w-56 px-2 pr-0 h-10 group sm:w-72'
                                data-aos="fade-left"
                                data-aos-delay="450"
                            >

                                <span className='transition-transform duration-200 md:group-hover:translate-x-1'>Pourquoi moi ?</span>
                                <div className='bg-blanc h-full w-16 flex items-center justify-center'>
                                    <FontAwesomeIcon className="text-noir text-xl" icon={faArrowRight}/>
                                </div>
                            </button>

                            <FontAwesomeIcon
                                className="text-blanc w-14 text-6xl mt-10"
                                icon={faEllipsis}
                                data-aos="fade-left"
                                data-aos-delay="600"
                            />
                        </div>


                        {/* photo */}
                        <div className='relative w-4/5 max-w-96 lg:max-w-full lg:w-96' data-aos="fade-up" data-aos-delay="150">
                            <img loading="lazy" className='w-full' src={photoIntro} alt="Photographie de moi-même" />
                            <img loading="lazy" src={circle1} className="absolute h-24 bottom-0 -right-2" alt="Cercle"/>
                        </div>
                    </div>
                </section>

                <section id="softskills" className='relative flex flex-col items-center w-11/12 mx-auto gap-24 lg:flex-row xl:h-96 xl:w-4/5'>
                    <img src={circle3} className="h-24 -left-10 -bottom-12 absolute z-10 md:right-0 md:left-auto" alt="Cercle"/>

                    <Softskill
                        className="softskill"
                        img={creativeIcon}
                        title="Au-delà du code"
                        text="Plus qu&apos;un simple exécutant, je propose activement des idées innovantes qui enrichissent chaque projet,
                            tout en respectant ses fondements initiaux."
                        aosData="fade-up"
                    />

                    <Softskill
                        className="softskill"
                        img={curiosityIcon}
                        title="Curiosité professionnelle"
                        text="Après deux ans de développement, je reste motivé à découvrir de nouvelles technologies et à
                            affiner mes compétences, tout en me remettant en question."
                        aosData="fade-up"
                        aosDelay="200"
                    />

                    <Softskill
                        className="softskill"
                        img={collaborationIcon}
                        title="Aisance relationnelle"
                        text="Mon expérience dans le commerce m&apos;a permis de développer de solides compétences
                            relationnelles et une grande facilité à travailler en équipe."
                        aosData="fade-up"
                        aosDelay="400"
                    />
                </section>

                <section id="techno" className='relative min-h-svh pb-32 bg-noir flex flex-col justify-center lg:min-h-0'>
                    <img loading="lazy" src={circle4} className="hidden absolute h-48 z-10 right-12 -bottom-24 lg:block" alt="Cercle"/>

                    <h5 className='text-blanc'>Technologies</h5>

                    <div className='technos-container grid grid-cols-1 gap-12 w-fit mx-auto sm:grid-cols-2 sm:grid-rows-4 lg:grid-cols-4 lg:grid-rows-2'>
                        {
                            // uniquement les 8 premières, celles d'après sont utilisés pour la section projet
                            Object.entries(technologies).slice(0, 8).map(([key, tech]) => (
                                <Techno
                                    key={key}
                                    img={tech.img}
                                    imgAlt={tech.imgAlt}
                                    text={tech.text}
                                    aosData="fade-up"
                                />
                            ))
                        }
                    </div>
                </section>

                <section id="projets">
                    <h5 className='text-4xl' data-aos="fade-up">Portfolio</h5>

                    <span className="line"></span>

                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        breakpoints={{
                            650: {
                                slidesPerView: 2,
                            },
                            900: {
                                slidesPerView: 3,
                            },
                            1280: {
                                slidesPerView: 4,
                            },
                            1536: {
                                slidesPerView: 5,
                            }
                        }}
                        pagination={{
                          clickable: true,
                        }}
                        grabCursor={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        // loop={true}
                        modules={[Pagination, Autoplay]}
                        
                        data-aos="fade-up"
                        data-aos-delay="200"
                        className="mySwiper"
                    >

                        {
                            projets.map((projet, index) => (
                                <SwiperSlide key={index}>
                                    <Projet
                                        link={projet.link}
                                        img={projet.img}
                                        imgAlt={projet.imgAlt}
                                        title={projet.title}
                                        year={projet.year}
                                        desc={projet.desc}
                                        technos={projet.technos}
                                    />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </section>

                <section id="contact" className="relative bg-noir pb-36">
                    <img loading="lazy" src={circle1} className="absolute z-10 h-32 -top-20 -left-8" alt=""/>

                    <h5 className='text-blanc' data-aos="fade-down">À bientôt !</h5>

                    <div className='w-fit flex flex-col gap-6 justify-items-center mx-auto md:grid md:grid-cols-2 md:grid-rows-2'>
                        <ContactBtn 
                            icon={faLinkedin} 
                            text="Charly Ducournau-Guichard" 
                            link="https://www.linkedin.com/in/charlydcn/" 
                            aos="fade-right" 
                            aosDelay="100"
                        />
                        
                        <ContactBtn 
                            icon={faGithub} 
                            text="@Charlydcn" 
                            link="https://github.com/Charlydcn" 
                            aos="fade-left" 
                            aosDelay="200"
                        />

                        <ContactBtn 
                            icon={faLocationDot} 
                            text="Strasbourg, France" 
                            aos="fade-down" 
                            aosDelay="300"
                            className="col-span-2"
                        />
                    </div>

                    <p className='absolute bottom-0 left-1/2 -translate-x-1/2 w-max max-w-[90vw] text-blanc italic opacity-50 text-center pb-2'>
                        &copy;&nbsp;2024&nbsp;&#45;&nbsp;Charly&nbsp;DUCOURNAU&#45;GUICHARD
                    </p>
                </section>
            </main>
        </>


    )
}

export default App
