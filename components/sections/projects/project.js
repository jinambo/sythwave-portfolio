import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import styles from './project.module.scss'

const Project = ({ data }) => {
    const { picture, title, description, url, tags } = data

    return (
      <div className={`col-6 bg-dark special-border ${ styles.project }`}>
        <Image src={ picture } className={ styles.project__thumb } alt={ title } />
        <div className={ styles.project__info }>
          <div className="flex m-b-1">
            { tags.map((tag, index) => (
              <p key={ index } className={`${ styles.project__tag } bg-secondary`}>
                #{ tag }
              </p>
            )) }
          </div>
          <p className="m-b-1">
            <b>{ title }</b> - { description }
          </p>
          <Link href={ url } className="link" target="_blank">Přejít na web</Link>
          </div>
      </div>  
    )
}

export default Project
