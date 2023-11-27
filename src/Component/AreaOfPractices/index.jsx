import './AreaOfPractices.css'

function index() {
  return (
    <div className='areaOfPractices-page'>
      <p className="practice-heading">Area of Practices</p>
      <div className='AOP-grid-container'>
        <div className="first-row">
          <div className='business rect-img'>
            <img src="./images/AreaOfPractices/BUSINESS-LAW.png" alt="BUSINESS LAW" />
            <p className='business-text'>BUSINESS LAW</p>
          </div>
          <div className='partnership sqr-img'>
            <img src="./images/AreaOfPractices/Partnership-LAW.png" alt="Partnership LAW" />
            <p className='partnership-text'>Partnership LAW</p>
          </div>
        </div>
        <div className="second-row">
          <div className='real-state sqr-img'>
            <img src="./images/AreaOfPractices/REAL-ESTATE-LAW.png" alt="REAL ESTATE LAW" />
            <p className='real-state-text'>REAL ESTATE LAW</p>
          </div>
          <div className='business2 rect-img'>
            <img src="./images/AreaOfPractices/BUSINESS-LAW2.png" alt="BUSINESS LAW" />
            <p className='business2-text'>BUSINESS LAW</p>
          </div>
        </div>
        <div className="third-row">
          <div className='landlord rect-img'>
            <img src="./images/AreaOfPractices/LANDLORD-DISPUTES.png" alt="LANDLORD DISPUTES" />
            <p className='landlord-text'>LANDLORD DISPUTES</p>
          </div>
          <div className='elder-abuse sqr-img'>
            <img src="./images/AreaOfPractices/ELDER-ABUSE.png" alt="ELDER ABUSE" />
            <p className='elder-abuse-text'>ELDER ABUSE</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index
