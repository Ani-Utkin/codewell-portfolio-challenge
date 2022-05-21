import '../../App.css';

import Github from './Social Icons/Github.svg';
import LinkedIn from './Social Icons/LinkedIn.svg';
import Twitter from './Social Icons/Twitter.svg';

function Footer() {
    return(
        <div className='footer'>
            <div className='nav-bar-name'>Johnathan Specter</div>
            <div className='social-media-icons'>
                <img src={Twitter} alt='Twitter'/>
                <img src={LinkedIn} alt='LinkedIn'/>
                <img src={Github} alt='Github'/>
            </div>
        </div>
    );
}

export default Footer;