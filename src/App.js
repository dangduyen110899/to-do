import React, { Component } from 'react'
import './App.css'
import NewItem from './Components/NewItem'
import ListItem from './Components/ListItem'

class App extends Component {
  constructor() {
    super()
    this.state = {
      searchItem: [],
      items: []
    }
  }

  sortTime() {
    this.state.items.sort(function(a, b) {
      var dateA = new Date(a.date), dateB = new Date(b.date);
      return dateA - dateB;
    });
  }

  addTodo = (item) => {
    const itemNew = { ...item, id: this.state.items.length }
    const items = [...this.state.items, itemNew]
    this.setState({
      items,
    },() => {
      this.sortTime()
      localStorage.setItem('todos', JSON.stringify(this.state.items))
    })
  }

  updateTodo = (itemUpdate) => {
    const items = this.state.items
    items.map( (item,index) => {
      if(itemUpdate.id === item.id){
        items.splice(index,1,itemUpdate)
      }
    })
    this.setState({
      items,
    },() => {
      this.sortTime()
      localStorage.setItem('todos', JSON.stringify(this.state.items))
    })
  }

  deleteTodo = (idItem) => {
    const items = this.state.items
    items.forEach( (item,index) => {
      if(item.id == idItem) {
        items.splice(index,1)
      }
    })
    this.setState({items}, () => {
      this.sortTime()
      localStorage.setItem('todos', JSON.stringify(this.state.items))
    })
  }

  deleteAll = () => {
    const items = this.state.items
    console.log(items)
    for (let index = 0; index < items.length; index++) {
      console.log(index)
      if(items[index].check == true) {
        items.splice(index,1)
        console.log(items)
        index = index-1
      }
    }
    this.setState({items}, () => {
      localStorage.setItem('todos', JSON.stringify(this.state.items))
    })
  }

  componentDidMount() {
    const todos = localStorage.getItem('todos')
    if (todos) {
      this.setState({ items: JSON.parse(todos)})
    }
  }

  searchList = (title) => {
    const searchItem = []
    const items = this.state.items
    items.forEach(item => {
      if(item.title == title) {
        searchItem.push(item)
        this.setState({
          ...items,
          searchItem,
        })
      }
    });
  }

  check = (itemId) => {
    const items = this.state.items
    items.forEach( (item,index) => {
      if(item.id == itemId) {
        item.check = true
      }
    })
    console.log(items)
    this.setState({items}, () => {
      localStorage.setItem('todos', JSON.stringify(this.state.items))
    })
  }

  render() {
    this.sortTime()
    return (
      <div className="container">
        <NewItem addTodo={this.addTodo} />
        <ListItem
          items={this.state.items}
          deleteTodo={this.deleteTodo}
          updateTodo={this.updateTodo}
          deleteAll={this.deleteAll}
          searchList={this.searchList}
          searchItem={this.state.searchItem}
          check={this.check}
          />
      </div>
    )
  }
}

export default App

