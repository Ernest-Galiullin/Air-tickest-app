import {assign, createMachine} from 'xstate'
import {ICompany, ITicket} from 'interfaces'

export interface MachineContext {
  tickets: ITicket[]
  companies: ICompany[]
}
export const stateMachine = createMachine<MachineContext>(
  {
    id: 'store',
    initial: 'initialising',
    context: {
      tickets: [],
      companies: []
    },
    states: {
      initialising: {
        type: 'parallel',
        states: {
          tickets: {
            type: 'compound',
            initial: 'pending',
            states: {
              pending: {
                on: {
                  'UPDATE_TICKETS': {
                    target: 'success',
                    actions: 'updateTickets'
                  }
                }
              },
              success: {
                type: 'final'
              }
            }
          },
          companies: {
            type: 'compound',
            initial: 'pending',
            states: {
              pending: {
                on: {
                  'UPDATE_COMPANIES': {
                    target: 'success',
                    actions: 'updateCompanies'
                  }
                }
              },
              success: {
                type: 'final'
              }
            }
          }
        },
        onDone: 'success'
      },
      success: {
        type: 'compound',
        initial: 'items',
        states: {
          items: {}
        }
      }
    }
  },
  {
    actions: {
      updateTickets: assign({
        tickets: (_, event) => event.data
      }),
      updateCompanies: assign({
        companies: (_, event) => event.data
      })
    }
  }
)
