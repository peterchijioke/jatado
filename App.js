import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Home from './screen/Home';

const App = () => {
  return (
    <SafeAreaView style={styles.main}>
      <Home />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  main: {flex: 1},
});
