import React, {ReactNode} from 'react'
import './style.scss'
type ButtonProps = {
  children: ReactNode
}

export default function Button({children}: ButtonProps) {
  return <button className="btn">{children}</button>
}
