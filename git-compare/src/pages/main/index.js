import React, { Component } from "react";
import Logo from "../../styles/assets/logo.png";
//import "./styles.css";
import { Container, Form } from "./styles";
import CompareList from "../../components/CompareList/index";

export default class Main extends Component {
  state = {
    repo_input: "",
    repositorios: []
  };

  handleAddRepository = e => {
    e.preventDefault();
  };

  render() {
    return (
      <Container className="container">
        <img src={Logo} alt="Github Compare" />
        <Form className="Form-user" onSubmit={this.handleAddRepository}>
          <input
            type="text"
            placeholder="usuário/repositório"
            value={this.state.repo_input}
            onChange={e => this.setState({ repo_input: e.target.value })}
          />
          <button type="submit"> OK </button>
        </Form>
        <CompareList repositorios={this.state.repositorios} />
      </Container>
    );
  }
}
