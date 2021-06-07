import React, { Component } from 'react';

class App extends Component {

  state = {
    "first-name": '',
    "last-name": '',
    count: 1,
    guests: [],
  }

  handleOnchange = e => {

    const {name, value} = e.target
    console.log('name y value: ', name, value)
    this.setState({
      [name]: value
    })
  }

  createGuest = e => {
    e.preventDefault()

    //const { count, name, lastname } = this.state
    const lastname = this.state["last-name"]
    const name = this.state["first-name"]
    const count = this.state.count

    const guest = {
      id: count,
      name,
      lastname,
    }

    console.log('this is sguest: ', guest)
    let guestslist = [...this.state.guests, guest]
    
    this.setState({
      count: count + 1,
      "first-name": '',
      "last-name": '',
      guests: guestslist
    })
  }
  render() {

    //const { name, lastname, guests } = this.state
    const name = this.state["first-name"]
    const lastname = this.state["last-name"]
    const guests = this.state.guests

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <form onSubmit={this.createGuest}>
              <div className="form-group">
                <label htmlFor="first-name">Nombre</label>
                <input 
                id="first-name"
                type="text" 
                className="form-control" 
                name="first-name" 
                value={name}
                onChange={this.handleOnchange}/>
              </div>

              <div className="form-group">
                <label htmlFor="last-name">Apellido</label>
                <input 
                type="text" 
                className="form-control" 
                name="last-name"
                value={lastname}
                onChange={this.handleOnchange}
                />
              </div>

              <div className="action">
                <button type="submit" className="btn btn-primary" >Agregar Invitado</button>
              </div>
            </form>

            <table className="table bordered-table table-striped">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Apellido</th>
                </tr>   
              </thead>
              <tbody>
              {guests.map(guest => (
                  <tr key={guest.id}>
                    <td>{guest.name}</td>
                    <td>{guest.lastname}</td>
                  </tr>
                ))} 
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default App


