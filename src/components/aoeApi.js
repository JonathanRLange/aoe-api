import React, { Component } from "react"
import Grid from "@material-ui/core/Grid"
import DataCard from "./dataCard"

class AoeApi extends Component {
  state = { items: [], isLoaded: false, searchTerm: "" }

  componentDidMount() {
    console.log("here I am")
    fetch(
      "https://secret-ocean-49799.herokuapp.com/https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations"
    )
      .then(res => res.json())
      .then(json => {
        this.setState({
          items: json,
          isLoaded: true,
        })
        //console.log(this.state.items)
      })
      .catch(err => {
        console.log("here")
        console.log(err)
      })
  }

  handleSearchTermChange = event => {
    this.setState({
      searchTerm: event.target.value,
    })
  }

  render() {
    const { isLoaded } = this.state

    if (!isLoaded) return <div>Loading...</div>

    return (
      <div>
        <span>Search: </span>
        <input
          type="text"
          value={this.state.searcgTerm}
          onChange={this.handleSearchTermChange}
        />
        <Grid container spacing={1}>
          {this.state.items.civilizations
            .filter(val => {
              if (this.state.searchTerm == "") {
                return val
              } else if (
                val.name
                  .toLowerCase()
                  .includes(this.state.searchTerm.toLocaleLowerCase()) ||
                val.army_type
                  .toLowerCase()
                  .includes(this.state.searchTerm.toLocaleLowerCase())
              ) {
                return val
              }
            })
            .map(civ => (
              <Grid item xs={4} key={civ.id}>
                <DataCard key={civ.id} civ={civ} />
              </Grid>
            ))}
        </Grid>
      </div>
    )
  }
}

export default AoeApi

//const { items } = this.state.items.civilizations;

//{items.map(item => (
//  <li key={item.id}>Name: {item.name}</li>
//))}
