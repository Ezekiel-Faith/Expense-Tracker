import { StyleSheet, Text, View } from 'react-native';
import { Input } from './Input';

export default function ExpenseForm() {
  function amountChangeHandler() {}

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>

      <View style={styles.inputsRow}>
        <Input
          label='Amount'
          textInputConfig={{
            keyboardType: 'decimal-pad',
            onChangeText: amountChangeHandler,
          }}
          style={styles.rowInput}
        />
        <Input
          label='Date'
          textInputConfig={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            onchangeText: () => {},
          }}
          style={styles.rowInput}
        />
      </View>

      <Input
        label='Description'
        textInputConfig={{
          multiline: true,
          // autocapitalize: 'none',
          //autoCorrect: false //default is true,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    marginTop: 40,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 24,
    textAlign: 'center',
  },

  inputsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  rowInput: {
    flex: 1,
  },
});
