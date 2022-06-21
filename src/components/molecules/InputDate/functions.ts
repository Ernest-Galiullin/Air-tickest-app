export function getPrettyDate(date: Date): string {
  const months = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь'
  ]
  const weeks = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']

  const month = months[date.getMonth()].toLowerCase()
  const week = weeks[date.getUTCDay()]
  const day = date.getDate()

  return `${day} ${month}, ${week}`
}
