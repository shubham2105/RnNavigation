import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParamsList } from './StackNavigatorDemo';
import { useNavigation } from '@react-navigation/native';

export type StackScreen2NavigationProp = StackNavigationProp<StackParamsList, 'StackScreen2'>

const StacksScreen2 = () => {
    const navigation = useNavigation<StackScreen2NavigationProp>();
  return (
    <View style={styles.container}>
         <Text style={styles.headerText}>StackScreen2</Text>
         <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={()=> navigation.navigate('StackScreen1')} style={styles.button}>
                <Text style={styles.buttonText}>Go Back to StackScreen1</Text>
             </TouchableOpacity>
        </View>
    </View>
  );
};

export default StacksScreen2;

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
