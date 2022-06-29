import React from 'react'

class App3 extends React.Component {
    constructor(props) {
        super(props)
        this.state = { name: '', age: 26 }
        // Muda o significado de 'this' dentro da função 'changeName'
        // Antes: this = this.changeName
        // Depois: this = React.Component
        this.changeName = this.changeName.bind(this)
        // Outra opção seria usar arrow function na função changeName
    }

    changeName(event) {
        this.setState({ name: event.target.value })
    }

    render() {
        return (
            <>
                <input type="text" value={this.state.name} onChange={this.changeName}></input>
                <p>
                    Hello {this.state.name}
                </p>
            </>
        )
    }
}

export default App3;
