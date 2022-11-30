import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// Images
import Jirka from 'public/jirka.png'
import IconPDF from 'public/pdf.svg'
import IconGit from 'public/github.svg'
import IconLi from 'public/linkedin.svg'

import ReactIcon from 'public/react-icon.svg'
import NextIcon from 'public/next-icon.svg'
import NodeIcon from 'public/node-icon.svg'
import GraphqlIcon from 'public/graphql-icon.svg'
import ScssIcon from 'public/scss-icon.svg'
import TsIcon from 'public/ts-icon.svg'
import JsIcon from 'public/js-icon.svg'

import styles from './profile.module.scss'

const Profile = () => {
    return (
      <section className={`${ styles.main } bg-dark p-y-8-sm p-y-5`} id="o-mne">
        <div className="container">
          <div className="row">
            <div className={`col-4 special-border ${ styles.main__picture }`}>
              <Image alt="Jiří Šrytr" src={ Jirka } />
            </div>
            <div className={`col-8 ${ styles.main__bio }`}>
              <div>
                <h3 className="title">
                  <span className="tiny-text">Bc.</span>
                  Jiří Šrytr
                </h3>
                <p className="subtitle">FRONTEND DEVELOPER & WEBDESIGNER</p>

                <div className={`${ styles.main__socials } flex`}>
                  <Link href="https://www.linkedin.com" target="_blank">
                    <Image alt="Jiří Šrytr" src={ IconLi } />
                  </Link>
                  <Link href="https://github.com/jinambo" target="_blank">
                    <Image alt="Jiří Šrytr" src={ IconGit } />
                  </Link>
                </div>

                <p className="m-t-2">
                  Jsem 22 letý student softwarového inženýrství a vývojář webových a mobilních aplikacích zaměřující se primárně na frontend a práci s API, ani backend mi však není cizí. Věnuji se také designu webů a aplikací.
                </p>
              </div>

              <div className="flex center m-t-3">
                {/* <Link href="CV.pdf" target="_blank" className="btn btn--bg flex align-items-center justify-content-center">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.6448 8.71006C13.6962 8.63799 13.7162 8.59178 13.7241 8.56695C13.6817 8.54454 13.6255 8.49902 13.319 8.49902C13.1448 8.49902 12.9262 8.50661 12.6945 8.53626C12.9755 8.75247 13.0441 8.86178 13.2279 8.86178C13.3083 8.86213 13.5386 8.85868 13.6448 8.71006Z" fill="white"/>
                    <path d="M7.08141 11.2531C7.13279 11.2369 7.43279 11.1 7.99176 10.0682C7.25452 10.4824 6.95452 10.8227 6.93314 11.0144C6.92934 11.0462 6.92003 11.1296 7.08141 11.2531Z" fill="white"/>
                    <path d="M17.7586 13.4483V4.82C17.7586 4.55586 17.7269 4.36034 17.569 4.20207L13.5562 0.189655C13.4359 0.0693103 13.269 0 13.0983 0H3.0907C2.68174 0 2.24139 0.315862 2.24139 1.00897V13.4483H17.7586ZM12.9311 1.16931C12.9311 1.01138 13.1217 0.932414 13.2335 1.04414L16.7145 4.52517C16.8262 4.6369 16.7473 4.82759 16.5893 4.82759H12.9311V1.16931ZM6.35588 10.95C6.41864 10.3886 7.11277 9.80103 8.41967 9.20241C8.93829 8.06586 9.43174 6.66552 9.72588 5.49552C9.38174 4.74655 9.04726 3.77483 9.29105 3.20483C9.37657 3.00517 9.48312 2.85207 9.68208 2.78586C9.7607 2.75966 9.95933 2.72655 10.0324 2.72655C10.2062 2.72655 10.359 2.95034 10.4673 3.08828C10.569 3.21793 10.7997 3.49276 10.3386 5.43379C10.8035 6.39379 11.4621 7.37172 12.0931 8.04138C12.5452 7.95966 12.9342 7.91793 13.2511 7.91793C13.7911 7.91793 14.1183 8.04379 14.2517 8.3031C14.3621 8.51759 14.3169 8.76828 14.1173 9.04793C13.9252 9.31655 13.6604 9.45862 13.3517 9.45862C12.9324 9.45862 12.4442 9.19379 11.8997 8.67069C10.9214 8.87517 9.77864 9.24 8.85553 9.64379C8.56726 10.2555 8.29105 10.7483 8.03381 11.1097C7.68105 11.6055 7.37622 11.8362 7.0745 11.8362C6.9545 11.8362 6.83933 11.7972 6.74105 11.7238C6.38139 11.4538 6.33312 11.1541 6.35588 10.95Z" fill="white"/>
                    <path d="M7.31794 15.8131C7.26897 15.7455 7.2007 15.689 7.11276 15.6435C7.02483 15.598 6.90828 15.5752 6.7638 15.5752H6.33966V16.9517H6.85828C6.92725 16.9517 6.99552 16.94 7.06345 16.9162C7.13104 16.8928 7.19311 16.8542 7.24966 16.8007C7.30621 16.7473 7.35173 16.6728 7.38621 16.5769C7.4207 16.4811 7.43794 16.3624 7.43794 16.2211C7.43794 16.1645 7.43001 16.099 7.41449 16.0255C7.39863 15.9517 7.36656 15.8811 7.31794 15.8131Z" fill="white"/>
                    <path d="M10.1183 6.26685C9.8714 7.11995 9.54623 8.04098 9.19623 8.87512C9.91692 8.59547 10.7004 8.35133 11.4362 8.17857C10.9707 7.63788 10.5055 6.96271 10.1183 6.26685Z" fill="white"/>
                    <path d="M2.24139 14.1379V19.3104C2.24139 19.6583 2.66208 20 3.0907 20H16.9093C17.3379 20 17.7586 19.6583 17.7586 19.3104V14.1379H2.24139ZM7.89519 16.6997C7.83553 16.8428 7.75208 16.9631 7.64519 17.0604C7.53829 17.1576 7.40932 17.2331 7.25864 17.2866C7.10795 17.34 6.94105 17.3666 6.75898 17.3666H6.33933V18.6207H5.77346V15.1462H6.77277C6.92036 15.1462 7.06657 15.1697 7.21105 15.2169C7.35553 15.2641 7.48519 15.3348 7.60002 15.429C7.71484 15.5231 7.8076 15.6373 7.87829 15.7707C7.94898 15.9041 7.9845 16.0541 7.9845 16.221C7.98484 16.3972 7.95484 16.5566 7.89519 16.6997ZM11.3628 17.52C11.3014 17.7228 11.2238 17.8924 11.1293 18.0293C11.0348 18.1662 10.929 18.2738 10.811 18.3524C10.6931 18.431 10.5793 18.4897 10.4693 18.5293C10.3593 18.5686 10.2586 18.5938 10.1676 18.6048C10.0766 18.6152 10.009 18.6207 9.96484 18.6207H8.64967V15.1462H9.69622C9.98864 15.1462 10.2455 15.1928 10.4669 15.2852C10.6883 15.3776 10.8724 15.5014 11.0186 15.6552C11.1648 15.809 11.2738 15.9845 11.3462 16.1807C11.4183 16.3769 11.4545 16.579 11.4545 16.7866C11.4548 17.0728 11.4242 17.3172 11.3628 17.52ZM14.4483 15.5752H12.85V16.669H14.3021V17.0555H12.85V18.6207H12.2748V15.1462H14.4483V15.5752Z" fill="white"/>
                    <path d="M10.6086 15.9593C10.5097 15.8445 10.3752 15.7517 10.2055 15.681C10.0359 15.6103 9.81586 15.5748 9.54551 15.5748H9.21552V18.2055H9.77655C10.16 18.2055 10.4365 18.0831 10.6062 17.8379C10.7759 17.5928 10.8607 17.2376 10.8607 16.7724C10.8607 16.6279 10.8434 16.4848 10.809 16.3434C10.7741 16.2021 10.7076 16.0741 10.6086 15.9593Z" fill="white"/>
                    <path d="M9.90897 3.34892C9.87518 3.3603 9.45035 3.95478 9.94208 4.45789C10.2693 3.72858 9.9238 3.34409 9.90897 3.34892Z" fill="white"/>
                  </svg>
                  <span className="m-l-1">Životopis</span>
                </Link> */}
                <Link href="#kontakt" className="btn btn--transparent flex align-items-center justify-content-center m-l-2">Napište mi</Link>
              </div>
            </div>
          </div>

          <div className="row flex flex-wrap m-t-2 bg-tertiary-dark p-1 radius">
            <div className="col-2">
              <b>Oblíbené <br /> technologie</b>
            </div>
            <div className="col-10 flex align-items-center justify-content-end">
              <Image src={ JsIcon } alt="JavaScript" />
              <Image src={ TsIcon } alt="TypeScript" className="m-l-1" />
              <Image src={ ReactIcon } alt="React" className="m-l-1" />
              <Image src={ NextIcon } alt="Next.js" className="m-l-1" />
              <Image src={ NodeIcon } alt="Node.js" className="m-l-1" />
              <Image src={ GraphqlIcon } alt="GraphQL" className="m-l-1" />
              <Image src={ ScssIcon } alt="Scss" className="m-l-1" />
            </div>
          </div>
        </div>
      </section>
    )
}

export default Profile
