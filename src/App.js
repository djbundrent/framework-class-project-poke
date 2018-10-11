import React, { Component } from "react";
import poke from "./poke.js"

console.log(poke.results)

class App extends Component {
  state = {
    searchString: ""
  }

  onInput = (event) => {
    this.setState({searchString: event.target.value})
  }

  generateResults = (searchString) => {
    if (searchString === '') {
      return []
    } else {
      return poke.results.filter(p => p.name.includes(searchString)).slice(0, 10)
    }
  }

  render() {
    const results = this.generateResults(this.state.searchString)

    return (
      <div className="App">
        <form>
          <input onInput={this.onInput}></input>
          <ul className="poke">
            {results.map(r => <li> {r.name} </li>)}
          </ul>
        </form>
      </div>
    );
  }
}

export default App;
