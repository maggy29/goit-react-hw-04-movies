import React, { Component } from "react";
import styles from "./Searchbox.module.css";

export default class Searchbox extends Component {
  state = { value: "" };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.value);
    this.setState({ value: "" });
  };

  render() {
    return (
      <form className={styles.searchform} onSubmit={this.handleSubmit}>
        <input
          autoFocus
          className={styles.input}
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}
