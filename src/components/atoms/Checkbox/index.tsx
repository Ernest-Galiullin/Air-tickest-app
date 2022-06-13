import { ReactNode } from 'react'
import cn from 'classnames'
import './style.scss'

type CheckboxProps = {
  children: ReactNode
  checked: boolean
  id: number
  onChange: (event: any) => void
}

export default function Checkbox({
  children,
  checked,
  onChange,
  id
}: CheckboxProps) {
  return (
    <label className="chekbox-label">
      <input
        className="chekbox-input"
        type="checkbox"
        defaultChecked={checked}
        onChange={onChange}
        id={String(id)}
      />
      <span className={cn('chekbox-checkmark', checked && 'active')}></span>
      {children}
    </label>
  )
}
