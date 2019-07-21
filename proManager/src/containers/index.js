import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import Texts from '../components/texts';
import Slider from '../components/carousel';
import Logo from '../components/logo';
import Boolets from '../components/boolets';
import sign from '../../assets/images/sign-contrat.jpg';
import handball from '../../assets/images/handball.jpg';
import basketball from '../../assets/images/basketball.jpg';
import interview from '../../assets/images/interview.jpg';
import colors from '../common/colors';
import GetStartedbutton from '../components/button';
import SignIn from '../components/signInText';
import mesures from '../common/mesures';

const platform = Platform.select({
  ios: ' Sign in',
  android: ' Sign in'
});
console.log(Platform);
export default class Welcome extends React.Component {
  static navigationOptions = {
    headerStyle: {
      borderBottomColor: 'transparent',
      backgroundColor: 'transparent',
      height: Platform.OS === 'android' ? 0 : 43
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      entries: [
        { url: sign, desc: 'contract professionl' },
        { url: handball, desc: 'We support handball' },
        { url: basketball, desc: 'we support basketball' },
        { url: interview, desc: 'we suppport all sports' }
      ]
    };
  }

  onSnapToItem = (slideIndex) => {
    this.setState({ index: slideIndex });
  };

  onGetStarted = () => {
    const { navigation } = this.props;
    navigation.navigate('SignUp');
  };

  onSignIn = () => {
    const { navigation } = this.props;
    navigation.navigate('SignIn');
  };

  render() {
    const { index, entries } = this.state;
    return (
      <View style={styles.container}>
        <Logo styles={styles.logo} width={100} height={100} />
        <Texts isHome />
        <Slider entries={entries} onSnapToItem={this.onSnapToItem} />
        <Boolets index={index} arr={entries} />
        <View style={{ width: mesures.wrapperButtonWidth }}>
          <GetStartedbutton title="Sign up" onPress={this.onGetStarted} />
        </View>
        <SignIn onPress={this.onSignIn} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.containerBGColor,
    flexDirection: 'column',
    flex: 1
  },
  logo: {
    height: 100,
    marginTop: Platform.OS === 'android' ? 20 : -40
  }
});
