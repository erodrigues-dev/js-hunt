import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  item: {
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8,
  },
  description: {
    color: '#666',
    fontSize: 14,
  },
  button: {
    marginTop: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#da552f',
    height: 42,
    borderRadius: 5,
    backgroundColor: 'transparent',
  },
  buttonText: {
    color: '#da552f',
  },
});

export default styles;
