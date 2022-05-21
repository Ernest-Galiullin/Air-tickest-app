import Radio from '../../atoms/Radio'
import './style.scss'

export default function Companies() {
  return (
    <div className="u-full-width companies">
      <div className="companies__title">Компания</div>
      <div className="companies__list">
        <Radio text="Все" />
        <Radio text="S7 Airlines" />
        <Radio text="XiamenAir" />
      </div>
    </div>
  )
}
