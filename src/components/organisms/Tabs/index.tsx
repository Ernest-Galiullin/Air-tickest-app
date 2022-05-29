import cn from 'classnames'
import './style.scss'

export default function Tabs() {
  return (
    <div className={'tabs u-full-width'}>
      <div className={cn('tab', {'active': true})}>Самый дешевый</div>
      <div className={'tab'}>Самый быстрый</div>
      <div className={'tab'}>Оптимальный</div>
    </div>
  )
}
