import React from 'react';
import {View, FlatList, StyleSheet, Text, StatusBar} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const DATA = [

  {
    List: 'Morning Routine:',
    title: 'First Item',
  },
  {
    List: '1.Cleaning,',
  },
  {
    List: '2.Reading ',
    title: 'First Item',
  },{
    List: '3.Workout ',
    title: 'First Item',
  },{
    List: '4.Watching Drama',
    title: 'First Item',
  },{
    List: '5. Self Time',
    title: 'First Item',
  },{
    List: '6.Sleep ',
    title: 'First Item',
  },{
    List: '7.Eat ',
    title: 'First Item',
  },{
    List: '8. Arrange clothes',
    title: 'First Item',
  },
  {
    List: '9.Play With Cat ',
    title: 'First Item',
  },
  {
    List: '10. Study ',
    title: 'First Item',
  },
  {
    List: 'Afternoon Routine: ',
    title: 'Second Item',
  },
  {
    
    List: '1. Eat ',
    title: 'Second Item',
  },
  {
    List: '2.Sleep',
    title: 'First Item',
  },
  {
    List: '3. Self study ',
    title: 'First Item',
  },
  {
    List: '4. Dance',
    title: 'First Item',
  },
  {
    List: '5. Write',
    title: 'First Item',
  },
  {
    List: '6. Watch',
    title: 'First Item',
  },
  {
    List: '7. PlayGames ',
    title: 'First Item',
  },
  {
    List: '8. Sing ',
    title: 'First Item',
  },

  {
    
    List: '9. Play guitar',
    title: 'Second Item',
  },
  {
    List: '10. Sleep ',
    title: 'Third Item',
  },
  {
    List: 'Evening Routine',
    title: 'First Item',
  },
  {
    List: '1.Eat',
    title: 'First Item',
  },{
    List: '2.Play ',
    title: 'First Item',
  },{
    List: '3.WacthDrama ',
    title: 'First Item',
  },{
    List: '4.Pray',
    title: 'First Item',
  },{
    List: '5.Sleep ',
    title: 'First Item',
  },
];

type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.List} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;