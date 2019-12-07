import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    accept: false,

    errors: {
      username: true,
      email: true,
      password: true,
      accept: true
    }
  };

  messages = {
    username_incorrect:
      "Name must be longer than 10 characters and cannot contain spaces",
    email_incorrect: "No @ sign in e-mail",
    password_incorrect: "Password must contain 8 characters",
    accept_incorrect: "Consent must be approved"
  };

  handleChange = e => {
    const name = e.target.name;
    const type = e.target.type;
    if (type === "text" || type === "password" || type === "email") {
      const value = e.target.value;
      this.setState({
        [name]: value
      });
    } else if (type === "checkbox") {
      const checked = e.target.checked;
      this.setState({
        [name]: checked
      });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("work");
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit} noValidate>
          <label htmlFor="user">
            Your name:
            <input
              type="text"
              id="user"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
            {this.state.errors.username && (
              <span> {this.messages.username_incorrect}</span>
            )}
          </label>

          <label htmlFor="email">
            Your e-mail:
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            {this.state.errors.email && (
              <span> {this.messages.email_incorrect}</span>
            )}
          </label>

          <label htmlFor="password">
            Your password:
            <input
              type="password"
              id="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            {this.state.errors.password && (
              <span> {this.messages.password_incorrect}</span>
            )}
          </label>

          <label htmlFor="accept">
            <input
              type="checkbox"
              id="accept"
              name="accept"
              checked={this.state.accept}
              onChange={this.handleChange}
            />{" "}
            I agree to the processing of data
          </label>
          {this.state.errors.accept && (
            <span> {this.messages.accept_incorrect}</span>
          )}
          <button>Sign up</button>
        </form>
      </div>
    );
  }
}

export default App;
