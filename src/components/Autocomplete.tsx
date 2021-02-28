/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
import { Todo } from 'src/types/todos'

type AutocompleteProps = {
  suggestions: Todo[]
  loading: boolean
  loadingText: string
  handleSelect: (address: string) => void
  selected: string
}

const Autocomplete: React.FC<AutocompleteProps> = ({
  loading,
  loadingText,
  suggestions,
  selected,
  handleSelect,
}) => {
  debugger
  return (
    <div
      className={`border-solid border border-gray-400 rounded-b-md absolute inset-x-0 pt-2 top-0 w-full mt-8 bg-white z-10`}
    >
      {loading && <div className="p-3">{loadingText}</div>}
      {suggestions.map((suggestion, index) => {
        return (
          <div
            className="hover:bg-gray-200 cursor-pointer p-3 truncate focus:shadow-outline focus:outline-none"
            key={suggestion.id}
            onClick={(): void => handleSelect(suggestion.title)}
            role="option"
            aria-selected={selected === suggestion.title}
            tabIndex={index}
          >
            <span>{suggestion.title}</span>
          </div>
        )
      })}
    </div>
  )
}

export default Autocomplete
