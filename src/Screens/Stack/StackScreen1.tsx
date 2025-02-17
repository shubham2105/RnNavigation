import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParamsList } from './StackNavigatorDemo';

export type StackScreen1NavigationProp = StackNavigationProp<StackParamsList, 'StackScreen1'>;

const StackScreen1 = () => {
    const navigation = useNavigation<StackScreen1NavigationProp>();
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>StackScreen1</Text>
       <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={()=> navigation.navigate('StackScreen2')} style={styles.button}>
                  <Text style={styles.buttonText}>Go To StackScreen2</Text>
              </TouchableOpacity>
        </View>
    </View>
  );
};

export default StackScreen1;

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

