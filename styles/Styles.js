import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 30,
      },
      header: {
        fontSize: 40,
        marginBottom: 20,
      },
      instruction: {
        fontSize: 30,
        marginBottom: 20,
      },
      scrollView: {
        flex: 1,
        width: '100%',
      },
      row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
      },
      buttonContainer: {
        marginHorizontal: 10,
        marginVertical: 10,
      },
      codeEditor: {
        width: '50%',
        height: 500,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        fontSize: 16,
        backgroundColor: '#282c34',
        color: 'white',
      },
});
