import './index.css'

import photoIntro from "../src/assets/img/photo-intro.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


function App() {
    return (
        <section className='relative w-screen h-screen text-jaune flex items-center justify-center'>
            <div className='absolute w-full h-full top-0 z-0 flex flex-row'>
                <div className='bg-vert w-3/4 h-full'></div>
                <div className='bg-jaune w-1/4 h-full'></div>
            </div>
            
            <div className='relative z-5 flex items-center justify-between max-w-4xl m-auto gap-28'>
                <div className='flex flex-col '>
                    <h3 className='text-sm font-extralight'>Enchanté</h3>
                    <h2 className='text-5xl font-semibold'>Moi c&apos;est Charly</h2>
                    <p>Votre futur Alternant développeur web pour 2024-25 et au-delà !</p>
                    <button className='border-2 border-jaune flex items-center justify-between px-2 pr-0 w-72 h-10'>
                        Pourquoi moi ?
                        <div className='bg-jaune h-full w-16 flex items-center justify-center'>
                            <FontAwesomeIcon className="text-vert text-xl" icon={faArrowRight}/>
                        </div>
                    </button>
                </div>

                <img className='w-72' src={photoIntro} alt="" />
            </div>
        </section>
    )
}

export default App
