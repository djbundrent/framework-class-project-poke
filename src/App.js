import React, { Component } from "react";

class App extends Component {
  constructor() {
    super()
    this.state = {
      pokemon: [],
      search: ""
    }
  }

  async componentDidMount(){
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/")
    const json = await res.json()
    this.setState({pokemon: json.results})
  }

onSearchChange = event => this.setState({search: event.target.value})

  render() {
    return (
      <div className="App">
        <div className="search">
          <input onChange={this.onSearchChange} type="text" />
          <ul>
            your list here
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
