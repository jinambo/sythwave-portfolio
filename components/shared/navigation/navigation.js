import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import styles from './navigation.module.scss'

import Logo from 'public/logo.png'

const Navigation = ({ scrolled }) => {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className={`${ styles.navigation } p-y-1 ${ scrolled && styles.scrolled }`}>
        <div className="container-lg">
          <div className="row flex flex-wrap align-items-center">
            <div className={`col-6 fg-primary ${ styles.navigation__top } flex align-items-center justify-content-between`}>
              <p className={`${ styles.navigation__logo  } shiny-text-light`}>
                JIŘÍ ŠRYTR
              </p>

              <div onClick={ () => setToggle(!toggle) } className={ `${styles.navigation__burger} ${ toggle && styles.active }` }>
                <span></span>
              </div>
            </div>
            <ul className={`
              col-6 list flex
              align-items-center justify-content-end
              ${ styles.navigation__menu }
              ${ toggle && styles.active }
            `}>
              <li>
                <Link
                  onClick={ () => setToggle(!toggle) }
                  href="#o-mne" 
                  className={ styles.navigation__item }
                >O mně</Link>
              </li>
              <li>
                <Link
                  onClick={ () => setToggle(!toggle) }
                  href="#projekty" 
                  className={ styles.navigation__item }
                >Projekty</Link>
              </li>
              <li>
                <Link
                  onClick={ () => setToggle(!toggle) }
                  href="#reference" 
                  className={ styles.navigation__item }
                >Reference</Link>
              </li>
              <li>
                <Link
                  onClick={ () => setToggle(!toggle) }
                  href="#kontakt" 
                  className={ styles.navigation__item }
                >Kontakt</Link>
              </li>
            </ul>
          </div>
        </div>
    </nav>
  )
}

export default Navigation;
