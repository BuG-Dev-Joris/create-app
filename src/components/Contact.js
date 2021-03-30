import './Contact.css'

const name = 'Jane doe';
const status = 'online';
const avatar = 'https://i2.wp.com/assets.codepen.io/internal/avatars/users/default.png?ssl=1';


function Contact() {
  return (
    

  <div className='Contact'>
      <img className='avatar' src={avatar}></img>
    <div>
      <h3 className = 'name'>{name}</h3>
  <div className='status'>
      <div className ='status-online'></div>
  <p className ='status-text'>{status}</p>
      </div>
</div>
  </div>
  
  

      
  )
}

export default Contact