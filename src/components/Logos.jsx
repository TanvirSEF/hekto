import React from 'react'
import Container from './Container'
import logos from '../assets/logos.png'

const Logos = () => {
  return (
    <section className='sec_pad'>
        <Container>
            <img className='mx-auto' src={logos} alt="logos" />
        </Container>
    </section>
  )
}

export default Logos
