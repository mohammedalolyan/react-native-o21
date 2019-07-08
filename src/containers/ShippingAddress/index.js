import React from "react";
import {
  View,
  SafeAreaView,
} from "react-native";
import styles from "./style";
import { Input, RegionsModal, CountriesModal, Button } from '@components'

import { connect } from "react-redux";
import { ActionCreators } from "@actions";
import { bindActionCreators } from "redux";
import * as ActionTypes from "@actions/ActionTypes";
import countries from '@dummyData/countries'

class ShippingAddress extends React.Component {
  constructor(props) {
    super(props);
    if (props.customerInfo == null) {
      return
    }
    let myAddress = props.shippingAddress;
    if (myAddress) {
      this.state = {
        email: props.customerInfo.email,
        firstname: myAddress.first_name,
        lastname: myAddress.last_name,
        telephone: myAddress.phone,
        street: myAddress.address_1,
        country_id: myAddress.country,
        region_code: myAddress.state,
        city: myAddress.city,
        postcode: myAddress.postcode,
        regions: this.getRegionsByCountry(myAddress.country),
        region: myAddress.region
      }
    } else {
      this.state = {
        email: props.customerInfo.email,
        firstname: props.customerInfo.first_name,
        lastname: props.customerInfo.last_name,
        telephone: '',
        street: '',
        country_id: '',
        region_code: '',
        city: '',
        postcode: '',
        regions: [],
        region: ''
      }
    }

  }

  getRegionsByCountry = (country_id) => {
    var regions = []
    if (country_id != undefined) {
      countries.forEach((item) => {
        if (item.countryShortCode == country_id) {
          regions = item.regions
        }
      })
    }

    return regions
  }

  render() {
    let { type } = this.props;
    const { regions, region_code, country_id,
      email, firstname, lastname, telephone, street,
      city, postcode
    } = this.state
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <Input placeholder={"First name"} value={firstname} onChangeText={(firstname) => this.setState({ firstname })} />
          <Input placeholder={"Last name"} value={lastname} onChangeText={(lastname) => this.setState({ lastname })} />
          <Input placeholder={"Email"} value={email} onChangeText={(email) => this.setState({ email })} />
          <Input placeholder={"Telephone"} value={telephone} onChangeText={(telephone) => this.setState({ telephone })} />
          <Input placeholder={"Street"} value={street} onChangeText={(street) => this.setState({ street })} />
          <CountriesModal onSelectCountry={this.onSelectCountry} selectCountry={country_id} />
          <RegionsModal regions={regions} selectRegion={region_code} onSelectRegion={this.onSelectRegion} />
          <Input placeholder={"City"} value={city} onChangeText={(city) => this.setState({ city })} />
          <Input placeholder={"Postcode"} value={postcode} onChangeText={(postcode) => this.setState({ postcode })} />
        </View>
        <Button style={styles.btnSubmit}
          loading={type == ActionTypes.GET_SHIPPING_METHODS_PENDING}
          title="Submit" onPress={() => this.onSubmit()} />
      </SafeAreaView>
    );
  }

  onSelectCountry = (item) => {
    this.setState({ country_id: item.countryShortCode, regions: item.regions })
  }

  onSelectRegion = (item) => {
    this.setState({ region: item.name, region_code: item.shortCode })
  }

  onSubmit = () => {
    let { firstname, lastname, email, telephone, street, country_id, region_code, region, city, postcode } = this.state
    if (firstname == "" || lastname == "" || email == "" || telephone == "" || street == "" || country_id == "" || region_code == "" || city == "" || postcode == "") {
      return alert('Please input all fields')
    }
    const address = {
      first_name: firstname,
      last_name: lastname,
      phone: telephone,
      email,
      address_1: street,
      state: region_code,
      country: country_id,
      city,
      postcode
    }

    this.props.setShippingAddress(address)
    this.props.getShippingMethods(country_id)
  }

  componentWillReceiveProps(props) {
    if (props.type == ActionTypes.GET_SHIPPING_METHODS_FAIL) {
      alert(props.message)
    }
    if (props.type == ActionTypes.GET_SHIPPING_METHODS_SUCCESS) {
      this.props.showShippingMethod()
    }
  }
}

ShippingAddress.defaultProps = {
  customerInfo: {}
};

function mapStateToProps({ cartsReducer, usersReducer }) {
  return {
    type: cartsReducer.type,
    shippingAddress: cartsReducer.shippingAddress,
    customerInfo: usersReducer.customerInfo
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShippingAddress);
