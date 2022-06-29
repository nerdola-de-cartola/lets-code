import React from 'react'

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      language: 'JavaScript',
      type: 'programmer',
      dedicated: true,
      bio: ''
    }
    this.handleSubmit = (event) => {
      event.preventDefault()
      console.log(this.state);
    }

    this.changeName = (event) => {
      this.setState({ name: event.target.value })
    }

    this.changeSelect = (event) => {
      this.setState({ language: event.target.value })
    }

    this.changeRadio = (event) => {
      this.setState({ type: event.target.value })
    }

    this.changeCheckbox = (event) => {
      this.setState({ dedicated: event.target.checked })
    }

    this.changeBio = (event) => {
      this.setState({ bio: event.target.value })
    }
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type='text' value={this.state.name} onChange={this.changeName} />
          </label>
          <br />
          <label>
            Favorite language:
            <select value={this.state.language} onChange={this.changeSelect}>
              <option>JavaScript</option>
              <option>Python</option>
              <option>C++</option>
            </select>
          </label>
          <br />
          <label>
            I am:
            <input type='radio' checked={this.state.type === 'programmer'} onChange={this.changeRadio} value='programmer' /> Programmer
            <input type='radio' checked={this.state.type === 'student'} onChange={this.changeRadio} value='student' /> Student
          </label>
          <br />
          <label>
            <input type='checkbox' checked={this.state.dedicated} onChange={this.changeCheckbox} /> I dedicate at least eight hours a week to studying.
          </label>
          <br />
          <label>
            Bio:
            <br/>
            <textarea cols="50" value={this.state.bio} onChange={this.changeBio} />
          </label>
          <br />
          <input type='submit' value='Save' />
        </form>
      </>
    )
  }
}

export default Form;
