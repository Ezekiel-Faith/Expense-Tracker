import { View } from 'react-native';
import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';

export default function ExpensesOutput({ expenses, expensesPeriod }) {
  const DUMMY_EXPENSES = [
    {
      id: 'e1',
      description: 'A pair of shoes',
      amount: 59.99,
      date: new Date('2024-12-19'),
    },
    {
      id: 'e2',
      description: 'A pair of trousers',
      amount: 89.99,
      date: new Date('2025-01-05'),
    },
    {
      id: 'e3',
      description: 'Some bananas',
      amount: 5.99,
      date: new Date('2024-12-01'),
    },
    {
      id: 'e4',
      description: 'Books',
      amount: 14.99,
      date: new Date('2025-02-19'),
    },
    {
      id: 'e4',
      description: 'Another book',
      amount: 18.59,
      date: new Date('2025-02-18'),
    },
  ];

  return (
    <View>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList />
    </View>
  );
}
