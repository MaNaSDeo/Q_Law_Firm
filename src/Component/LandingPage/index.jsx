import Navbar from '../Navbar'

import './LandingPage.css'
function index() {
  return (
    <div className='landing-page'>
      <Navbar />
      <div className="landing-container">
        <div className="landing-text">
          <div>
            <p className='intro-text-top'>You don't have to </p>
            <p className='intro-text-logo'>Fight them Alone.</p>
          </div>
          <div>
            <p className='intro-text-bottom'>Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,</p>
            <p className='intro-text-bottom'>curabitur sodales conubia ut inceptos faucibus himenaeos tortor</p>
            <p className='intro-text-bottom'>eget, hac massa gravida arcu interdum proin curae.</p>
          </div>
          <div className="mail-box">
            <textarea 
              type="text"
              placeholder='Enter your eamil address'
            />
            <button>Let's Talk</button>
          </div>
        </div>
        <div className="landing-img">
          <img src="./images/LandingPage/Landing-page-face.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default index
