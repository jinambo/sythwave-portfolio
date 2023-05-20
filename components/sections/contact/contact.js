import React, { useEffect, useId, useRef } from 'react'
import { useForm } from '@formspree/react'

import styles from './contact.module.scss'

const Contact = () => {
  const id = useId()
  const formRef = useRef()
  const [state, handleSubmit] = useForm("mdojjavk")

  // Reset Form After Successful Submit
  useEffect(() => {
    if (state.succeeded) formRef.current.reset()
  }, [state])

  return (
    <section className="p-y-6-sm p-y-4 bg-tertiary-dark fg-light" id="kontakt">
      <div className="container">

        <div className="row">
          <div className="col-12">
            <p className="section-title fg-secondary">KONTAKT</p>
            <p className="title m-t-1">
              Zaujal jsem Vás? Potřebujete posilu do týmu vývojářů?
              <br />
              Neváhejte mě kontaktovat.
            </p>
          </div>

          <div className="col-12">
            <div className="flex align-items-center radius m-t-4">
              <div className="dot">
                <div className="dot__inner"></div>
                <div className="dot__outer"></div>
              </div>
              <p className="m-l-1">Aktuálně mám <b>volné kapacity</b> pro nový projekt</p>
            </div>
          </div>
        </div>

        <form
          ref={ formRef }
          onSubmit={ handleSubmit }
          className="form m-t-1"
        >
          <div className="row">
              { state.result !== null || state.errors.length > 0 ? 
                <div className={`${ state.succeeded ? styles.feedback_ok : styles.feedback_nok } ${ styles.feedback } col-12 left m-b-1 p-1`}>
                  { state.succeeded ?
                    <p>🧑🏻‍💻 Vaše zpráva ke mně dorazila, děkuji za vyplnění formuláře. Odpovím Vám co nejdříve. </p> :
                    <p>Zpráva nebyla odeslána, zkuste to, prosím, znovu později.</p>
                  }
                </div>
              : <></>}

            <div className="col-6 form__input flex flex-column">
              <label className="label" htmlFor={`${id}-fullname1`}>Vaše celé jméno</label>
              <input id={`${id}-fullname1`} name="fullname" className="input" type="text" placeholder="Karel Novák" required />
            </div>

            <div className="col-6 form__input flex flex-column">
              <label className="label" htmlFor={`${id}-email1`}>Váš e-mail</label>
              <input id={`${id}-email1`} name="email" className="input" type="email" placeholder="karel@novak.cz" required />
            </div>

            <div className="col-6 form__input flex flex-column">
              <label className="label" htmlFor={`${id}-subject1`}>Co potřebujete</label>
              <select id={`${id}-subject1`} name="subject" className="input" defaultValue="-" required>
                <option value="-" disabled>Vyberte prosím z následujících možností</option>
                <option value="Job">Hledáme posily do týmu</option>
                <option value="Web">Potřebuji web</option>
                <option value="App">Potřebuji mobilní aplikaci</option>
                <option value="UI">Potřebuji pomoct s designem</option>
                <option value="Different">Potřebuji něco jiného</option>
              </select>
            </div>

            <div className="col-12 form__input flex flex-column">
              <label className="label" htmlFor={`${id}-message1`}>Zpráva</label>
              <textarea id={`${id}-message1`} name="message" className="input" cols="30" rows="10" placeholder="Ahoj Jirko, chci se domluvit na ..." required></textarea>
            </div>
          </div>

          <button
            className="btn btn--bg flex align-items-center justify-content-center"
            style={{ marginLeft: 'auto' }}
            disabled={ state.submitting }
          >
            <span>
              {state.submitting ? 'Zprává se odesílá' : 'Odeslat zprávu' }
            </span>
            <svg className="m-l-1" width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.97767 0.17815L18.5337 8.09625C19.023 8.33028 19.23 8.91669 18.996 9.40602C18.8992 9.60838 18.7361 9.77152 18.5337 9.8683L1.97767 17.7864C1.48834 18.0204 0.901929 17.8135 0.667898 17.3241C0.5662 17.1115 0.544367 16.8694 0.606387 16.642L2.26232 10.57C2.3038 10.4179 2.43222 10.3053 2.58846 10.2841L10.6111 9.19434C10.6802 9.18447 10.7375 9.13903 10.764 9.077L10.7777 9.02767C10.7909 8.93562 10.7379 8.84937 10.6549 8.81694L10.6111 8.80544L2.59784 7.71572C2.44163 7.69447 2.31324 7.5819 2.27176 7.4298L0.606387 1.32259C0.463666 0.799284 0.772194 0.25936 1.2955 0.116639C1.52291 0.0546198 1.76503 0.0764522 1.97767 0.17815Z" fill="#FFFFFF"/>
            </svg>
          </button>
        </form>

      </div>
    </section>
  )
}

export default Contact
