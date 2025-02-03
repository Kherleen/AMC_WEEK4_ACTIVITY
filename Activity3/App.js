import React, {useState} from 'react';
import {View, FlatList, StyleSheet, TouchableOpacity, StatusBar, Text} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const DATA = [
  { id: '1', title: 'Morning Routine: Waking up' },
  { id: '2', title: 'Morning Routine: Workout' },
  { id: '3', title: 'Morning Routine: Watching Drama' },
  { id: '4', title: 'Morning Routine: Self Time' },
  { id: '5', title: 'Morning Routine: Sleep' },
  { id: '6', title: 'Morning Routine: Eat' },
  { id: '7', title: 'Morning Routine: Arrange clothes' },
  { id: '8', title: 'Morning Routine: Play With Cat' },
  { id: '9', title: 'Morning Routine: Study' },
  { id: '10', title: 'Afternoon Routine: Eat' },
  { id: '11', title: 'Afternoon Routine: Sleep' },
  { id: '12', title: 'Afternoon Routine: Self study' },
  { id: '13', title: 'Afternoon Routine: Dance' },
  { id: '14', title: 'Afternoon Routine: Write' },
  { id: '15', title: 'Afternoon Routine: Watch' },
  { id: '16', title: 'Afternoon Routine: Play Games' },
  { id: '17', title: 'Afternoon Routine: Sing' },
  { id: '18', title: 'Afternoon Routine: Play guitar' },
  { id: '19', title: 'Afternoon Routine: Sleep' },
  { id: '20', title: 'Evening Routine: Eat' },
  { id: '21', title: 'Evening Routine: Play' },
  { id: '22', title: 'Evening Routine: Watch Drama' },
  { id: '23', title: 'Evening Routine: Pray' },
  { id: '24', title: 'Evening Routine: Sleep' },
];

const COLORS = ['#f0960f', '#37474F', '#42d3b8', 'yellow', '#2a3f77', '#FFCDD2', '#F8BBD0', '#E1BEE7', '#D1C4E9', '#C5CAE9', '#BBDEFB', '#B3E5FC', '#B2EBF2', '#B2DFDB', '#C8E6C9', '#DCEDC8', '#F0F4C3', '#FFF9C4', '#FFECB3', '#FFE0B2', '#FFCCBC', '#D7CCC8', '#CFD8DC', '#B0BEC5'];

const Item = ({title, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <Text style={[styles.title, {color: textColor}]}>{title}</Text>
  </TouchableOpacity>
);

const App = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({item, index}) => {
    const backgroundColor = COLORS[index % COLORS.length];
    const textColor = '#000000';

    return (
      <Item
        title={item.title}
        onPress={() => setSelectedId(item.title)}
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
