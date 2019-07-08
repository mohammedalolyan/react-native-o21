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

class ColorModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedValue: (props.options && props.options.length > 0 ? props.options[0] : -1),
      modalVisible: false
    }
  }

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
    let { options } = this.props;
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
                <Text style={styles.text}>COLOR</Text>
                <TouchableOpacity onPress={() => this.done()}>
                  <Text style={styles.text}>Done</Text>
                </TouchableOpacity>
              </View>
              <Picker
                selectedValue={selectedValue}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) => this.setState({ selectedValue: itemValue })}>
                {
                  (options && options.length) > 0 ?
                    options.map((e, index) => {
                      return <Picker.Item key={index} label={e.toUpperCase()} value={e} />
                    }) :
                    <Picker.Item label={'NO COLOR'} value={-1} />
                }
              </Picker>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  }
}
export default ColorModal;
