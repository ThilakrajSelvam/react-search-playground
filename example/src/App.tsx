import React from 'react'

import { SearchComponentPlayground } from 'react-search-playground'
import 'react-search-playground/dist/index.css'

const App = () => {
  return (
    <div className='app_container'>
      <SearchComponentPlayground url='https://www.breakingbadapi.com/api/characters' />
    </div>
  )
}

export default App
