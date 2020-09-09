import React, { Component } from 'react'
import Item from './Item'

class ListItem extends Component {
  constructor() {
    super()
    this.state = {
      showList: true,
    }
  }
  render() {
    const { items, deleteTodo, updateTodo, searchItem ,check} = this.props
    const handleSearch = () => {
      this.setState({
        showList: false
      })
      this.props.searchList(this.refs.search.value)
    }
    return (
      <div className="to-do-list" >
      <div className="list-item">
        <h4>To Do List</h4>
        <div className="search">
          <input type="text" placeholder="Search..." name="search" ref="search"/>
          <i class="fas fa-search" onClick={() => handleSearch()} ></i>
        </div>
        {
          !this.state.showList && searchItem.map( item => {
            return (
              <Item
                item={item}
                deleteTodo={deleteTodo}
                updateTodo={updateTodo}/>
            )
          })
        }
        {
          this.state.showList && items.map( item => {
            return (
              <Item
                item={item}
                deleteTodo={deleteTodo}
                updateTodo={updateTodo}
                check={check}
                />
            )
          })
        }
     </div>
      <div className="bukAction">
      <h3>Buk Action: </h3>
        <div className="remove remove-all">
          <button>Done</button>
          <button
            onClick={() => this.props.deleteAll()}>Remove
          </button>
        </div>
      </div>
      </div>
    )
  }
}

export default ListItem