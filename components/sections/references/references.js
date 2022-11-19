import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'

import ReferenceVaclav from 'public/vaclavpetr_foto.png'
import ReferenceDavid from 'public/david_foto.jpeg'
import ArrowCyber from 'public/arrow_cyber.svg'

import Reference from './reference'

import 'react-alice-carousel/lib/alice-carousel.css'
import styles from './references.module.scss'

const References = () => {
  const AliceCarousel = dynamic(() => import('react-alice-carousel'), { ssr: false })
  const handleDragStart = (e) => e.preventDefault()

  const references = [
    {
      id: 1,
      client: 'Václav Petr, vaclavpetr.cz',
      picture: ReferenceVaclav,
      text: 'S Jirkou se spolupracuje výborně a web vytvoří přesně tak, jak je domluveno a navrhnuto. A to s perfektním výsledkem. Je zkušený a se vším si poradí.'
    }
  ]

  return (
    <section className="bg-dark p-t-6-sm p-t-4 p-b-8-sm p-b-5" id="reference">
      <div className="container">
        
        <div className="row">
          <div className="col-12">
            <p className="section-title fg-secondary">REFERENCE</p>
            <p className="title m-t-1">
              Co o mně říkají moji klienti
            </p>
          </div>
        </div>

        <div className={`${ styles.references } row m-t-4-sm m-t-3`}>


          <AliceCarousel
            mouseTracking
            ssrSilentMode={ false }
            infinite={ true }
            renderPrevButton={ () => {
              return <Image className={ styles.references__prev } src={ ArrowCyber } alt="Arrow" />
            } }
            renderNextButton={ () => {
              return <Image className={ styles.references__next } src={ ArrowCyber } alt="Arrow" />
            } }
            responsive={
              {
                0: {
                  items: 1,
                },
                1024: {
                  items: 1
                }
              }
            }
            items={
              references.map(reference => (
                <Reference
                  key={ reference.id }
                  onDragStart={ handleDragStart }
                  role="presentation"
                  data={ reference }
                  styles={{
                    reference: styles.reference,
                    reference__icon: styles.reference__icon,
                    reference__client: styles.reference__client
                  }}
                />
              ))
            }
          />
        </div>

          
      </div>
    </section>
  )
}

export default References
