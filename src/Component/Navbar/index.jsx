import './Navbar.css'
function index() {
  return (
    <div className='nav-container'>
      <div className='logo'>
        <img src="./images/LandingPage/FirmLogo.png" alt="" />
        <h3>IGSTUDIO</h3>
      </div>
      <div className='nav-options'>
        <p>Home</p>
        <p>Attorneys</p>
        <p>Practice Areas</p>
        <p>About Us</p>
      </div>
      <div className='contactUs'>
        <p>Contact Now</p>
      </div>
    </div>
  )
}

export default index
