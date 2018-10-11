import React, {Component} from "react"

class PersonAdd extends Component {
    constructor() {
        super()

        this.state = {
            name: ""
        }
    }

    onNameChange = (event) => {
        this.setState({name: event.target.value})
    }

    addPerson = (event) => {
        event.preventDefault();

        const person = {
            name: this.state.name
        }

        this.props.addPerson(person)
        this.setState({name: ''})
    }

    render() {
        return (
            <div> 
                <input 
                    type="text" 
                    placeholder="Someone name"
                    value={this.state.name}
                    onChange={this.onNameChange}/>
                <button onClick={this.addPerson}> Add </button>
            </div>
        )
    }
}

export default PersonAdd