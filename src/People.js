import React, { Component } from "react";
import Person from "./Person";
import PersonAdd from "./PersonAdd";

class People extends Component {
  constructor() {
    super();

    this.state = {
      people: [
        { id: "1", name: "Sally W.", age: 23 },
        { id: "2", name: "Rick S.", age: 30 },
        { id: "3", name: "Samantha T.", age: 52 }
      ]
    };
  }

  updatePersonName = (id, name) => {
    this.setState(state => {
      const newPeople = state.people.map(person => {
        // if this is the same user, lets update them.
        if (person.id === id) {
          // lets return a new person with an updated name.
          return {
            ...person,
            name: name
          };
        }

        // return the same person, no reason to update
        return person;
      });

      // return the new state
      return { people: newPeople };
    });
  };

  addPerson = (person) => {
    this.setState(state => {
      const people = [...state.people, person]
      return {people}
    })
  }

  render() {
    const { people } = this.state;

    return (
      <form>
        <PersonAdd addPerson={this.addPerson}/>
        <ul className="people">
          {people.map(p => (
            <Person
              key={p.id}
              id={p.id}
              name={p.name}
              updatePersonName={this.updatePersonName}
            />
          ))}
        </ul>
      </form>
    );
  }
}

export default People;
