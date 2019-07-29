import React from "react";
import PropTypes from "prop-types";
import { View, Text, Image } from "react-native";
import styles from "./styles";

// import { Container } from './styles';

const OrgItem = ({ organization }) => (
  <View style={styles.container}>
    <Image style={styles.avatar} source={{ uri: organization.avatar_url }} />
    <Text style={styles.title}> {organization.login}</Text>
  </View>
);

OrgItem.propTypes = {
  organization: PropTypes.shape({
    avatar_url: PropTypes.string,
    login: PropTypes.string
  }).isRequired
};

export default OrgItem;