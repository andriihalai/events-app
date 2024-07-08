import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {theme} from '../../theme/theme';

const eventContainer: ViewStyle = {
  borderWidth: 0.3,
  borderRadius: 10,
  borderColor: theme.colors.mediumGray,
  margin: 10,
  padding: 15,
  width: 350,
  alignSelf: 'center',
  justifyContent: 'space-around',
  backgroundColor: theme.colors.white,
  shadowColor: theme.colors.softGray,
  shadowOffset: {width: 3, height: 3},
  shadowOpacity: 0.8,
  shadowRadius: 2,
  elevation: 5,
};

const btn: ViewStyle = {
  backgroundColor: theme.colors.cherryRed,
  padding: 8,
  paddingRight: 12,
  paddingLeft: 12,
  marginTop: 10,
  marginLeft: 8,
  borderRadius: 10,
};

const btnText: TextStyle = {
  color: theme.colors.white,
};

const postTitle: TextStyle = {
  fontWeight: 'bold',
};

const image: ImageStyle = {
  width: 100,
  height: 100,
  borderRadius: 10,
};

const eventInfoSection: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'space-around',
};

const eventDetails: ViewStyle = {
  padding: 10,
  paddingLeft: 0,
  width: '60%',
  justifyContent: 'space-evenly',
};

const btnsSection: ViewStyle = {
  alignSelf: 'flex-end',
  flexDirection: 'row',
  marginRight: 10,
};

export default StyleSheet.create({
  eventContainer,
  postTitle,
  image,
  btn,
  btnText,
  eventInfoSection,
  eventDetails,
  btnsSection,
});
