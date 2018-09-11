import React, { Component } from 'react';
import FindRecipe from"./components/FindRecipe";
import FoundFoodDishes from"./components/FoundFoodDishes";

import './App.css';

class App extends Component {

  state = {
  substance: undefined,
  ready: undefined,
  error: undefined,
  title: [],
  image: [],
  url: [],
  }

  getRecipe = async(e) => {
    e.preventDefault();
    const substance = e.target.elements.substance.value;

      const api_call = await fetch('https://www.food2fork.com/api/search?key=1abe3ca08c9ee69fe9dd6aa8f94fb75a&q=' + substance);
      console.log(api_call);

      const data = await api_call.json();
      console.log(data);

      if(substance && data.count > 0)
      {

      for(var i = 0; i < data.count - 1; i++)
      {
        this.setState({
          substance: substance,
          error: "",
          title: this.state.title.concat(data.recipes[i].title),
          image: this.state.image.concat(data.recipes[i].image_url),
          url: this.state.url.concat(data.recipes[i].source_url)
        });
      }
      this.setState({
        ready: "ready"
      });
      }
      else if(substance && data.count == 0)
      {
        this.setState({
          substance: undefined,
          ready: undefined,
          error: undefined,
          title: [],
          image: [],
          url: [],
          error: "There is no recipes with this substance.",
        });
      }
      else if(substance && data.error == "limit")
      {
        this.setState({
          substance: undefined,
          ready: undefined,
          error: undefined,
          title: [],
          image: [],
          url: [],
          error: "Recipes enquiry limit (50 api calls per day).",
        });
      }
      else
      {
        this.setState({
          substance: undefined,
          error: "Please enter the value",
        });
      }
  }

  render() {
    return (
      <div>
        <header className="header"><h1 className="appTittle">Recipe Wizard</h1></header>
        <FindRecipe getRecipe = {this.getRecipe} error = {this.state.error}/>
        <FoundFoodDishes
          substance = {this.state.substance}
          title = {this.state.title}
          url = {this.state.url}
          image = {this.state.image}
          ready = {this.state.ready}
        />
      </div>
    );
  }
}

export default App;
