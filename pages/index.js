import Head from 'next/head'
import { useEffect, useState } from 'react'

// Components
import Navigation from 'components/shared/navigation'
import Hero from 'components/sections/hero'
import Panel from 'components/sections/panel'
import Profile from 'components/sections/profile'
import Projects from 'components/sections/projects'
import References from 'components/sections/references'
import Contact from 'components/sections/contact'
import Footer from 'components/shared/footer'


export default function Home() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = event => {
      window.scrollY > 300 ? setScrolled(true) : setScrolled(false)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [setScrolled])

  return (
    <>
      <Head>
        <title>Jiří Šrytr | Frontend Developer</title>
        <meta name="description" content="Potřebujete nové webové stránky či aplikaci? Potřebujete do týmu externí pomoc? Rád Vám s Vaším projektem pomůžu. Neváhejte mě kontaktovat." />
        <link rel="icon" href="/fav.png" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" />
        <link rel="stylesheet" href="https://use.typekit.net/zab6eql.css" />
      </Head>

      <Navigation scrolled={ scrolled } />

      <Hero scrolled={ scrolled } />
      <Panel scrolled={ scrolled } />
      <Profile />
      <Projects />
      <References />
      <Contact />

      <Footer />

    </>
  )
}
