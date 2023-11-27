import './Introduction.css'

function index() {
  return (
    <div className='introduction-page'>
      <div className='intro'>
        <div className='heading'>
          <p>Let’s Introduce</p>
          <p>Ourself</p>
        </div>
        <div className='right-div'>
            <p className='criminal-lawyer-title'>Criminal Lawyer</p>
            <p className='criminal-lawyer-text'>Amet minim mollit non deserunt ullamco est</p>
            <p className='criminal-lawyer-text'>sit aliqua dolor do amet sint. Velit officia consequatduis</p>
            <p className='criminal-lawyer-text'>enim velit mollit Exercitation.</p>
        </div>
      </div>
      <div className='choose-us'>
        <p className='choose-us-title'>Why Choose us?</p>
        <div className='success-card-contaier'>
        <div className="success-card">
          <div className='union-img'>
            <img src="./images/IntroductionPage/Union.png" alt="union image" />
          </div>
          <div className='success-rate'>
            <p>98% Success Rate</p>
          </div>
          <div className='success-text'>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.</p>
          </div>
          <button className='success-btn'>Read More</button>
        </div>
        <div className="success-card">
          <div className='union-img'>
            <img src="./images/IntroductionPage/Union.png" alt="union image" />
          </div>
          <div className='success-rate'>
            <p>100% Success Rate</p>
          </div>
          <div className='success-text'>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.</p>
          </div>
          <button className='success-btn'>Read More</button>
        </div>
        <div className="success-card">
          <div className='union-img'>
            <img src="./images/IntroductionPage/Union.png" alt="union image" />
          </div>
          <div className='success-rate'>
            <p>100% Success Rate</p>
          </div>
          <div className='success-text'>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.</p>
          </div>
          <button className='success-btn'>Read More</button>
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default index
