import { SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>RnNavigationDemo</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingVertical:50
  },
  headerText:{
    fontSize:24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
