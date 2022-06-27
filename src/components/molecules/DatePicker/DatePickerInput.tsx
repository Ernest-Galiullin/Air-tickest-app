import { forwardRef } from 'react'

export const DatePickerInput = forwardRef((props: any, ref: any) => {
  return (
    <input
      ref={ref}
      onClick={props.onClick}
      value={props.value}
      placeholder={props.placeholder}
      className="search-form__column--date--input"
      name={props.name}
      readOnly
    />
  )
})
