import React from "react";
import { Form, Button } from "semantic-ui-react";
import ItemForm from "./component/ItemForm";
import { relative } from "path";
import "./App.css";

class App extends React.Component {
  state = {
    todos: [{ id: 1, content: "Item 1" }, { id: 2, content: "Item 2" }],
    new_todo: ""
  };

  deleteEntry = id => {
    let todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({ todos: todos, count: this.state.count });
  };

  handleSubmit = () => {
    this.setState({
      todos: [
        ...this.state.todos,
        { id: Math.random(), content: this.state.new_todo }
      ],
      new_todo:""
    });
  };

  new_todo_change = e => {
    this.setState({ new_todo: e.target.value });
  };

  render() {
    return (
      <div className="App">
        <div className="ui container">
          <header className="App-header">
            <div className="ui header"> This is a todo list</div>
            <ItemForm todos={this.state.todos} handleClick={this.deleteEntry} />
            <div className="container">
              <Form onSubmit={this.handleSubmit}>
                <Form.Field className="todo content">New todo</Form.Field>
                <input
                  type="text"
                  name="new todo"
                  value={this.state.new_todo}
                  onChange={this.new_todo_change}
                  placeholder="What do you want to do today?"
                />
                <Button>Add</Button>
              </Form>
            </div>
          </header>
        </div>
      </div>
    );
  }
}

export default App;
