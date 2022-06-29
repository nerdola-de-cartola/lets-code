import React from 'react'

class App extends React.Component {
  render() {
    return (
      <>
        <h1>Hello World</h1>
        <p>My first app in react</p>
        <p>{new Date().toLocaleDateString('pt-BR')}</p>
      </>
    )
  }
}

export default App;
