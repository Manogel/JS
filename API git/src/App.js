import React, { Component } from "react";

import api from "./services/api";
import Repo from "./components/Repo";
// import { Container } from './styles';

export default class App extends Component {
  state = {
    repos: [],
    owner: [],
    user: "",
    userChecked: false
  };
  async componentDidMount() {}

  loadUser = async () => {
    const { user } = this.state;
    try {
      const { data } = await api.get(`/users/${user}/repos`);

      const { owner } = data[0];
      console.log(data);
      this.setState({ repos: data, owner, userChecked: true });
    } catch (err) {
      alert("Usuário não encontrado!");
    }
  };
  changeText = e => {
    this.setState({ user: e.target.value });
  };

  render() {
    const { repos, owner, user, userChecked } = this.state;

    return (
      <div>
        {!userChecked ? (
          <div className="select-user">
            <input
              value={user}
              onChange={e => this.changeText(e)}
              type="text"
            />
            <button onClick={() => this.loadUser()}>Buscar</button>
          </div>
        ) : (
          <div>
            <div className="top">
              <div className="top-content">
                <h1>Lista de Repositórios</h1>
                <div className="user-data">
                  <img src={owner.avatar_url} alt="avatar" />
                  <p>{owner.login}</p>
                </div>
              </div>
            </div>
            <div className="content">
              {repos.map(repo => (
                <Repo data={repo} />
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}
