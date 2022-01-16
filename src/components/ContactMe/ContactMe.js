import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import "./contactMe.css"

function ContactMe(){
    return(
        <div className="contact-me">
            <ul>
                <li>
                    <button>
                        <a href="https://github.com/Sergio-Torres">
                            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                        </a>   
                    </button>
                </li>
                <li>
                    <button>
                        <a href="https://www.instagram.com/sergiotorres7/">
                            <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                        </a>   
                    </button>
                </li>
                <li>
                    <button>
                        <a href="https://twitter.com/sergio_dtc21">
                            <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                        </a>   
                    </button>
                </li>
            </ul>     
        </div>
        
        
    );
}

export default ContactMe;