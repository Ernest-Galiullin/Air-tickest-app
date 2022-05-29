import {ReactNode} from 'react'
import './style.scss'
type RadioProps = {
  children: ReactNode
}
export default function Radio({children}: RadioProps) {
  return (
    <label className="radio-label">
      <input className="radio-input" type="radio" />
      <span className="radio-checkmark"></span>
      {children}
    </label>
  )
}
