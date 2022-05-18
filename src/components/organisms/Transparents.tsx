import {useState} from 'react'
import Checkbox from '../atoms/Checkbox'

type ITransparents = {
  id: number
  text: string
  checked: boolean
}

export default function Transparents() {
  const [transparents] = useState<ITransparents[]>([
    {
      id: 1,
      text: 'Без пересадок',
      checked: true
    },
    {
      id: 2,
      text: '1 пересадка',
      checked: true
    },
    {
      id: 3,
      text: '2 пересадки',
      checked: true
    },
    {
      id: 4,
      text: '3 пересадки',
      checked: false
    }
  ])
  return (
    <div className="transparents">
      <div className="transparents__title">Количество пересадок</div>
      <div className="transparents__list">
        {transparents.map((t, idx) => (
          <Checkbox key={idx} {...t} />
        ))}
      </div>
    </div>
  )
}
