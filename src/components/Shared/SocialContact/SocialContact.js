import React from 'react';
import './SocialContact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter,faFacebookF, faLinkedin} from '@fortawesome/free-brands-svg-icons'


const SocialContact = () => {
    return (
        <div className="socialContact">
            <ul class="share-icons">
                <li class="icon-facebook"><a href="https://www.facebook.com/profile.php?id=100023803544630" target="_blank" rel="noreferrer" >Share &#160; &#160;<FontAwesomeIcon className="fbIcon" icon={faFacebookF} /> </a></li>
                <li class="icon-twitter"><a href="https://twitter.com/TasnimJ51157228?s=09" target="_blank" rel="noreferrer">Tweet  &#160; &#160; <FontAwesomeIcon className="twitterIcon" icon={faTwitter} /></a></li>
                <li class="icon-linkedIn"><a href="https://www.linkedin.com/in/SultanaTasnimJ/" target="_blank" rel="noreferrer">LinkedIn  &#160; &#160; <FontAwesomeIcon className="twitterIcon" icon={faLinkedin} /></a></li>
            </ul>
        </div>
    );
};

export default SocialContact;

