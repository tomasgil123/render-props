import React, { FC, useState } from 'react'
import Search from 'src/components/Search'

import MainLayout from 'src/layouts/main'

//types
import PageWithLayout from 'src/types/pageWithLayout'

const Home: FC = () => {
  const [todoSelected, setTodoSelected] = useState(null)

  return (
    <div>
      Home
      <Search
        getTodo={(title: string): void => setTodoSelected(title)}
        placeholder="Search todos"
        loading="Loading..."
      />
    </div>
  )
}

;(Home as PageWithLayout).layout = MainLayout

export default Home
