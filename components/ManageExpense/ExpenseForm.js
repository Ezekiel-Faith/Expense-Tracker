import { View } from 'react-native';
import { Input } from './Input';

export default function ExpenseForm() {
  function amountChangeHandler() {}

  return (
    <View>
      <Input
        label='Amount'
        textInputConfig={{
          keyboardType: 'decimal-pad',
          onChangeText: amountChangeHandler,
        }}
      />
      <Input
        label='Date'
        textInputConfig={{
          placeholder: 'YYYY-MM-DD',
          maxLength: 10,
          onchangeText: () => {},
        }}
      />
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
