import React, { Component } from 'react';
import './App.css';
import SearchBar from './Searchbar/Searchbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar onSubmit={this.searchImages} />
      </div>
    );
  };
};

export default App;
