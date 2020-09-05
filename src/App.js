import React, { Component } from 'react'
import './App.css'
import NewItem from './Components/NewItem';
import ListItem from './Components/ListItem';

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: []
    }
  }

  addTodo = (item) => {
    const itemNew = { ...item, id: this.state.items.length }
    const items = [...this.state.items, itemNew]
    this.setState({
      items,
    },() => {
      localStorage.setItem('items', JSON.stringify(this.state.items))
    })
  }

  updateTodo = (itemUpdate) => {
    const items = this.state.items;
    items.map( (item,index) => {
      if(itemUpdate.id === item.id){
        items.splice(index,1,itemUpdate)
      }
    })
    this.setState({
      items,
    },() => {
      localStorage.setItem('items', JSON.stringify(this.state.items))
    })
  }


  deleteTodo = (idItem) => {
    const items = this.state.items
    items.forEach( (item,index) => {
      if(item.id == idItem) {
        items.splice(index,1)
      }
    });
    this.setState({items}, () => {
      localStorage.setItem('items', JSON.stringify(this.state.items))
    })
  }

  deleteAll = () => {
    const items = []
    this.setState({items}, () => {
      localStorage.setItem('items', JSON.stringify(this.state.items))
    })
  }

  componentDidMount() {
    const items = localStorage.getItem('items');
    if (items) {
      this.setState({ items: JSON.parse(items)});
    }
  }

  render() {
    return (
      <div className="container">
        <NewItem addTodo={this.addTodo} />
        <ListItem
          items={this.state.items}
          deleteTodo={this.deleteTodo}
          updateTodo={this.updateTodo}
          deleteAll={this.deleteAll}/>
      </div>
    )
  }
}

export default App

