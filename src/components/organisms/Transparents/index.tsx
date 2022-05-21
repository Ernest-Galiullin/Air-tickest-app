import {useState} from 'react'
import Checkbox from '../../atoms/Checkbox'
import './style.scss'

type ITransparents = {
  id: string
  text: string
  checked: boolean
}

export default function Transparents() {
  const [transparents, setTransparents] = useState<ITransparents[]>([
    {
      id: '1',
      text: 'Без пересадок',
      checked: true
    },
    {
      id: '2',
      text: '1 пересадка',
      checked: true
    },
    {
      id: '3',
      text: '2 пересадки',
      checked: true
    },
    {
      id: '4',
      text: '3 пересадки',
      checked: false
    }
  ])

  const handleChange = (e: any): void => {
    const currentTransparents = transparents.map(t => {
      if (e.target.id === t.id) {
        t.checked = !t.checked
      }
      return t
    })
    setTransparents(currentTransparents)
  }

  const transparentsList = transparents.map(t => (
    <Checkbox key={t.id} {...t} onChange={handleChange} />
  ))

  return (
    <div className={'transparents u-full-width '}>
      <div className={'transparents__title'}>Количество пересадок</div>
      <div className={'transparents__list'}>{transparentsList}</div>
    </div>
  )
}
