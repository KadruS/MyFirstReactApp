import React from 'react'
import cl from './PoginationButton.module.css'

const PoginationButton = ({children, isActive, ...props}) => {
  return (
    <button className={cl[isActive]}{...props}>
        {children}
    </button>
  )
}

export default PoginationButton