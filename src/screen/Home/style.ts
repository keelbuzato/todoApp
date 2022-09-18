import { StyleSheet } from 'react-native';
import { getResponsiveSize } from '../../utils/resposiveSize';
export const styles = StyleSheet.create({
  containerAll: {
    backgroundColor: '#0D0D0D',
  },
  container: {
    height: '100%',
    backgroundColor: '#1A1A1A',
  },
  imgLogo: {
    width: getResponsiveSize(110),
    height: getResponsiveSize(32),
  },
  imgContainer: {
    height: getResponsiveSize(173),
    justifyContent: 'center',
    alignItems: 'center',
  },

  input: {
    width: getResponsiveSize(271),
    height: 54,
    color: '#FFF',
    backgroundColor: '#262626',
    alignItems: 'center',
    justifyContent: 'center',
    padding: getResponsiveSize(16),
    borderRadius: 5,
    fontSize: 16,
  },
  areaSafe: {
    backgroundColor: '#0D0D0D',
  },
  buttonAdd: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 18,
    width: getResponsiveSize(54),
    height: getResponsiveSize(58),
    backgroundColor: '#1E6F9F',
    borderRadius: 6,
    marginLeft: 5,
  },
  containerInputButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: getResponsiveSize(-26),
  },
  containerTasks: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    height: '100%',
    padding: 24,
  },
  containesInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: '100%',
    marginTop: 10,
  },
  infoCreatedTasks: {
    flexDirection: 'row',
    alignItems: 'center',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 14,
    color: '#4EA8DE',
    fontFamily: 'Inter-Bold',
  },
  infoDoneTasks: {
    color: '#8284FA',
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 17,
    fontFamily: 'Inter-Bold',
  },
  rowInfo: {
    width: 350,
    height: 1,
    backgroundColor: '#808080',
    marginTop: 20,
    marginBottom: 20,
  },
  containerCreated: {
    flexDirection: 'row',
  },
  counter: {
    width: 25,
    height: 19,
    marginLeft: 8,
    border: '1px solid transparent',
    borderRadius: 900,
    backgroundColor: '#333333',
    alignItems: 'center',
  },
  textCounter: {
    color: '#D9D9D9',
  },
  textNoHaveTasks: {
    color: '#808080',
    fontFamily: 'Inter-Bold',
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 20,
  },
  containerNoHaveTasks: {
    width: 340,
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textNoHaveTaskss: {
    color: '#808080',
    fontFamily: 'Inter-Regular',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
  },
  imgClipBoard: {
    marginBottom: 16,
  },
});
