import React, { Component } from "react";
import propTypes from "prop-types";
import { View, ActivityIndicator, FlatList } from "react-native";
import Header from "../../components/Header";
import Icon from "react-native-vector-icons/FontAwesome";
import AsyncStorage from "@react-native-community/async-storage";
import api from "../../services/api";
import styles from "./styles";
import RepoItem from "./RepoItem/index";

const TabIcon = ({ tintColor }) => (
  <Icon size={20} name="list-alt" color={tintColor} />
);

TabIcon.propTypes = {
  tintColor: propTypes.string.isRequired
};

export default class Repositories extends Component {
  componentDidMount() {
    this.loadRepositories();
  }

  loadRepositories = async () => {
    const username = await AsyncStorage.getItem("@GitHuber:username");
    const response = await api.get(`/users/${username}/repos`);
    this.setState({ data: response.data, loading: false, refreshing: false });
  };

  state = {
    data: [],
    loading: true,
    refreshing: true
  };

  static navigationOptions = {
    tabBarIcon: TabIcon
  };

  renderListItem = ({ item }) => {
    console.tron.log(item);
    return <RepoItem repository={item} />;
  };

  renderList = () => {
    const { data, refreshing } = this.state;
    return (
      <FlatList
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderListItem}
        onRefresh={this.loadRepositories}
        refreshing={refreshing}
      />
    );
  };

  render() {
    const { data, loading } = this.state;
    console.tron.log(data);
    return (
      <View style={styles.container}>
        <Header title="Repositorios" />
        {loading ? (
          <ActivityIndicator style={styles.loading} />
        ) : (
          this.renderList()
        )}
      </View>
    );
  }
}
