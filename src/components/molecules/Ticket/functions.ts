export function convertMsToHM(milliseconds: number) {
  let seconds = Math.floor(milliseconds / 1000)
  let minutes = Math.floor(seconds / 60)
  let hours = Math.floor(minutes / 60)

  seconds = seconds % 60

  minutes = seconds >= 30 ? minutes + 1 : minutes

  minutes = minutes % 60

  hours = hours % 24

  if (hours) {
    return `${hours}ч ${minutes}м`
  } else {
    return ` ${minutes}м`
  }
}

export const getTime = (date: any) =>
  new Date(date).toLocaleTimeString().slice(0, 5)

export const isTransplants = (transplants: number): boolean => transplants === 0
