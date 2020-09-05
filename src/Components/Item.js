import React, { Component } from 'react';

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    }
  }
  render() {
    const { item } = this.props

    const handleUpdate = () => {
      const title = this.refs.title.value;
      const desc = this.refs.desc.value;
      const date = this.refs.date.value;
      const pior = this.refs.pior.value;
      const newItem = {
        id: item.id,
        title: title,
        description: desc,
        date: date,
        piority: pior
      }
      this.props.updateTodo(newItem);
    }

    return (
      <div key={item.id}>
        <div className="list_text" >
          <div className="list_text---left">
            <span>
              <input type="checkbox" checked></input>
            </span>
            <h5>{item.title}</h5>
          </div>
          <div className="list_text---right">
            <div className="detail_button">
              <button
                onClick={() => this.setState({active: !this.state.active})}>Detail
              </button>
            </div>
            <div className="remove_button">
              <button
                onClick={() => this.props.deleteTodo(item.id)}>Remove
              </button>
            </div>
        </div>
        </div>

        <form
          className={ this.state.active ? "content-item display-block" : "content-item hide-block"}>
          <div className="top_content">
            <input
              type="text"
              defaultValue={item.title}
              name="title"
              ref="title"/>
          </div>
          <div className="center_content">
            <label>Description</label>
            <textarea
              rows="10"
              cols="100%"
              defaultValue={item.description}
              ref="desc"
              required>
            </textarea>
          </div>
          <div className="bottom_content">
            <div className="bottom_content---left">
            <label>Due date</label>
            <div className="icon_input">
              <input
                type="date"
                defaultValue={item.date}
                ref="date">
              </input>
            </div>
            </div>
            <div className="bottom_content---right">
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


export default Item;