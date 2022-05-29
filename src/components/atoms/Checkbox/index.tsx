import {ReactNode, useState} from 'react'
import cn from 'classnames'
import './style.scss'

type CheckboxProps = {
  id: string
  children: ReactNode
  checked: boolean
}

export default function Checkbox({id, children, checked}: CheckboxProps) {
  const [state, setState] = useState(checked)

  const handleChange = (event: any) => {
    setState(event.target.checked)
  }

  return (
    <label className="chekbox-label">
      <input
        className="chekbox-input"
        type="checkbox"
        id={id}
        defaultChecked={state}
        onChange={event => handleChange(event)}
      />
      <span className={cn('chekbox-checkmark', state && 'active')}></span>
      {children}
    </label>
  )
}
