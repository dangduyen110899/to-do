import React, { Component } from 'react'
import Item from './Item';

class ListItem extends Component {
  render() {
    const { items, deleteTodo, updateTodo } = this.props;
    return (
      <div className="list-item" >
        <h4>To Do List</h4>
        {
          items.map( item => {
            return (
              <Item
                item={item}
                deleteTodo={deleteTodo}
                updateTodo={updateTodo}/>
            )
          })
        }
      <div className="remove remove-all">
        <button
          onClick={() => this.props.deleteAll()}>RemoveAll
        </button>
      </div>
     </div>
    )
  }
}

export default ListItem