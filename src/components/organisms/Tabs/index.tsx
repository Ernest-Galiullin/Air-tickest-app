import cn from 'classnames'
import orderBy from 'lodash.orderby'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { selectSortType, selectTabs, updateTabs } from 'store/tabsSlice'
import { selectFiltredTickets, updateFiltredTickets } from 'store/ticketsSlice'
import './style.scss'

export default function Tabs() {
  const tabs = useAppSelector(selectTabs)
  const tickets = useAppSelector(selectFiltredTickets)
  const sortType = useAppSelector(selectSortType)
  const dispatch = useAppDispatch()

  const handleClickTabs = (event: any) => {
    const id = Number(event.target.id)
    dispatch(updateTabs(id))
  }

  useEffect(() => {
    let filtredData = orderBy(tickets, sortType, 'asc')
    dispatch(updateFiltredTickets(filtredData))
    // eslint-disable-next-line
  }, [tabs])

  return (
    <div className="tabs u-full-width">
      {tabs.map(({ title, isActive, id }) => (
        <div
          className={cn('tab', { 'active': isActive })}
          key={id}
          onClick={handleClickTabs}
          id={String(id)}
        >
          {title}
        </div>
      ))}
    </div>
  )
}
