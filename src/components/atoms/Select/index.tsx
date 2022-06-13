import { useEffect, useState } from 'react'
import Select from 'react-select'
import { selectFilter } from 'store/filterSlice'
import { useAppSelector } from 'store/hooks'
import './style.scss'

interface IProp {
  value: string
  handleChange(option: any, name: string): void
  name: string
  borderBottomRightRadius?: string
  borderBottomLeftRadius?: string
  borderTopRightRadius?: string
  borderTopLeftRadius?: string
  placeholder?: string
  border?: string
}

export default function SelectInput(props: IProp) {
  const { selectedOriginCity, selectedDestinationCity } =
    useAppSelector(selectFilter)

  const options = [
    { value: 'MOW', label: 'MOW' },
    { value: 'HKT', label: 'HKT' },
    { value: 'HKG', label: 'HKG' },
    { value: 'JNB', label: 'JNB' },
    { value: 'PTB', label: 'PTB' },
    { value: 'ARH', label: 'ARH' },
    { value: 'TRN', label: 'TRN' },
    { value: 'KRS', label: 'KRS' },
    { value: 'SRT', label: 'SRT' },
    { value: 'LOS', label: 'LOS' },
    { value: 'EKV', label: 'EKV' },
    { value: 'EKT', label: 'EKT' }
  ]
  options.find(item => item.value === props.value)
  const [filtredOptions, setFiltredOptions] = useState(options)

  useEffect(() => {
    setFiltredOptions(
      options.filter(
        ({ value }) =>
          value !== selectedOriginCity && value !== selectedDestinationCity
      )
    )
    // eslint-disable-next-line
  }, [selectedOriginCity, selectedDestinationCity])

  return (
    <Select
      placeholder={props.placeholder}
      name={props.name}
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
        }),
        indicatorsContainer: () => ({
          display: 'none'
        })
      }}
      onChange={(option, { name }) => props.handleChange(option, name!)}
      options={filtredOptions}
    />
  )
}
