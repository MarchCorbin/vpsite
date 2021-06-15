import {Link} from 'react-router-dom'

import './NavBar.css'

const NavBar = () => {

  return(
 <ul className="top-nav">
   <Link style={{'text-decoration': 'none'}}  to='/musicscreen'>
      <li className="nav-option">Music</li>
   </Link>
      <li className="nav-option">Merch</li>
      <Link style={{'text-decoration': 'none'}} to='/contactscreen'>
      <li className="nav-option">Contact</li>
      </Link>
      <li className="nav-option">Support</li>
      <li className="nav-option">Shoutouts</li>
    </ul>
  )
}

export default NavBar;