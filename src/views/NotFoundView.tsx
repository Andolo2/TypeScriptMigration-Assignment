import NavBarSec from '../sections/NavBarSec'
import FooterSec from '../sections/FooterSec'
import React from 'react'
import notFound from  '../assets/images/notFound/404notfound.png'

function NotFoundView() {

  document.title = ' Not Found || fixxo.';


  return (
    <div>
      <NavBarSec link={''} icon={''} quantity={0}></NavBarSec>
      <img src={notFound} alt='page not found'></img>
      <FooterSec></FooterSec>
      </div>
  )
}

export default NotFoundView