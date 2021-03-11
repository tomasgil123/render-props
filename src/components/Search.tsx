import { useDebounceValue } from 'src/hooks/useDebounceValue'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { Todo } from 'src/types/todos'
import { getTodos } from 'src/services/getTodos'
import Autocomplete from './Autocomplete'

type SearchProps = {
  getTodo: (value: any) => void
  placeholder: string
  loading: string
  input: (
    handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void,
    value: string,
    placeholder: string
  ) => JSX.Element
}

const Search: React.FC<SearchProps> = ({ getTodo, placeholder, loading, input }) => {
  const [todoTitle, setTodoTitle] = useState('')
  const [hasSelected, setHasSelected] = useState(false)
  const [predictions, setPredictions] = useState<Todo[]>([])
  const debouncedAddress = useDebounceValue<string>(todoTitle, 500)

  const getTodosFiltered = async (): Promise<Todo[]> => {
    const data = await getTodos(todoTitle)
    return data
  }

  const { data: predictionsQuery, isLoading } = useQuery(
    ['predictions', debouncedAddress],
    getTodosFiltered,
    { enabled: todoTitle.length >= 3 }
  )

  useEffect(() => {
    if (predictionsQuery) {
      setPredictions(predictionsQuery?.todos)
    }
  }, [predictionsQuery])

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const title = e.target.value
    setTodoTitle(title)
    if (hasSelected) setHasSelected(false)
  }

  const handleOnSelect = async (title: string): Promise<void> => {
    setTodoTitle(title)
    setHasSelected(true)
    setPredictions([])
    getTodo(title)
  }

  return (
    <div className="relative">
      {input(handleOnChange, todoTitle, placeholder)}
      {!hasSelected && todoTitle.length >= 3 && (
        <Autocomplete
          loading={isLoading}
          suggestions={predictions}
          loadingText={loading}
          selected={todoTitle}
          handleSelect={handleOnSelect}
        />
      )}
    </div>
  )
}

export default Search
