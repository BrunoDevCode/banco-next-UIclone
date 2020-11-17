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
    paddingVertical: 8,
    paddingHorizontal: 16,
    width: '100%',
    marginTop: 40,
    flexDirection: 'row',
    position: 'relative',
    justifyContent: 'space-between'
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
  },

  help: {
    fontSize: 18,
    textTransform: 'uppercase',
  },

  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    padding: 16,
    paddingRight: 24,
    justifyContent: 'space-between',
    borderBottomWidth: .8,
  },

  imageContainer: {
    width: 60,
    height: 60,
    alignSelf: 'center',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#000',
    overflow: 'hidden',
  },

  image: {
    width: '100%',
    height: '100%',
  },

  profileName: {
    fontSize: 24,
    fontWeight: 'normal',
    marginLeft: 16,
  },

  balanceContainer: {
    padding: 16,
    borderBottomWidth: .8,
  },

  balanceText: {
    color: '#444',
    fontSize: 16,
    textTransform: 'uppercase',
  },

  balance: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  balanceValue: {
    fontWeight: 'bold',
    fontSize: 32,
  },

  pathPagesContainer: {
    paddingVertical: 16,
    paddingHorizontal: 8,
    marginTop: 16,
    width: '100%',
  },


});

export default styles;