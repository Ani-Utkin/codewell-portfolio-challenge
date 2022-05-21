import '../../App.css';

import Walmart from './Logos/Walmart.svg';
import JPMorgan from './Logos/JP Morgan.svg';
import Visa from './Logos/Visa.svg';
import Tinder from './Logos/Tinder.svg';
import Samsung from './Logos/Samsung.svg';
import Verizon from './Logos/Verizon.svg';

import Spense from '../main/Spense.png';
import Yelp from '../main/YelpCamp.png';

function Main() {
  return (
    <div className="main">
        <div className='main-top'>
            <h2>Helping companies build better, scalable software.</h2>
            <p className='top'>Award-winning web developer and author, with over 15+ years of working experience with Fortune 500 companies like Apple, Google, Facebook, and more.</p>
        </div>
        <div className='main-logos'>
            <img src={Walmart} alt='Walmart'/>
            <img src={JPMorgan} alt='Walmart'/>
            <img src={Visa} alt='Walmart'/>
            <img src={Tinder} alt='Walmart'/>
            <img src={Samsung} alt='Walmart'/>
            <img src={Verizon} alt='Walmart'/>
        </div>
        <div className='main-tabs'>
            <div className='tab1'>
                <img src={Spense} alt='Spense'/>
                <h3>Spense.com</h3>
                <p>Rethinking the way writers get paid, an open-source platform designed to help writers focus more on writing, and less on when and how they'll get paid. Project in collaboration with Codewell.cc</p>
            </div>
            <div className='tab2'>
                <img className='yelp' src={Yelp} alt='Yelp'/>
                <h3>YelpCamp.com</h3>
                <p>Allowing backpack travelers to perfectly plan their trip through an open-source platform similar to TripAdvisor. With over 1m MAU, YelpCamp has been the crowd's favorite in 2021.</p>
            </div>
        </div>
        <div className='main-two'>
            <div className='two-left'>
                <h3>A co-founder at one of the world's largest communities.</h3>
                <p>The combined experience I have working at the top Fortune 500 companies has allowed me to develop a skillset that helps me in not just development, but in every aspect of any business.</p>
                <p>I'm proud to announce that I am now working at one of the world's largest communities teaching young minds about how to sell yourself as a developer and open them to a whole new world of opportunities.</p>
            </div>
            <div className='two-right'>
                <p>As a developer, you have everything to you and all that's holding you back is yourself.</p>
                <p>A quote I live by perfectly illustrates what I mean.</p>
                <p>"How big would you dream, if you knew you wouldn't fail?" You've already gone through the hardest parts being a developer, it's time to elevate your skills and become a leader in something you're passionate about.</p>
                <p>I'm happy to chat over coffee some time about how I can help your company.</p>
            </div>
        </div>
        <div className='main-three'>
            <div>
            <h3>Interested in working with me?</h3>
            <p className='text'>I'm active on all social media platforms listed below, but you can also send me an email and I will get back to you within 24-48 hours.</p>
            <button>Get in touch</button>
            </div>
            <div></div>
        </div>
    </div>
  );
}

export default Main;