import './Newsletter.css'
function index(){
    return(
        <div className='newsletter-page'>
            <p className='newsletter-heading'>Subscribe Our Newsletter</p>
            <form className='newsletter-form'>
                <input 
                    type="text" 
                    placeholder='Name' 
                    className='form-name'
                />
                <input 
                    type="text" 
                    placeholder='Enter you Email' 
                    className='form-email'
                />
                <button 
                    className='form-btn'
                >SEND</button>
            </form>
        </div>
    )
}
export default index;