import { useAppDispatch, useAppSelector } from 'store/hooks'
import { updateTransparents } from 'store/transparentsSlice'
import Checkbox from '../../atoms/Checkbox'
import './style.scss'

export default function Transparents() {
  const transparents = useAppSelector(state => state.transparents.transparents)
  const dispatch = useAppDispatch()

  const handleChange = (event: any): void => {
    const id = Number(event.target.id)
    dispatch(updateTransparents(id))
  }

  const transparentsList = transparents.map(({ title, id, isChecked }) => (
    <Checkbox key={id} checked={isChecked} onChange={handleChange} id={id}>
      {title}
    </Checkbox>
  ))

  return (
    <div className="transparents u-full-width">
      <div className="transparents__title">Количество пересадок</div>
      <div className="transparents__list">{transparentsList}</div>
    </div>
  )
}
