import { ReactNode, SyntheticEvent } from 'react'
import cn from 'classnames'
import './style.scss'

interface ICheckboxProps {
  children: ReactNode
  checked: boolean
  id: number
  onChange: (event: SyntheticEvent<HTMLInputElement>) => void
}

export default function Checkbox({
  children,
  checked,
  onChange,
  id
}: ICheckboxProps) {
  return (
    <label className="chekbox-label">
      <input
        className="chekbox-input"
        type="checkbox"
        defaultChecked={checked}
        onChange={onChange}
        data-id={id}
      />
      <span className={cn('chekbox-checkmark', checked && 'active')}></span>
      {children}
    </label>
  )
}
