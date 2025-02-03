import React, {useState} from 'react';
import {View, FlatList, StyleSheet, TouchableOpacity, StatusBar, Text} from 'react-native';
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

const COLORS = ['red', 'blue', 'yellow', 'orange', 'brown', 'pink', 'green', 'lightgreen', 'darkgreen', 'violet', 'darkviolet', 'purple', '#229068', '#65637c', '#0f096e', '#DCEDC8', '#F0F4C3', '#d11f5f', '#8a2f50', '#531a2f', '#FFCCBC', '#c48f5f', '#31ee0f', '#0fee9d'];

const Item = ({List, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <Text style={[styles.List, {color: textColor}]}>{List}</Text>
  </TouchableOpacity>
);

const App = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({item, index}) => {
    const backgroundColor = COLORS[index % COLORS.length];
    const textColor = '#000000';

    return (
      <Item
        List={item.List}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={textColor}
      />
    );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={selectedId}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 24,
  },
});

export default App;

