import { ReactNode, SyntheticEvent } from 'react'
import './style.scss'
interface IButtonProps {
  children: ReactNode
  onClick?: (event?: SyntheticEvent<HTMLButtonElement>) => void
}

export default function Button({ children, onClick }: IButtonProps) {
  return (
    <button className="btn" onClick={onClick}>
      {children}
    </button>
  )
}
