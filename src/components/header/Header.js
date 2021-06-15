import {Link} from 'react-router-dom'

import './Header.css'

const Header = () => {
  return (
    <header>
      <Link to='/' style={{'text-decoration': 'none'}}>
      <img className='vp-logo' src='/assets/VPlogo.jpeg' alt='VPlogo' />
      </Link>
     </header>
  )
}

export default Header;