import React, { Component } from "react";

import { View } from "react-native";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as RepoActions from "../../store/actions/repositories";
import { Container } from "./styles";
import { ActivityIndicator } from "react-native";
class Repositories extends Component {
  componentDidMount() {
    const { repoRequest } = this.props;

    repoRequest();
  }
  render() {
    const { repositories } = this.props;
    return (
      <Container>
        {/* { repositories.loading ? <ActivityIndicator size="small" color ="#999"/> :
      } */}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  repositories: state.repositories
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(RepoActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Repositories);
