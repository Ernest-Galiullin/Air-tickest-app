import { ReactNode, SyntheticEvent } from 'react'
import { useAppSelector } from 'store/hooks'
import { selectCompanyID } from 'store/filterSlice'
import cn from 'classnames'
import './style.scss'
interface IRadioProps {
  children: ReactNode
  id: string
  onClick: (event: SyntheticEvent<HTMLLabelElement>) => void
}
export default function Radio({ children, id, onClick }: IRadioProps) {
  const companyID = useAppSelector(selectCompanyID)

  return (
    <label className="radio-label" onClick={onClick}>
      <input className="radio-input" type="radio" id={id} />
      <span
        className={cn('radio-checkmark', companyID === id && 'active')}
      ></span>
      {children}
    </label>
  )
}
