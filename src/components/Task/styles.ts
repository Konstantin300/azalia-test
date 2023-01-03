import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 8,
    paddingLeft: 13,
    width: '100%',
    marginTop: 16,
    fontSize: 24,
    color: '#222F3E',
    fontWeight: '400',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  elevation: {
    elevation: 5,
    shadowColor: '#52006A',
  },
  taskTitle: {
    fontSize: 24,
    fontWeight: '400',
    color: '#222F3E',
    marginLeft: 16,
  },
  taskDone: {
    fontSize: 24,
    fontWeight: '400',
    color: '#222F3E80',
    textDecorationLine: 'line-through',
    marginLeft: 16,
  },
});

export default styles;
