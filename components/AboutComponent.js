import React, { Component } from "react";
import { Text, ScrollView, View, FlatList } from "react-native";
import { Card } from "react-native-elements";
import { DISHES } from "../shared/dishes";
import { PROMOTIONS } from "../shared/promotions";
import { LEADERS } from "../shared/leaders";
import { ListItem } from "react-native-elements";
import { connect } from "react-redux";
import { baseUrl } from "../shared/baseUrl";
import { Loading } from "./LoadingComponent";
import * as Animatable from "react-native-animatable";

const mapStateToProps = state => {
  return {
    leaders: state.leaders
  };
};
function History() {
  return (
    <Card title="Our History">
      <Text>
        Our History Started in 2010, Ristorante con Fusion quickly established
        itself as a culinary icon par excellence in Hong Kong. With its unique
        brand of world fusion cuisine that can be found nowhere else, it enjoys
        patronage from the A-list clientele in Hong Kong. Featuring four of the
        best three-star Michelin chefs in the world, you never know what will
        arrive on your plate the next time you visit us. The restaurant traces
        its humble beginnings to The Frying Pan, a successful chain started by
        our CEO, Mr. Peter Pan, that featured for the first time the world's
        best cuisines in a pan. Our Address 121, Clear Water Bay Road Clear
        Water Bay, Kowloon HONG KONG Tel: +852 1234 5678 Fax: +852 8765 4321
        Email:confusion@food.net
      </Text>
    </Card>
  );
}
class About extends Component {
  static navigationOptions = {
    title: "About Us"
  };

  render() {
    const renderLeader = ({ item, index }) => {
      return (
        <ListItem
          key={index}
          title={item.name}
          subtitle={item.description}
          hideChevron={true}
          leftAvatar={{ source: require("./images/alberto.png") }}
        />
      );
    };
    if (this.props.leaders.isLoading) {
      return (
        <ScrollView>
          <History />
          <Card title="Corporate Leadership">
            <Loading />
          </Card>
        </ScrollView>
      );
    } else if (this.props.leaders.errMess) {
      return (
        <ScrollView>
          <Animatable.View animation="fadeInDown" duration={2000} delay={1000}>
            <History />
            <Card title="Corporate Leadership">
              <Text>{this.props.leaders.errMess}</Text>
            </Card>
          </Animatable.View>
        </ScrollView>
      );
    } else {
      return (
        <ScrollView>
          <Animatable.View animation="fadeInDown" duration={2000} delay={1000}>
            <History />
            <Card title="Corporate Leadership">
              <FlatList
                data={this.props.leaders.leaders}
                renderItem={renderLeader}
                keyExtractor={item => item.id.toString()}
              />
            </Card>
          </Animatable.View>
        </ScrollView>
      );
    }
  }
}

export default connect(mapStateToProps)(About);
