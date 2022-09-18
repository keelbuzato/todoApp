import { StyleSheet } from 'react-native';
import { getResponsiveSize } from '../../utils/resposiveSize';

export const styles = StyleSheet.create({
  containerTasks: {
    maxWidth: '100%',
    minWidth: '100%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 8,
    backgroundColor: '#262626',
    padding: 16,
    marginBottom: 10,
  },

  areaToCheack: {
    width: getResponsiveSize(267),
  },
  containeTrash: {
    width: getResponsiveSize(32),
    justifyContent: 'center',
    alignItems: 'center',
  },
  tasksText: {
    color: '#F2F2F2',
    fontSize: Number(getResponsiveSize(14)),
    lineHeight: Number(getResponsiveSize(20)),
    fontFamily: 'Inter-Regular',
  },
});
