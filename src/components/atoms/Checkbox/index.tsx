import {useState} from 'react'
import cn from 'classnames'
import './style.scss'

type CheckboxProps = {
  id: string
  text: string
  checked: boolean
  onChange: (value: any) => void
}

export default function Checkbox({id, text, checked, onChange}: CheckboxProps) {
  return (
    <label htmlFor={text} className={'chekbox-label'}>
      <input
        className={'chekbox-input'}
        type="checkbox"
        defaultChecked={checked}
        id={id}
        onChange={e => onChange(e)}
      />
      <span className={cn('chekbox-checkmark', {'active': checked})}></span>
      {text}
    </label>
  )
}
