import './App.css';
import Profile from './Profile.png';
import Arrow from './slant_arrow.svg';
import North from './nort_arrow.svg';
import Square from './square.svg';
import img from './main_pic.png';

function App() {
  return (
    <div className="body">

      <div className="first-section">

        <div className="header">
          <div className='left-nav'>
            <p>AQDAS IDRIS</p>
          </div>
          <div className='button'>
            <button>Download Resume</button>
          </div>
          <div className='right-nav'>
            <a href="#" >Home</a>
            <a href="#">Work</a>
            <a href="#">About</a>
          </div>
          
        </div>

        <div className="pic-section">
          <p>JUNE &nbsp;&nbsp;&nbsp; 14 &nbsp;&nbsp;&nbsp; 2000</p>
          <img src={Profile} alt="Profile" />
          <p>1 Year Experience</p>
        </div>

        <div className="name-title">
          <p>AQDAS IDRIS</p>
          <p>UI/UX DESIGNER</p>
        </div>
        <div className='footer-line'>
            <div className='link-line'>
              <a href="#">LinkedIn</a>
              <a href="#">Instagram</a>
            </div>
            <div className='small-info'>
              <p>A UI/UX Designer with strong base and Foundation, ensuring all design decision is informed.</p>
            </div>
          </div>
      </div>

      <div className="second-section">
        <div className="content">
          <p>I'm <span>Aqdas Idris</span>, I work as a <span>UI/UX designer</span> specialized in the providing <span>design solutions</span> backed by <span>research</span> and conception of <span>custom and unique website</span> backed by <span>design principles</span>.  I love <span>designing interfaces</span> with a beautiful and <span>strong user experience</span>. </p>
          <a href="#">View about Me <img src={Arrow} alt="arrow1" /></a>
        </div>
      </div>

      <div className='third-section'>
        <div className='work-header'>
          <div className='first'>
            <img src={Square} alt="square" /><br />
            <span>I HAVE A YEAR'S</span><br />
            <img src={North} alt="arrow3" />
          </div>
          <div className='second'>
          <span>EXPERIENCE</span>
          </div>

          <div className='third'>
            <img src={North} alt="arrow3" /><br />
            <span>AS UI/UX DESIGNER</span><br />
            <img src={Square} alt="square" />
          </div>
        </div>
        <div className='work-content'>
          <p>REAL WORK EXPERIENCE FROM A PRODUCT BASED COMPANY<br /> TO SERVICE BASED COMPANY. </p>
        </div>
      </div>


      <div className='fourth-section'>
        <div className='card-1'>
          <div className='sec-1'>
            <span>01</span>
          </div>
          <div className='sec-2'>
            <span>UI/UX Designer - Intern</span><br />
            <span>at Corider for 3 months. </span>
            <p>Corider was a product based company, A startup. A ride sharing app, and no, its not carpooling app. It is a ride sharing app that allows user traveling to similar destination share ride of any kind public, private and split the cost while making a travel buddy.</p>
            <a href="#">View Case Study <img src={Arrow} alt="arrow3" /></a>
          </div>
        </div>
        <div className='card-2'>
          <div className='sec-1'>
            <span>02</span>
          </div>
          <div className='sec-2'>
            <span>UI/UX Designer - Intern</span>
            <span>at Idealake Information Technologies pvt ltd for 1 year.</span>
            <p>Corider was a product based company, A startup. A ride sharing app, and no, its not carpooling app. It is a ride sharing app that allows user traveling to similar destination share ride of any kind public, private and split the cost while making a travel buddy.</p>
            <a href="#">View Case Study <img src={Arrow} alt="arrow3" /></a>
          </div>
        </div>
      </div>  

      <div className='fifth-section'>
        <div className='work-header'>
          <div className='first'>
            <span>SOME OF THE BEST UI/UX</span><br />
            <img src={Square} alt="square" />
          </div>
          <div className='second'>
          <span>PROJECTS</span>
          </div>

          <div className='third'>
            <img src={North} alt="arrow3" /><br />
            <span>DESIGNED BY ME</span>
            
          </div>
        </div>
        <div className='work-content'>
          <p>LIVE PROJECTS, SOME CONCEPT PROJECTS AND SOME RESEARCH AND PLAYGROUND</p>
        </div>
      </div>

      <div className='sixth-section'>
        <div className='sec-1'>
          <span>CASE STUDY</span>
          <p>LIVE PROJECTS, SOME CONCEPT PROJECTS AND SOME RESEARCH AND PLAYGROUND. LIVE PROJECTS, SOME CONCEPT.</p>
          <img src={Arrow} alt='link-1'/>
        </div>
        <div className='sec-2'>
          <div className='inner-sec-1'>
            <img src={img}/>
          </div>
          <div className='inner-sec-2'>
            <h4>Case study</h4>
            <h2>CORIDER</h2>
            <div className='boxes-1'>
              <span>UX Design</span>
              <span>UI Design</span>
              <span>Wirefame</span>
              <span>Prototype</span>
              </div>
            <p>Corider is ride sharing app. No, its not a carpooling app, Corider lets you and others traveling towards similar location find each other and travel together, sharing the cost and helping you get a companion. This app lets you ride together regardless of you owning a locomotive of your own.</p>
          </div>
        </div>
        <div className='sec-3'>
          <div className='inner-sec-1'>
            <h4>Case study</h4>
            <h1>HDFC BANK</h1>
            <span>UX Design</span>
            <span>UI Design</span>
            <span>Wirefame</span>
            <span>Prototype</span>
            <p>Corider is ride sharing app. No, its not a carpooling app, Corider lets you and others traveling towards similar location find each other and travel together, sharing the cost and helping you get a companion. This app lets you ride together regardless of you owning a locomotive of your own.</p>
            </div>
          <div className='inner-sec-2'>
            <h4>Case study</h4>
            <h1>BIG SHORT</h1>
            <span>UX Design</span>
            <span>UI Design</span>
            <span>Wirefame</span>
            <span>Prototype</span>
            <p>Corider is ride sharing app. No, its not a carpooling app, Corider lets you and others traveling towards similar location find each other and travel together, sharing the cost and helping you get a companion. This app lets you ride together regardless of you owning a locomotive of your own.</p>
          </div>
        </div>
      </div>

      <div className='seventh-section'>
        <div className='main-content'>
          <span>GOT A PROJECT?</span>
          <p className='para-1'>Lets Connect. I also offer services as a freelancer. whether its a project from scratch or A revamp. Also I enjoy knowing or guiding people so don't hesitate if you have a question or just wanna say "Hi". Looking forward to hear from you.</p>
          <button>Lets Connect</button>
        </div>
        
        <div className='side-content'>
          <span className='psst'>Psst.... A little more about</span>
          <p className='para-2'>In my free time, I love to practice designing interfaces and read a good book, solve a rubiks cube, push my motorbike to its limits and cook. And I'm a gifs lover and sticker lover.<br /><br />There's nothing better than a delicious Italian dish, a good movie with a twist at the end, a swim, a trip with friends, or relaxing in silence!</p>
        </div>
        
        <div className='footer'>
          <span>Copyright 2025-2032</span>
          <span>AQDAS IDRIS</span>
          <span>Contact</span>
        </div>
      </div>
    </div>
  );
}

export default App;