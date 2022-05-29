import {useState} from 'react'
import Checkbox from '../../atoms/Checkbox'
import './style.scss'

type ITransparents = {
  id: string
  title: string
  checked: boolean
}

const mock = [
  {
    id: '1',
    title: 'Без пересадок',
    checked: false
  },
  {
    id: '2',
    title: '1 пересадка',
    checked: false
  },
  {
    id: '3',
    title: '2 пересадки',
    checked: false
  },
  {
    id: '4',
    title: '3 пересадки',
    checked: false
  }
]

export default function Transparents() {
  const [transparents, setTransparents] = useState<ITransparents[]>(mock)

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
    <Checkbox key={t.id} id={t.id} checked={t.checked}>
      {t.title}
    </Checkbox>
  ))

  return (
    <div className={'transparents u-full-width '}>
      <div className={'transparents__title'}>Количество пересадок</div>
      <div className={'transparents__list'}>{transparentsList}</div>
    </div>
  )
}
