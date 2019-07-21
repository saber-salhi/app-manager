import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import Input from '../common/formPattern';
import signInForm from '../common/signInForm';
import Logo from '../components/logo';
import Button from '../components/button';
import colors from '../common/colors';

export default class SignIn extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#FFFFFF',
      borderBottomColor: 'transparent'
    },

    headerRight: <Logo styles={{ marginTop: 5 }} width={50} height={50} />
  };

  constructor(props) {
    super(props);
    this.state = {
      signInState: signInForm(this.onShowPassword).forms,
      loading: false
    };
  }

  onShowPassword = (key) => {
    const { signInState } = this.state;
    const spredsignInState = { ...signInState };
    const enter = {
      ...spredsignInState[key]
    };

    enter.elementConfig.isSecure = !enter.elementConfig.isSecure;

    this.setState({ signInState: spredsignInState });
  };

  onSignIn = () => {
    this.setState({ loading: true });
  };

  renderContent = () => {
    const { signInState } = this.state;
    const formArr = [];
    Object.keys(signInState).forEach((key) => {
      formArr.push({
        id: key,
        element: signInState[key]
      });
    });

    return formArr;
  };

  render() {
    const { loading } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Logo width={100} height={100} />

          {this.renderContent().map(item => (
            <Input
              key={item.id}
              elementType={item.element.elementType}
              elementConfig={item.element.elementConfig}
              isSecure={item.element.elementConfig.isSecure}
            />
          ))}
          <View style={{ width: '85%' }}>
            <Button loading={loading} onPress={this.onSignIn} title="Sign in" />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.containerBGColor,
    flex: 1,
    display: 'flex',
    alignContent: 'center',
    flexDirection: 'row',
    alignItems: 'center'
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    flex: 1
  },

  wrapperButton: {
    flex: 1
  }
});
