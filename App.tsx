import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './src/RootNavigator';

const App = () => {
  return (
     <NavigationContainer>
       <RootNavigator/>
     </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingVertical:50,
    marginBottom:10,
  },
  headerText:{
    fontSize:24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
