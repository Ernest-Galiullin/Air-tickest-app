import { ReactNode, SyntheticEvent } from 'react'
import './style.scss'
type ButtonProps = {
  children: ReactNode
  onClick: (event?: SyntheticEvent<HTMLButtonElement>) => void
}

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button className="btn" onClick={onClick}>
      {children}
    </button>
  )
}
