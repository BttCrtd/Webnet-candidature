import '../App.css'
import Letter from '../components/Letter/Letter'
import CV from '../components/CV/CV'
import Dragon3D from '../components/3D/Dragon3D'
import { useState } from 'react'

function Home() {
  const [active, setActive] = useState('lettre')

  return (
    <div>
      <section className="dragon">
        <button
          className={active === 'lettre' ? 'active' : ''}
          onClick={() => setActive('lettre')}
        >
          Lettre de motivation
        </button>
        <Dragon3D />
        <button
          className={active === 'cv' ? 'active' : ''}
          onClick={() => setActive('cv')}
        >
          CV
        </button>
      </section>
      <section className="contain">{active === 'lettre' && <Letter />}</section>
      <section className="contain">{active === 'cv' && <CV />}</section>
    </div>
  )
}

export default Home
