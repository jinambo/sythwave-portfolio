import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Nevyhasni from 'public/intro.png'
import NevyhasniCurve from 'public/nevyhasni-curve.svg'

import AMIC from 'public/amic.png'
import VaclavPetr from 'public/vaclav-petr.png'
import CeskeExekuce from 'public/ceske-exekuce.png'
import StezkaKlinovec from 'public/stezka-klinovec.png'

import Project from './project'
import styles from './projects.module.scss'

const Projects = () => {

    const dataHolder = [
      {
        id: 1,
        title: 'VáclavPetr.cz',
        description: 'zajištění celého webu, tvorba šabolony pro Wordpress a příprava administrace.',
        url: 'https://vaclavpetr.cz/',
        picture: VaclavPetr,
        tags: ['FRONT-END', 'WORDPRESS']
      },
      {
        id: 2,
        title: 'ČeskéExekuce.cz',
        description: 'tvorba frontendové části webu, tedy kódování šablony celého webu.',
        url: 'https://www.ceskeexekuce.cz/',
        picture: CeskeExekuce,
        tags: ['FRONT-END']
      },
      /*
      {
        id: 2,
        title: 'AMIC.CZ',
        description: 'napsal jsem kompletní řešení od šablony po fungující projekt s CMS nasazený do produkce.',
        url: '#',
        picture: AMIC,
        tags: ['FULL-STACK', 'DEPLOYMENT']
      },
      {
        id: 3,
        title: 'ČeskéExekuce.cz',
        description: 'tvorba frontendové části webu, tedy kódování šablony celého webu.',
        url: '#',
        picture: CeskeExekuce,
        tags: ['FRONT-END']
      },
      {
        id: 4,
        title: 'Stezka-Klínovec.cz',
        description: 'tvorba frontendové části webu a příprava API pomocí Strapi CMS.',
        url: '#',
        picture: StezkaKlinovec,
        tags: ['FULL-STACK']
      },
      */
    ]

    return (
        <section className={`${ styles.projects } bg-tertiary-dark p-y-6-sm p-y-4`} id="projekty">
        <div className="container-md">
          
          <div className="row">
            <div className="col-12">
              <p className="section-title fg-secondary">MOJE PROJEKTY</p>
              <p className="title m-t-1">Projekty, které jsem za dobu působení v oboru tvořil <br /> a na které jsem hrdý</p>
            </div>
          </div>

          <div className="row row-m-t m-t-2">
            <div className={`col-12 special-border ${ styles.nevyhasni }`}>
              <div className={`${ styles.nevyhasni__inner } p-y-2 p-x-4-sm p-x-1`}>
                <Image src={ NevyhasniCurve } className={ styles.nevyhasni__curve } alt="Nevyhasni.cz" />
                <div className="row row-m-t flex align-items-center">
                  <div className="col-7">
                    <b className={ styles.nevyhasni__tiny }>nevyhasni.cz</b>
                    <h3 className={ styles.nevyhasni__title }>Vyhoření <br /> není ostuda.</h3>
                    <Link href="https://www.nevyhasni.cz/" className={`${ styles.nevyhasni__btn } m-t-3`} target="_blank">O PROJEKTU</Link>
                  </div>
                  <div className={`col-5 ${ styles.nevyhasni__image }`}>
                    <Image src={ Nevyhasni } alt="Nevyhasni.cz" />
                  </div>
                </div>
              </div>
            </div>

            { dataHolder.map(item => (
              <Project key={ item.id } data={ item } />
            )) }
          </div>

          <div className="m-t-3 center">
            <Link href="#" className="link link--lg">Zobrazit více projektů</Link>
          </div>

        </div>
      </section>
    )
}

export default Projects
