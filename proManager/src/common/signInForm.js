import React from 'react';
import { StyleSheet, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import mesures from './mesures';
import colors from './colors';

function SignInForm(forms) {
  this.forms = forms;
}
const styles = StyleSheet.create({
  signInStyles: {
    width: mesures.wrapperButtonWidth,
    height: mesures.buttonHeights,
    marginBottom: 20,
    marginTop: 20,
    padding: 5,
    borderBottomColor: '#ccc',
    borderTopColor: '#ccc',
    borderLeftColor: '#ccc',
    borderRightColor: '#ccc',
    borderRadius: 5,
    borderColor: '#ccc',
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    backgroundColor: colors.containerBGColor,
    shadowOpacity: 0.75,
    shadowRadius: 5,
    shadowColor: 'transparent',
    shadowOffset: { height: 0, width: 0 }
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  }
});
function signIn(onPress) {
  return new SignInForm({
    email: {
      elementType: 'Input',
      elementConfig: {
        placeholder: 'Email',
        inputContainerStyle: styles.signInStyles,
        containerStyle: styles.wrapper,
        isSecure: false,
        rightIcon: (
          <Icon
            onHideUnderlay
            name="envelope"
            size={24}
            color={colors.violetMedium}
          />
        )
      }
    },
    password: {
      elementType: 'Input',
      elementConfig: {
        placeholder: 'Password',
        inputContainerStyle: styles.signInStyles,
        containerStyle: styles.wrapper,
        test: 'eye-slash',
        isSecure: true,
        rightIcon: (
          <TouchableHighlight
            onPress={() => onPress('password')}
            underlayColor="transparent"
          >
            <Icon
              backgroundColor="transparent"
              name="eye-slash"
              size={24}
              color={colors.violetMedium}
            />
          </TouchableHighlight>
        )
      }
    }
  });
}

export default signIn;
