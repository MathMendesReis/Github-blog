import { ReactNode, createContext, useState } from 'react'

interface ContextType {
  search: string
  setSearch: (value: string) => void
}

const defaultContext: ContextType = {
  search: '',
  setSearch: () => {},
}

export const FilterContext = createContext<ContextType>(defaultContext)

export default function FilterContextProvider({
  children,
}: {
  children: ReactNode
}) {
  const [search, setSearch] = useState<string>('')

  return (
    <FilterContext.Provider
      value={{
        search,
        setSearch,
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}
