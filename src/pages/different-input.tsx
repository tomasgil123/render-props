import React, { FC, useState } from 'react'
import Search from 'src/components/Search'

import MainLayout from 'src/layouts/main'

//types
import PageWithLayout from 'src/types/pageWithLayout'

const DifferentInput: FC = () => {
  const [todoSelected, setTodoSelected] = useState(null)

  return (
    <div style={{ padding: '20px' }}>
      Different input
      <Search
        getTodo={(title: string): void => setTodoSelected(title)}
        placeholder="Search todos"
        loading="Loading..."
        input={(handleOnChange, value, placeholder): JSX.Element => (
          <input
            className="border solid border-red-400"
            onChange={handleOnChange}
            value={value}
            placeholder={placeholder}
          />
        )}
      />
    </div>
  )
}

;(DifferentInput as PageWithLayout).layout = MainLayout

export default DifferentInput
