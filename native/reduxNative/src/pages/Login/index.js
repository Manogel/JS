import React, { Component } from "react";
import api from "../../services/api";
import { ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as LoginActions from "../../store/actions/login";
import { Container, Input, Button, ButtonText, Error } from "./styles";

class Login extends Component {
  state = { username: "" };

  buscarRepo = async () => {
    const { username } = this.state;
    const { loginRequest } = this.props;
    loginRequest(username);
  };

  render() {
    const { username } = this.state;
    const { error, loading } = this.props;
    return (
      <Container>
        {error && <Error> Usuário Inexistente </Error>}
        <Input
          value={username}
          onChangeText={text => this.setState({ username: text })}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Informe seu usuário"
        />

        <Button onPress={this.buscarRepo}>
          {loading ? (
            <ActivityIndicator size={14} color="#fff" />
          ) : (
            <ButtonText> Entrar </ButtonText>
          )}
        </Button>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  error: state.login.error,
  loading: state.login.loading
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(LoginActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
