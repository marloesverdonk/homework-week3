import React, {Component} from 'react';
import './App.css';

export default class App extends Component {
  render(){
  return (
    <div className="App">
      <header className="App-header">
        Home computer models
      </header>
      <main>
    <select>
      <option value="">-- pick a model --</option>
      <option value={data[0].name}> {data[0].name} ({data[0].year})</option>
      <option value={data[1].name}> {data[1].name} ({data[1].year})</option>
      <option value={data[2].name}> {data[2].name} ({data[2].year})</option>
      <option value={data[3].name}> {data[3].name} ({data[3].year})</option>
    </select>
      </main>
    </div>
  );
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
