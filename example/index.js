import React from 'react'
import ReactDOM from 'react-dom'
import BackgroundDisco from '../index'

class App extends React.Component {
  render () {
    return (
      <div>
        <BackgroundDisco />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
