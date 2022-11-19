import React from 'react'
import Image from 'next/image'
import IconWeb from 'public/icon.svg'

import styles from './panel.module.scss'

const Panel = ({ scrolled }) => {
    return (
      <section className={`${ styles.panel } flex flex-wrap bg-tertiary container-full`}>
        <div className={`${ styles.panel__item } p-y-4 p-x-2`}>
          <Image alt="Mobilní aplikace" src={ IconWeb } />
          <h2>Mobilní aplikace</h2>
          <p className="m-t-1">Tvořím mobilní aplikace pro obě populární platformy, tedy pro iOS a Android. Aplikace píšu v technologii React Native.</p>
        </div>
        <div className={`${ styles.panel__item } p-y-4 p-x-2 ${ scrolled && styles.panel__item_active }`}>
          <Image alt="Webové aplikace" src={ IconWeb } />
          <h2>Webové aplikace</h2>
          <p className="m-t-1">Mou hlavní činností je tvorba webových aplikací a progesivních webových aplikací, které jsou optimální pro mobilní zařízení.</p>
        </div>
        <div className={`${ styles.panel__item } p-y-4 p-x-2`}>
          <Image alt="UI Design" src={ IconWeb } />
          <h2>UI/UX Design</h2>
          <p className="m-t-1">Zabývám se také návrhem uživatelských rozhraní webových i mobilních aplikací. Kladu důraz na jednoduchost a intuitivitu.</p>
        </div>
      </section>
    )
}

export default Panel
