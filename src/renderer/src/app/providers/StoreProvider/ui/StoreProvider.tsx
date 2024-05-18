import { Provider } from 'react-redux'
import { ReactNode } from 'react'
import { createReduxStore } from '../config/store'
import { StateSchema } from '../config/StateSchema'

type StoreProviderProps = {
  children: ReactNode
  initialState?: StateSchema
}

export const StoreProvider = ({ children, initialState }: StoreProviderProps) => {
  const store = createReduxStore(initialState)
  return <Provider store={store}>{children}</Provider>
}
