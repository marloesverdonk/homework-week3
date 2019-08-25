import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import ModelDetails from './ModelDetails'

class App extends Component {
  state = {
    selectedValue: "",
  }

  updateSelection = (event) => {
    const value = event.target.value;

    this.setState({
      selectedValue: value
    });
  }

  addClicked = (event) => {
    this.props.dispatch({
      type: 'ADD_MODEL',
      payload: {
        name: this.state.selectedValue
      }
    })
  }

  render() {
    console.log(this.props.computerModels)
    return (
      <div className="App">
        <header className="App-header">
          <h1>Home computer models</h1>
        </header>
        <main>
          <select onChange={this.updateSelection} value={this.state.selectedValue}>
            <option value="">-- pick a model --</option>
            {
              data.map((computerModel) => {
                return (
                  <option value={computerModel.name} key={computerModel.name}> {computerModel.name} ({computerModel.year})</option>
                )
              })
            }
          </select>
          <button onClick={this.addClicked}>Add</button>
            <ModelDetails/>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    computerModels: state
  }
}


const data = [
  {
    name: "Ivel Z3",
    manufacturer: "Ivasim",
    year: 1969,
    origin: "Croatia"
  },
  {
    name: "Bally Astrocade",
    manufacturer: "Bally Consumer Products",
    year: 1977,
    origin: "USA"
  },
  {
    name: "Sord M200 Smart Home Computer",
    manufacturer: "Sord Computer Corporation",
    year: 1971,
    origin: "Japan"
  },
  {
    name: "Commodore 64",
    manufacturer: "Commodore",
    year: 1982,
    origin: "USA"
  }
]

export default connect(mapStateToProps)(App)