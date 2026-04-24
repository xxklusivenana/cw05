import './App.css';

import React, { Component } from 'react';
import HelloWorld from './components/HelloWorld.jsx';
import Counter from './components/Counter.jsx';
import FoodList from './components/List.jsx';
import Spacer from './components/Spacer.jsx';
import FilteredList from './components/FilteredList.jsx';
import Header from './components/Header.jsx';

const produce = [
    { name: "Apple", type: "Fruit" },
    { name: "Banana", type: "Fruit" },
    { name: "Carrot", type: "Vegetable" },
    { name: "Broccoli", type: "Vegetable" },
    { name: "Orange", type: "Fruit" },
    { name: "Spinach", type: "Vegetable" }
];

class App extends Component {
  render() {
    return (
      <div className = "App">
        <HelloWorld/>
        <Counter/>
        <FilteredList items={produce}/>
      </div>
    )
  }
}

export default App;