import React, { Component } from "react";
import Header from "../../components/Header/index";
import { View, ActivityIndicator, FlatList, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import AsyncStorage from "@react-native-community/async-storage";
import propTypes from "prop-types";
import OrgItem from "./OrgItem/index";
import styles from "./styles";
import api from "../../services/api";

const TabIcon = ({ tintColor }) => (
  <Icon size={20} name="building" color={tintColor} />
);

TabIcon.propTypes = {
  tintColor: propTypes.string.isRequired
};
export default class Organizations extends Component {
  componentDidMount() {
    this.loadOrganizations();
  }

  loadOrganizations = async () => {
    const username = await AsyncStorage.getItem("@GitHuber:username");
    const response = await api.get(`/users/${username}/orgs`);
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
    return <OrgItem organization={item} />;
  };

  renderList = () => {
    const { data, refreshing } = this.state;
    console.tron.log(data);

    if (data.length == 0) {
      return (
        <View style={styles.containerError}>
          <Text style={styles.titleError}>
            Não existem Organizações para este usuário!
          </Text>
        </View>
      );
    } else {
      return (
        <FlatList
          data={data}
          keyExtractor={item => String(item.id)}
          renderItem={this.renderListItem}
          onRefresh={this.loadOrganizations}
          refreshing={refreshing}
          numColumns={2}
          columnWrapperStyle={styles.columns}
        />
      );
    }
  };

  render() {
    const { data, loading } = this.state;
    console.tron.log(data);
    return (
      <View style={styles.container}>
        <Header title="Organizações" />
        {loading ? (
          <ActivityIndicator style={styles.loading} />
        ) : (
          this.renderList()
        )}
      </View>
    );
  }
}
