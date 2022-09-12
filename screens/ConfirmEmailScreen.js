import React, {useState} from "react";
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import ScrollViewCommands from 'react-native/Libraries/Components/ScrollView/ScrollViewCommands';
import SocialSignInButtons from '../components/SocialSignInButtons';
import { useNavigation } from "@react-navigation/native";

const ConfirmEmailScreen = () => {
    const [code, setCode] = useState('');

    const navigation = useNavigation();

    const onConfirmPressed = () => {
        navigation.navigate('Home'); 
    };

    const onSignInPressed = () => {
        navigation.navigate('SignInScreen'); 
    };

    const onResendPressed = () => {
        console.warn('onResendP ressed');
    };

    return (
        <ScrollView showVerticalScrollIndicator={false}>

        <View style= {styles.root}>
            <Text style={styles.title}>Confirm your email</Text>

             <CustomInput
             placeholder= "Enter your confirmation code" 
             value={code} 
             setValue={setCode}/>
             
             <CustomButton
              text="Confirm" 
              onPress={onConfirmPressed} 
              />
              
             <CustomButton
              text="Resend code" 
              onPress={onResendPressed} 
              type="SECONDARY"
              />
            
              <CustomButton
              text="Back to sign in"
              onPress={onSignInPressed }
              bgColor='white'
              fgColor='#2D5791' 
              />

        </View>
        
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    root: {
        backgroundColor: 'white',
        alignItems: 'center',
        padding: 20,
        
    },
    

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FC6D3F',
        margin: 10,
    },

    text: {
        color: 'gray',
        marginVertical: 10,
  
    },

    link: {
        color: '#FDB075',
    },
});

export default ConfirmEmailScreen; 