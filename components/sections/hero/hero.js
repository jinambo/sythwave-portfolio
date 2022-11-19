import Link from 'next/link'
import Star from 'components/atoms/star'

import styles from './hero.module.scss'

const Hero = ({ scrolled }) => {
    return (
      <header className={ styles.hero }>
        <div className={ styles.hero__overlay }>
          <div className={` ${styles.hero__text} center`}>
            <h1 className="fg-light">
              <span className="medium-text shiny-text-light">JSEM</span> <br />
              <span className="large-text shiny-text-secondary fg-secondary">FRONTEND DEVELOPER</span> <br />
              <span className="medium-text shiny-text-light">S CHUTÍ TVOŘIT.</span>
            </h1>
          </div>
          <Link href="#o-mne" className={ styles.scrolldown }></Link>  
        </div>  
        {/*        

          <div className="moon">
            <div className="moon__line"></div>
            <div className="moon__line"></div>
            <div className="moon__line"></div>
          </div>
        */}

        <div className={ styles.stars }>
          {/*          
          <h2 className={`${ styles.paralax_title } fg-light`}>
            Frontend Developer s chutí tvořit.
          </h2>
          */}
          
          { [...Array(250)].map((e, i) => <Star styles={ styles.star } key={ i } /> )}
        </div>
        
        <div className={ styles.mountains_wrapper }>    
          <div className={ styles.mountains }>
            <div className={ styles.mountain }></div>
            <div className={ styles.mountain }></div>
            <div className={ styles.mountain }></div>
            <div className={ styles.mountain }></div>
            <div className={ styles.mountain }></div>
            <div className={ styles.mountain }></div>
            <div className={ styles.mountain }></div>
          </div>
        </div>
        
        <div className={ styles.land }>
            <div className={ styles.lines }></div>
        </div>

        {/*
        <h1 className={`${ styles.heading } ${ scrolled && styles.fade_out } fg-light center`}>
          Ahoj, já jsem
        </h1>        
        */}
      </header>
    )
}

export default Hero
