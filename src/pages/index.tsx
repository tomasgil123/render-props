import React, { FC, useState } from 'react'
import Search from 'src/components/Search'
import Input from 'src/components/Input'

import MainLayout from 'src/layouts/main'

//types
import PageWithLayout from 'src/types/pageWithLayout'

const Home: FC = () => {
  const [todoSelected, setTodoSelected] = useState(null)

  return (
    <div style={{ padding: '20px' }}>
      Home
      <Search
        getTodo={(title: string): void => setTodoSelected(title)}
        placeholder="Search todos"
        loading="Loading..."
        input={(handleOnChange, value, placeholder): JSX.Element => (
          <Input onChange={handleOnChange} value={value} placeholder={placeholder} />
        )}
      />
    </div>
  )
}

;(Home as PageWithLayout).layout = MainLayout

export default Home
