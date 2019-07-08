import React, { Component } from "react";
import { SafeAreaView, ScrollView, View, Text, FlatList } from "react-native";
import { connect } from "react-redux";
import { ActionCreators } from "@actions";
import { bindActionCreators } from "redux";
import { ItemLoading, CategoriesItems } from "@components";
import styles from "./style";
import * as ActionTypes from "@actions/ActionTypes";

class Home extends Component {
  render() {
    let { categories, type } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        {
          type == ActionTypes.FETCH_CATEGORIES_PENDING ?
            <ItemLoading />
            :
            <FlatList
              keyExtractor={(item, index) => `${index}`}
              data={categories}
              renderItem={({ item }) => (
                <CategoriesItems
                  item={item}
                  onPress={i => this.onPressCategory(item)}
                />
              )}
            />
        }
      </SafeAreaView>
    );
  }
  onPressCategory = item => {
    this.props.setCategory(item);
    this.props.navigation.navigate("ProductsByCategory");
  };

  componentWillMount() {
    this.props.getCategories();
  }
}

Home.defaultProps = {
  categories: [],
};

function mapStateToProps({ categoiresReducer }) {
  return {
    categories: categoiresReducer.categories,
    type: categoiresReducer.type
  };
}

function mapDispateToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispateToProps
)(Home);
