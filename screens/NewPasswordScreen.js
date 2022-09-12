import React, {useState} from "react";
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import ScrollViewCommands from 'react-native/Libraries/Components/ScrollView/ScrollViewCommands';
import SocialSignInButtons from '../components/SocialSignInButtons';
import { useNavigation } from "@react-navigation/native";


const NewPasswordScreen = () => {
    const [code, setCode] = useState('');
    const [NewPassword, setNewPassword] = useState('');
    
    const navigation =useNavigation();
    

    const onSubmitPressed = () => {
        navigation.navigate('Home');
    };

    const onSignInPressed = () => {
        navigation.navigate('SignInScreen');
    };

    return (
        <ScrollView showVerticalScrollIndicator={false}>

        <View style= {styles.root}>
            <Text style={styles.title}>Reset your password</Text>

            <CustomInput 
            placeholder= "Code"
            value={code} 
            setValue={setCode}
             />

            <CustomInput 
            placeholder= "Enter your new password" 
            value={NewPassword} 
            setValue={setNewPassword}
            />

            <CustomButton
            text="Submit" 
            onPress={onSubmitPressed} 
            />
            
            <CustomButton
            text="Back to sign in"
            onPress={onSignInPressed }
            type="TERTIARY" 
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

export default NewPasswordScreen; 