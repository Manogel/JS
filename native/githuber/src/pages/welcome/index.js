import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  StatusBar
} from "react-native";
import styles from "./styles";
import AsyncStorage from "@react-native-community/async-storage";
import api from "../../services/api";

export default class Welcome extends Component {
  static PropTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func
    }).isRequired
  };

  state = {
    username: "",
    loading: false,
    error: false
  };

  checkUser = async username => {
    const user = await api.get(`/users/${username}`);
    return user;
  };

  saveUser = async username => {
    await AsyncStorage.setItem("@GitHuber:username", username);
  };

  sigIn = async () => {
    const { navigation } = this.props;
    const { username } = this.state;
    this.setState({ loading: true });
    try {
      await this.checkUser(username);
      await this.saveUser(username);
      navigation.navigate("User");
    } catch {
      this.setState({ loading: false, error: true });
      console.tron.log("Usuário inexistente");
    }
  };

  render() {
    const { username, loading, error } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="rgba(255, 255, 255, 0.3)"
          translucent={true}
        />
        <Text style={styles.title}> Bem-vindo </Text>
        <Text style={styles.title2}>
          Para continuar, precisamos de seu usuário do GitHub!
        </Text>

        {error && <Text style={styles.error}> Usuário inexistente</Text>}
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder={"Informe seu usuário"}
            underlineColorAndroid="transparent"
            value={username}
            onChangeText={text => this.setState({ username: text })}
          />
          <TouchableOpacity style={styles.button} onPress={this.sigIn}>
            {loading ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <Text style={styles.buttonText}> Prosseguir </Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
