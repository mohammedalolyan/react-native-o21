import React, { Component } from "react";
import { Search } from "@containers";
import { SearchBar } from "@components";
import { Global, Constants } from '@common'

class SearchScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: <SearchBar onChangeText={(text) => Global.EventEmitter.emit(Constants.EventEmitterName.onSearch, text)} />
  });
  render() {
    const { navigation } = this.props
    return <Search
      navigation={navigation}
      showDetail={(product) => navigation.navigate(Constants.Screen.ProductDetail, { product })} />;
  }
}

export default SearchScreen;
