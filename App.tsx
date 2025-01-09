import {Button, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Basics from './scr/components/Basics';
import TextInputs from './scr/components/TextInputs';

const App = () => {
  
  return (
    <View style={styles.container}>
    <ScrollView contentContainerStyle={styles.scrollViewContainer}> 
    <Basics/>
    <Basics/>
    <Basics/>
    <TextInputs/>
    </ScrollView> 
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
   
  },
  scrollViewContainer:{
    padding:20
  }
  
});
