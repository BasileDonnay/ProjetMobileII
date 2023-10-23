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
    passwordInputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      position: 'relative', // Added for proper positioning of the eye icon
    },
    passwordInput: {
      flex: 1,
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    inputContainer: {
      width: 300,
      alignItems: 'flex-start', // Alignez les éléments à gauche
    },
    inputLabel: {
      marginLeft: 5, // Ajoutez une marge à gauche pour déplacer le inputContainer vers la droite
      paddingTop: 10,
      color: 'white',
      fontSize: 17,
      marginBottom: 5,
    },
    input: {
      backgroundColor: '#fff',
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 15,
      marginTop: 5,
      borderWidth: 1,
      borderColor: '#ccc',
      width: '100%',
    },
    button: {
      backgroundColor: '#248ad9',
      width: '100%',
      padding: 15,
      borderRadius: 20,
      alignItems: 'center',
      marginTop: 20,
    },
    buttonOutline: {
      backgroundColor: '#fff',
      borderColor: '#248ad9',
      borderWidth: 2,
      borderRadius: 20,
      marginTop: 10,
    },
    buttonText: {
      color: 'white',
      fontWeight: '700',
      fontSize: 16,
    },
    buttonOutlineText: {
      color: '#248ad9',
      fontWeight: '700',
      fontSize: 16,
    },
    errorText: {
      color: 'red',
      marginTop: 10,
    },
});
