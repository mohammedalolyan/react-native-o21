import React from 'react'
import { View, StyleSheet } from 'react-native'
import Router from "./Router"
import { Toast } from '@components'
import { Global, Constants } from '@common'

class App extends React.Component {

  openToast = null

  render() {
    return (
      <View style={styles.container}>
        <Router />
        <Toast position={'bottom'} ref="toast" />
      </View>
    )
  }


  componentDidMount = () => {
    this.openToast = Global.EventEmitter.addListener(Constants.EventEmitterName.showToast, this.showToast)
  }

  showToast = (msg) => {
    this.refs.toast.showMessage(msg)
  }

  componentWillUnmount = () => {
    if (this.openToast) {
      this.openToast.remove()
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})


export default App