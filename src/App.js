import React, { Component } from "react";

class App extends Component {
  constructor() {
    super()
    this.state = {
      pokemon: [],
      search: "",
      selectedPokemon: null
    }
  }

  async componentDidMount(){
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/`)
    const json = await res.json()
    this.setState({pokemon: json.results})
  }

onSearchChange = event => {
  this.setState({search: event.target.value})
}

generateSearchResults = search => {
  if (search === ""){
    return []
  } else {
    return this.state.pokemon
      .filter(p => p.name.includes(search))
      .slice(0,10)
  }
}

selectPokemon = async name => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
  const json = await res.json()
  this.setState({selectedPokemon: json})

}

  render() {
    const results = this.generateSearchResults(this.state.search)

    return (
      <div className="App">
        <div className="search">
          <input onChange={this.onSearchChange} type="text" />
          <ul>
            {results.map(r => 
              <li onClick={() => this.selectPokemon(r.name)}> 
                { r.name } 
              </li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
