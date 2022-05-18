import {useState} from 'react'

type CheckboxProps = {
  text: string
  checked: boolean
}

export default function Checkbox({text, checked}: CheckboxProps) {
  const [state, setState] = useState(false)
  return (
    <label htmlFor={text}>
      <input
        type="checkbox"
        defaultChecked={checked}
        onChange={() => setState(prev => !prev)}
      />
      <span className={state ? 'checkmark active' : 'checkmark'}></span>
      {text}
    </label>
  )
}
