import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      header: {
        fontSize: 24,
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
        width: '100%',
        height: 200,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        fontSize: 16,
      },
});
