import React, { Component, Children } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

import ThemeProvider from './components/ThemeProvider';
import themeLight from './themes/light';
import themeDark from './themes/dark';
import Button from './components/Button';

export default class ThemeApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themeLight,
    };
  }
  handlePress = () => {
    this.setState({
      theme: this.state.theme === themeLight ? themeDark : themeLight,
    });
  };
  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <View style={styles.container}>
          <View
            style={{
              flexDirection: 'row',
            }}
          >
            <Button>left</Button>
            <Button
              style={{
                flex: 1,
                marginLeft: 0,
                marginRight: 0,
              }}
              textStyle={{
                textAlign: 'center',
              }}
            >
              center
            </Button>
            <Button>right</Button>
          </View>

          <Button onPress={this.handlePress}>Change theme</Button>

          <Text style={styles.instructions}>Themes in React Native.</Text>
        </View>
      </ThemeProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    margin: 20,
  },
});
