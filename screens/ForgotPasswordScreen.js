import React, {useState} from "react";
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import ScrollViewCommands from 'react-native/Libraries/Components/ScrollView/ScrollViewCommands';
import SocialSignInButtons from '../components/SocialSignInButtons';
import { useNavigation } from "@react-navigation/native";

const ForgotPasswordScreen = () => {
    const [username, setUsername] = useState('');

    const navigation = useNavigation();

    const onSendPressed = () => {
        navigation.navigate('NewPasswordScreen');
    };

    const onSignInPressed = () => {
        navigation.navigate('SignInScreen');
    };


    return (
        <ScrollView showVerticalScrollIndicator={false}>

        <View style= {styles.root}>
            <Text style={styles.title}>Reset your password</Text>

             <CustomInput
             placeholder= "Username" 
             value={username} 
             setValue={setUsername}/>

              <CustomButton
              text="Send" 
              onPress={onSendPressed} 
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
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'white',

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

export default ForgotPasswordScreen; 