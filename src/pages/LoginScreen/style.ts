import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#23FE60',
  },

  header: {
    borderStyle: 'solid',
    borderBottomWidth: 0.8,
    borderColor: '#424747',
    padding: 8,
    width: '100%',
    marginTop: 40,
    flexDirection: 'row',
    position: 'relative',
  },

  headerLogOut: {
    padding: 4,
  },

  headerText: {
    flex: 1,
    textAlign: 'center',
    alignItems: 'center',
    fontSize: 22,
    paddingRight: 24,
    paddingTop: 4,
    fontWeight: "bold",
  },

  imageContainer: {
    width: 180,
    height: 180,
    alignSelf: 'center',
  },

  details: {
    marginTop: 32,
  },

  image: {
    width: '100%',
    height: '100%',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 100
  },

  describe: {
    marginTop: 8,
    padding: 8,
  },

  detailsText: {
    textAlign: 'center',
    fontSize: 22,
    textTransform: 'uppercase',
  },

  detailsAgencyText: {
    textAlign: 'center',
    color: '#999',
    fontSize: 16
  },

  inputContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 16,
    width: '100%',
    padding: 8
  },

  passInput: {
    width: '85%',
    fontSize: 20,
    marginRight: 32,
  },

  passEyeContainer: {
    width: '100%',
    marginRight: 24,
    paddingRight: 16,
    alignSelf: "center",
  },

  passEye: {
    // alignSelf: 'center',
    // textAlign: 'center',
  },

  forgotPassContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    alignSelf: 'flex-end',
    marginRight: 16
  },

  forgotPassArrow: {
    marginRight: 8,
  },

  forgotPassText: {
    fontSize: 18,
    alignSelf: 'flex-end'
  },

  loginButtonContainer: {
    marginTop: 56,
    marginLeft: 16,
    marginRight: 16,
    backgroundColor: '#202421',
    alignSelf: 'center',
    width: '90%',
    height: 64,
    borderRadius: 16,
    justifyContent: 'center',
  },

  loginButton: {
    fontSize: 24,
    color: '#F0F0F5',
    textAlign: 'center',
    textTransform: 'uppercase',
  },

  shortcutsContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: 100,
    marginLeft: 4,
    marginRight: 4,
  },

  shortcut: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    width: '25%',
    marginLeft: 4,
    marginRight: 4,
  },

  shortcutSvg: {
    alignSelf: 'center',
  },

  shortcutsText: {
    textAlign: 'center',
  },

});

export default styles;
