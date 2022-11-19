import React from 'react'
import Image from 'next/image'

import Quotes from 'public/quote.svg'

const Reference = ({ onDragStart, data, styles }) => {
    const { client, picture, text } = data

    return (
      <div
        onDragStart={ onDragStart }
        role="presentation"
        className={`${ styles.reference } special-border m-x-1 flex flex-column justify-content-between bg-tertiary-dark radius p-x-2 p-y-1`}
      >
        <div>
          <Image src={ Quotes } alt="References" className={ styles.reference__icon } />
          <p className="m-t-1">{ text }</p>
        </div>
  
        <div className="flex align-items-center m-t-2">
          <Image src={ picture } alt={ client } className={ styles.reference__client } />
          <p className="m-l-1">{ client }</p>
        </div>
      </div>
    )
}

export default Reference
