import React from 'react'
import Icons from '../icons/icons'
import Logo from '../logo/logo'
import Button from '../utils/button/button'
import './header.css'

export default function Header() {
  return (
    <div className='header'>
      <Logo />
      <div>
        <h2 className='innovate'>Innovative Solution Taliored to your Business need</h2>
        <p className='intro'>
          We can partner with your business to provide a symbiotic relationship and synergy to help you or your business achieve more business growth through strategic financial advisory, investment business and human resource planning and management.
        </p>
        <Button
          text='Get in touch' />
      </div>

      <div>
        <Icons />
      </div>
      <div>
        <img src='hex.png' alt='hex' />
        <img src='diagonal.png' alt='diagonal' />
      </div>
    </div>
  )
}
