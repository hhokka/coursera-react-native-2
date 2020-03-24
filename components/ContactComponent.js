import React, { Component } from "react";
import { Text, ScrollView, View } from "react-native";
import { Card } from "react-native-elements";
import { DISHES } from "../shared/dishes";
import { PROMOTIONS } from "../shared/promotions";
import { LEADERS } from "../shared/leaders";

class Contact extends Component {
  static navigationOptions = {
    title: "Contact Information"
  };

  render() {
    return (
      <View>
        <Card title="Contact Information">
          <Text>121, Clear Water Bay Road</Text>
          <Text>Clear Water Bay, Kowloon</Text>
          <Text>HONG KONG</Text>
          <Text>Tel: +852 1234 5678</Text>
          <Text>Fax: +852 8765 4321</Text>
          <Text>Email:confusion@food.net</Text>
        </Card>
      </View>
    );
  }
}

export default Contact;
