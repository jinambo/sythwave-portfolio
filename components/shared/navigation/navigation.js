import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import styles from './navigation.module.scss'

import Logo from 'public/logo.png'

const Navigation = ({ scrolled }) => {
  return (
    <nav className={`${ styles.navigation } p-y-1 ${ scrolled && styles.scrolled }`}>
        <div className="container-lg">
          <div className="row flex flex-wrap align-items-center">
            <div className="col-6 fg-primary">
              <p className={ styles.navigation__logo }>JIŘÍ ŠRYTR</p>
            </div>
            <ul className="col-6 list flex align-items-center justify-content-end">
              <li>
                <Link
                  href="#o-mne" 
                  className={ styles.navigation__item }
                >O mně</Link>
              </li>
              <li>
                <Link
                  href="#projekty" 
                  className={ styles.navigation__item }
                >Projekty</Link>
              </li>
              <li>
                <Link
                  href="#reference" 
                  className={ styles.navigation__item }
                >Reference</Link>
              </li>
              <li>
                <Link
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
