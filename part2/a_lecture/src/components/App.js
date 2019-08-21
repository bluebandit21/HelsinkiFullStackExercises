import React from 'react'
import DisplayList from './DisplayList.js'

const App = ({notes}) => {
	return (
    <div>
      <h1>Notes</h1>
      <DisplayList list={notes} />
     </div>
  )
}

export default App