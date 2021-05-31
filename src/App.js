import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import MovieCard from './MovieCard';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Movie List</h1>
        <hr></hr>
        <div className="cardsContainer">
          <MovieCard/>
        </div>
        
      </div>
    );
  }
}
