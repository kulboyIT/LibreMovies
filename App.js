import React, { Component } from 'react'
import {
  WebView
} from 'react-native'

class App extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (navigator) {
    // console.log(this.refs.WEBVIEW_REF)
    if (navigator.url.includes('https://123movies.fun')) {
      console.log('movies url parin')
      console.log(navigator)
      return true
    } else {
      console.log('ibang url na ')
      console.log(navigator)
      this.refs.WEBVIEW_REF.stopLoading()
      return false
    }
  }

  render () {
    return ( 
      <WebView 
        ref='WEBVIEW_REF'
        onNavigationStateChange={this.handleChange}
        source={{uri: 'https://123movies.fun'}}/>
    )
  }
}

export default App
