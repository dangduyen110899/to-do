import React, { Component } from 'react'

class NewItem extends Component {

  constructor() {
    super()
    this.state = {
      display1: "hide",
      display2: "hide"
    }
  }

  render() {

    const date = new Date()
    date.setDate(date.getDate())
    const time = date.toISOString().substr(0,10)
    const handleForm = (event) => {
      this.setState({
          display1: "hide",
          display2: "hide"
      })
      event.preventDefault()
      const title = this.refs.title.value
      const desc = this.refs.desc.value
      const date = this.refs.date.value
      const pior = this.refs.pior.value

      if(title.length < 5 || (typeof title == Number)) {
        this.setState({
          display1: "visible"
        })
        this.refs.title.focus()
      }
      else if (desc.length < 5 || (typeof desc == Number)) {
        this.setState({
          display2: "visible"
        })
        this.refs.desc.focus()
      }
      else {
        const updateItem = {
          title: title,
          description: desc,
          date: date,
          piority: pior,
          check: false
        }
        this.props.addTodo(updateItem)
        this.refs.title.value = ''
        this.refs.date.value = ''
        this.refs.desc.value = ''
        this.refs.pior.value = 'Normal'
        this.setState({
          display1: "hide",
          display2: "hide"
        })
      }
    }

    return (
      <div className="new-item">
        <h4>New Task</h4>
        <form  onSubmit={event => handleForm(event)} >
          <div>
            <input
              type="text"
              placeholder="Add new task ..."
              ref="title"
              required>
            </input>
            <span className={this.state.display1}>Title must 5-50 and string </span>
          </div>
          <div>
            <label>Description</label>
            <textarea
              rows="10"
              type="text"
              cols="100%"
              ref="desc"
              required>
            </textarea>
            <span className={this.state.display2}>Description must 5-50 and string</span>
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
              <button>Add
              </button>
            </div>
        </form>
      </div>
    )
  }
}

export default NewItem