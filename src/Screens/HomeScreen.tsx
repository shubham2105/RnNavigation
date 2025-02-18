import {StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../RootNavigator';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>

const HomeScreen = () => {
    const navigation = useNavigation<HomeScreenNavigationProp>();
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>HomeScreen</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={()=> navigation.navigate('StackNavigationDemo')} style={styles.button}>
            <Text style={styles.buttonText}>Stack Navigation Demo</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('TabNavigatorDemo')} style={styles.button}>
            <Text style={styles.buttonText}>Tab Navigation Demo</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('DrawerNavigationDemo')} style={styles.button}>
            <Text style={styles.buttonText}>Drawer Navigation Demo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

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
        flexDirection:'column',
        justifyContent:'center',
        alignItems: 'center',
    },
    button:{
        backgroundColor:'blue',
        borderRadius:5,
        marginBottom:10,
    },
    buttonText:{
        fontSize:16,
        color:'white',
        fontWeight:'bold',
        padding:'2%',
        textAlign:'center',
    },
  });
