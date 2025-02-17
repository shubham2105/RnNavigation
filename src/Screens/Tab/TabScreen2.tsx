import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const TabScreen2 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>TabScreen 2</Text>
    </View>
  );
};

export default TabScreen2;

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingVertical:60,
        marginBottom:10,
    },
    headerText:{
      fontSize:24,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    buttonContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems: 'center',
    },
    button:{
        backgroundColor:'blue',
        borderRadius:5,
    },
    buttonText:{
        fontSize:16,
        color:'white',
        fontWeight:'bold',
        padding:'2%',
        textAlign:'center',
    },
  });
