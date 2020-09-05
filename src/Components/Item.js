import React, { Component } from 'react'

class Item extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false
    }
  }
  render() {
    const { item } = this.props

    const handleUpdate = () => {
      const title = this.refs.title.value
      const desc = this.refs.desc.value
      const date = this.refs.date.value
      const pior = this.refs.pior.value
      const newItem = {
        id: item.id,
        title: title,
        description: desc,
        date: date,
        piority: pior
      }
      this.props.updateTodo(newItem)
    }

    return (
      <div key={item.id}>
        <div className="item-detail" >
          <div className="item-detail-left">
            <span>
              <input type="checkbox" checked></input>
            </span>
            <h5>{item.title}</h5>
          </div>
          <div className="item-detail-right">
            <div className="detail">
              <button
                onClick={() => this.setState({active: !this.state.active})}>Detail
              </button>
            </div>
            <div className="remove">
              <button
                onClick={() => this.props.deleteTodo(item.id)}>Remove
              </button>
            </div>
        </div>
        </div>

        <form
          className={ this.state.active ? "visible" : "hide"}>
          <div>
            <input
              type="text"
              defaultValue={item.title}
              name="title"
              ref="title"/>
          </div>
          <div>
            <label>Description</label>
            <textarea
              rows="10"
              cols="100%"
              defaultValue={item.description}
              ref="desc"
              required>
            </textarea>
          </div>
          <div className="bt-item">
            <div className="bt-item-left">
            <label>Due date</label>
            <div className="icon_input">
              <input
                type="date"
                defaultValue={item.date}
                ref="date">
              </input>
            </div>
            </div>
            <div className="bt-item-right">
              <label>Piority</label>
              <select
                ref="pior"
                defaultValue={item.piority}>
                <option>Normal </option>
                <option>Low</option>
                <option>High</option>
              </select>
            </div>
          </div>
          <div className="button_content">
            <button
              type="submit"
              onClick={() => handleUpdate()}>Update
            </button>
          </div>
        </form>
      </div>
    )
  }
}


export default Item