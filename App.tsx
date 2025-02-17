import { SafeAreaView, StyleSheet, Text} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>RnNavigationDemo</Text>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
  },
  headerText:{
    fontSize:24,
    fontWeight: 'bold',
  },
});
