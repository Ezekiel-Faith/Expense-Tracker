import { StyleSheet, Text, View } from 'react-native';
import { Input } from './Input';
import { useState } from 'react';
import Button from '../UI/Button';
import { getFormattedDate } from '../../util/date';

export default function ExpenseForm({
  submitButtonLabel,
  onCancel,
  onSubmit,
  defaultValues,
}) {
  const [inputValue, setInputValues] = useState({
    amount: defaultValues ? defaultValues.amount.toString() : '',
    date: defaultValues ? getFormattedDate(defaultValues.date) : '',
    description: defaultValues ? defaultValues.description : '',
  });

  function inputChangedHandler(inputIdentifier, enteredAmount) {
    setInputValues((currentValue) => {
      return {
        ...currentValue,
        [inputIdentifier]: enteredAmount,
      };
    });
  }

  function submitHandler() {
    const expenseData = {
      amount: +inputValue.amount,
      date: new Date(inputValue.date),
      description: inputValue.description,
    };

    onSubmit(expenseData);
  }

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>

      <View style={styles.inputsRow}>
        <Input
          label='Amount'
          textInputConfig={{
            keyboardType: 'decimal-pad',
            onChangeText: inputChangedHandler.bind(this, 'amount'),
            value: inputValue.amount,
          }}
          style={styles.rowInput}
        />
        <Input
          label='Date'
          textInputConfig={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            onChangeText: inputChangedHandler.bind(this, 'date'),
            value: inputValue.date,
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
          onChangeText: inputChangedHandler.bind(this, 'description'),
          value: inputValue.description,
        }}
      />

      <View style={styles.buttonsContainer}>
        <Button style={styles.buttons} mode='flat' onPress={onCancel}>
          Cancel
        </Button>

        <Button style={styles.buttons} onPress={submitHandler}>
          {submitButtonLabel}
        </Button>
      </View>
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

  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttons: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
