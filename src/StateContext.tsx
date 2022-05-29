import React, {ReactNode} from 'react'
import {useInterpret} from '@xstate/react'
import {stateMachine} from 'machine'
import {InterpreterFrom} from 'xstate'

export const GlobalStateContext = React.createContext({
  stateService: {} as InterpreterFrom<typeof stateMachine>
})

export const GlobalStateProvider = (props: {children: ReactNode}) => {
  const stateService = useInterpret(stateMachine)

  return (
    <GlobalStateContext.Provider value={{stateService}}>
      {props.children}
    </GlobalStateContext.Provider>
  )
}
