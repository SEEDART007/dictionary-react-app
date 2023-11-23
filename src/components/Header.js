import React from 'react'
import help from './help.css'
import {FaBook} from 'react-icons/fa'

export default function Header() {
  return (
    <div className='header'>
      <b><FaBook className='ok'/> Dictionary-Conqueror Words</b>
    </div>
  )
}
