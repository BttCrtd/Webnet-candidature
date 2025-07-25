import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPhone,
  faEnvelope,
  faGlobe,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons'
import profil from '../../assets/profil.png'

function CV() {
  return (
    <section className="cv-container">
      <div className="grey-cover"></div>
      <div className="blue-cover"></div>
      <div className="light-blue-cover"></div>

      <div className="contact-and-skills">
        <div className="photo-container">
          <img src={profil} alt="Photo de profil de Baptiste Courtadon" />
        </div>

        <h2>Coordonnées</h2>
        <div className="phone">
          <FontAwesomeIcon icon={faPhone} />
          <p>06 47 76 00 63</p>
        </div>
        <div className="mail">
          <FontAwesomeIcon icon={faEnvelope} />
          <a href="mailto:courtadon.baptiste@gmail.com">
            courtadon.baptiste@gmail.com
          </a>
        </div>
        <div className="portfolio">
          <FontAwesomeIcon icon={faGlobe} />
          <a
            href="https://bttcrtd.github.io/Portfolio/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://bttcrtd.github.io/Portfolio/
          </a>
        </div>
        <div className="localisation">
          <div className="icon-container">
            <FontAwesomeIcon icon={faLocationDot} />
          </div>

          <div className="adress">
            <p>15 Boulevard Joseph Girod</p>
            <p>63000 Clermont-Ferrand</p>
          </div>
        </div>

        <h2>Compétences</h2>
        <ul>
          <li>Organisé</li>
          <li>Rigoureux</li>
          <li>Impliqué</li>
          <li>Dynamique</li>
          <li>Travail d'équipe</li>
          <li>Flexible</li>
          <li>Compétences informatiques</li>
          <li>Permis B</li>
        </ul>
        <h2>Compétences Techniques</h2>
        <h3>Front-end</h3>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>React</li>
        </ul>
        <h3>Back-end</h3>
        <ul>
          <li>Node.js</li>
          <li>Express</li>
          <li>MongoDB</li>
          <li>API RESt</li>
          <li>Python</li>
        </ul>
        <h3>Autres</h3>
        <ul>
          <li>Git/GitHub</li>
          <li>Responsive Design</li>
          <li>SEO</li>
          <li>Agile</li>
          <li>VS Code</li>
          <li>Notion</li>
        </ul>
        <h2>Centres d'intérêts</h2>
        <ul>
          <li>
            <strong>Musique :</strong>piano
          </li>
          <li>
            <strong>Sport :</strong>course
          </li>
          <li>
            <strong>Photographie </strong>
          </li>
          <li>
            <strong>Escape game</strong>
          </li>
        </ul>
      </div>
      <div className="experience-and-formation">
        <div className="title">
          <h1>Baptiste Courtadon</h1>
          <h2>
            Étudiant de 25 ans en recherche d'une alternance en développement
            Web JavaScript React
          </h2>
        </div>
        <div className="projects">
          <h2>Projets Réalisés</h2>
          <h3>OpenClassrooms -Développeur Web - Depuis Septembre 2024</h3>
          <ul>
            <li>
              Création de la page d’accueil d’une agence de voyage en HTML et
              CSS
            </li>
            <p>
              Implémenter une interface responsive / Intégrer du contenu
              conformément à une maquette
            </p>
            <li>
              Création d’une page web dynamique JavaScript pour une Architecte
              d’intérieure
            </li>
            <p>
              Récupérer les données via des formulaires / Manipuler des éléments
              du DOM avec JavaScript / Gérer les événements utilisateurs avec
              JavaScript
            </p>
            <li>Débuggage et optimisation du SEO d’un site de Photographe</li>
            <p>
              Optimiser les performances d’un site web / Débugger un site web
              grâce aux Chrome DevTools / Rédiger un cahier de recette pour
              tester un site
            </p>
            <li>
              Création d’une application web de location immobilière avec React
            </li>
            <p>
              Configurer la navigation entre les pages de l’application avec
              React Router / Initialiser une application avec Vite / Développer
              des éléments de l’interface d’un site grâce à des composants
            </p>
            <li>Développement du back-end d’un site de notation de livres.</li>
            <p>
              Implémenter un modèle logique de données conformément à la
              réglementation / Mettre en œuvre des opérations CRUD de manière
              sécurisée / Stocker et gérer des données de manière sécurisée
            </p>
          </ul>
        </div>
        <div className="experience-pro-and-formations">
          <h2 className="border-bot">Expérience Professionnelle</h2>
          <div className="exp-pro">
            <div className="place-of-work">
              <p>
                <strong>Collège Henri Pourrat</strong>
              </p>
              <p>Ceyrat</p>
              <p>63122</p>
              <p>2019 - 2024</p>
            </div>
            <div className="description">
              <p>
                <strong>AED -Apprenti Enseignant en devenir</strong>
              </p>
              <p>Intervention sur des séquences pédagogiques</p>
              <p>Création et présentation de séquences pédagogiques</p>
            </div>
          </div>
          <h2 className="border-bot">Formations</h2>
          <div className="OCR">
            <div className="place-of-work">
              <p>
                <strong>OpenClassrooms</strong>
              </p>
              <p>Depuis Septembre 2024</p>
            </div>
            <div className="description">
              <p>
                <strong>Développeur Web</strong>
              </p>
            </div>
          </div>
          <div className="UCA">
            <div className="place-of-work">
              <p>
                <strong>Université Clermont Auvergne</strong>
              </p>
              <p>INSPE Chamalières</p>
              <p>63400</p>
              <p>2022 - 2023</p>
            </div>
            <div className="description">
              <p>
                <strong>Maîtrise 1 Sciences Humaines et Sociales</strong>
              </p>
              <p>MEEF Second Degré, Parcours Mathématiques</p>
            </div>
          </div>
          <div className="UCA">
            <div className="place-of-work">
              <p>
                <strong>Université Clermont Auvergne</strong>
              </p>
              <p>Clermont-Ferrand</p>
              <p>63000</p>
              <p>2018 - 2022</p>
            </div>
            <div className="description">
              <p>
                <strong>Licence de Mathématiques</strong>
              </p>
              <p>Mathématiques</p>
              <p>Option géométrie affine</p>
              <p>Option compléments d'analyse et de géométrie</p>
              <p>Option statistiques mathématiques</p>
              <p>Programmation Python</p>
            </div>
          </div>
          <div className="LJA">
            <div className="place-of-work">
              <p>
                <strong>Lycée Jeanne-d'Arc</strong>
              </p>
              <p>Clermont-Ferrand</p>
              <p>63000</p>
              <p>2017 - 2018</p>
            </div>
            <div className="description">
              <p>
                <strong>Baccalauréat scientifique</strong>
              </p>
              <p>Baccalauréat série scientifique</p>
              <p>Spécialité sciences de la vie et de la terre</p>
              <p>Mention assez bien</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CV
