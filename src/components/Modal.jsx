import { useEffect } from "react";
import PropTypes from 'prop-types';

const Modal = ({ isOpen, onClose }) => {
    useEffect(() => {
      if (isOpen) {
        document.body.classList.add('overflow-hidden');
      } else {
        document.body.classList.remove('overflow-hidden');
      }
  
      return () => {
        document.body.classList.remove('overflow-hidden');
      };
    }, [isOpen]);
  
    if (!isOpen) return null;
  
    return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      
        <div
          className="relative bg-white p-6 rounded-lg max-w-3xl w-full mx-4 max-h-[80svh] overflow-y-scroll"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-3 right-3 text-black hover:text-red-600 text-xl"
            onClick={onClose}
          >
            &times;
          </button>
          <h1 className="text-2xl font-bold mb-4">Mentions Légales</h1>

          <h2 className="text-xl font-semibold mt-4">Éditeur du site</h2>
          <p>Le présent site est édité par Charly DUCOURNAU-GUICHARD, un particulier.</p>
          <p>
            Les informations détaillées de contact peuvent être fournies sur demande via message
            privé&nbsp;
            <a
              href="https://www.linkedin.com/in/charlydcn/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              LinkedIn
            </a>
            .
          </p>

          <h2 className="text-xl font-semibold mt-4">Hébergement</h2>
          <p>Le site est hébergé par Vercel Inc.</p>
          <p>Adresse : 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.</p>

          <h2 className="text-xl font-semibold mt-4">Nom de domaine</h2>
          <p>Le nom de domaine a été acquis via OVH.</p>
          <p>Adresse : 2 rue Kellermann, 59100 Roubaix, France.</p>

          <h2 className="text-xl font-semibold mt-4">Propriété intellectuelle</h2>
          <p>
            Tous les contenus présents sur ce site (textes, images, etc.) sont protégés par le droit
            d&apos;auteur. Toute reproduction, même partielle, est interdite sans autorisation
            préalable.
          </p>

          <h2 className="text-xl font-semibold mt-4">Absence de collecte de données personnelles</h2>
          <p>
            Ce site ne collecte aucune donnée personnelle, n&apos;utilise aucun cookie, et ne comporte
            aucun formulaire de contact.
          </p>
        </div>
    </div>
  );
};

export default Modal;

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
  };
