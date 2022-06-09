// сам билет, включает в себя остальные сущности
export interface ITicket {
  id: string
  // Цена в рублях
  price: number
  // идентификатор компании которая осуществляет перевозку
  companyId: string
  // Массив идентификаторов перелётов
  info: {
    // Код города откуда вылет
    origin: TCityCodes
    // Код города куда летим
    destination: TCityCodes
    // Дата и время вылета в unix времени
    dateStart: string
    // Дата и время прибытия в unix времени
    dateEnd: string
    // Массив кодов городов с пересадками
    stops: TCityCodes[]
    // Длительность полета в миллисекундах
    duration: number
  }
}

// Список кодов городов. Мы в каждом билете будем лететь с MOW в EKT
export type TCityCodes =
  | 'MOW'
  | 'HKT'
  | 'HKG'
  | 'JNB'
  | 'PTB'
  | 'ARH'
  | 'TRN'
  | 'KRS'
  | 'SRT'
  | 'LOS'
  | 'EKV'
  | 'EKT'
  | ''

export interface ICompany {
  id: string
  name: string
  logo: string
}
