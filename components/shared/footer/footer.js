import Link from 'next/link'
import React from 'react'

import styles from './footer.module.scss'

const Footer = () => {
  return (
    <footer className={`${ styles.footer } p-y-3 fg-light bg-dark`}>
      <div className="container-lg">
        <div className="row">
          <ul className="col-8 list flex flex-wrap align-items-center">
            <li className="list__item">
              <Link href="#" className="fg-secondary">Linkedin</Link>
            </li>
            <li className="list__item">
              <Link href="#" className="fg-secondary">Github</Link>
            </li>
            <li className="list__item">
              <Link href="#" className="fg-secondary">jiri.srytr.webdev@gmail.com</Link>
            </li>
            <li className="list__item">
              <Link href="#" className="fg-secondary">+420 731 711 858</Link>
            </li>
          </ul>

          <div className={ `col-4 ${ styles.footer__bottom } p-t-2 p-t-0-sm` }>
            <small>© Jiří Šrytr 2022. Navrženo a nakóděno s ❤️.</small>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
