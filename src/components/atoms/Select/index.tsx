import { ISelectOptions } from 'interfaces'
import Select from 'react-select'
import { ICityCode } from 'store/citiOptionsSlice'
import './style.scss'

interface ISelectProps {
  options: ICityCode[]
  value: ISelectOptions
  handleChange(option: any, name: string): void
  name: string
  borderBottomRightRadius?: string
  borderBottomLeftRadius?: string
  borderTopRightRadius?: string
  borderTopLeftRadius?: string
  placeholder?: string
  border?: string
}

function isEmpty(obj: any) {
  for (let key in obj) {
    const value = obj[key]
    if (value) {
      return false
    }
  }
  return true
}

export default function SelectInput(props: ISelectProps) {
  return (
    <Select
      value={isEmpty(props.value) ? undefined : props.value}
      placeholder={props.placeholder}
      name={props.name}
      onChange={(option, { name }) => props.handleChange(option, name!)}
      options={props.options}
      classNamePrefix="custom-select"
      styles={{
        container: () => ({
          width: '100%',
          height: '100%'
        }),
        control: provided => ({
          ...provided,
          borderBottomRightRadius: props?.borderBottomRightRadius ?? '0',
          borderBottomLeftRadius: props?.borderBottomLeftRadius ?? '0',
          borderTopRightRadius: props?.borderTopRightRadius ?? '0',
          borderTopLeftRadius: props?.borderTopLeftRadius ?? '0',
          border: 'none'
        })
      }}
    />
  )
}
