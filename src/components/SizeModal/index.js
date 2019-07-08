import React, { Component } from "react";
import {
  View,
  Text,
  Modal,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Picker
} from "react-native";
import styles from "./style";

class SizeModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalVisible: false,
      selectedValue: (props.options && props.options.length > 0) ? props.options[0] : -1
    }
  }



  state = {
    modalVisible: false,
    value: ""
  };

  show = () => {
    this.setState({ modalVisible: true });
  };

  hide = () => {
    this.setState({ modalVisible: false });
  };

  done = () => {
    const { selectedValue } = this.state
    if (selectedValue !== -1) {
      this.props.onSelect(selectedValue)
    }
    this.hide()
  }

  render() {
    let { options } = this.props
    const { selectedValue } = this.state
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={this.state.modalVisible}
        onRequestClose={this.hide}
      >
        <TouchableWithoutFeedback onPress={this.hide}>
          <View style={styles.container}>
            <View style={styles.content}>
              <View style={styles.row}>
                <Text style={styles.text}>SIZE</Text>
                <TouchableOpacity onPress={() => this.done()}>
                  <Text style={styles.text}>DONE</Text>
                </TouchableOpacity>
              </View>
              <Picker
                selectedValue={selectedValue}
                style={styles.picker}
                onValueChange={(selectedValue, itemIndex) => this.setState({ selectedValue })}>
                {
                  (options && options.length > 0) ?
                    options.map((item, index) => (
                      <Picker.Item key={index} label={item.toUpperCase()} value={item} />
                    ))
                    :
                    <Picker.Item label={'NO SIZE'} value={-1} />
                }
              </Picker>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  }
}
export default SizeModal;
