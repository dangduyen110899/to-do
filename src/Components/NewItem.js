import React, { Component } from 'react'

class NewItem extends Component {

  render() {

    const date = new Date();
    date.setDate(date.getDate());
    const time = date.toISOString().substr(0,10);
    const handleForm = () => {
      const title = this.refs.title.value;
      const desc = this.refs.desc.value;
      const date = this.refs.date.value;
      const pior = this.refs.pior.value;
      const updateItem = {
        title: title,
        description: desc,
        date: date,
        piority: pior
      }
      this.props.addTodo(updateItem)
      this.refs.title.value = ''
      this.refs.date.value = ''
      this.refs.desc.value = ''
      this.refs.pior.value = 'Normal'
    }

    return (
      <div className="new-item">
        <h4>New Task</h4>
        <form>
          <div>
            <input type="text"
              placeholder="Add new task ..."
              ref="title"
              required>
            </input>
          </div>
          <div>
            <label>Description</label>
            <textarea
              rows="10"
              cols="100%"
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
                defaultValue={time}
                ref="date"
                required>
              </input>
            </div>
            </div>
            <div className="bt-item-right">
              <label>Piority</label>
              <select ref="pior">
                <option>Normal </option>
                <option>Low</option>
                <option>High</option>
              </select>
            </div>
          </div>
            <div className="button_content">
              <button
                type="submit"
                onClick={() => handleForm()}>Add
              </button>
            </div>
        </form>
      </div>
    )
  }
}

export default NewItem