import React, {useState} from "react";
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../components/CustomInput';
 import CustomButton from '../components/CustomButton';
 import ScrollViewCommands from 'react-native/Libraries/Components/ScrollView/ScrollViewCommands';
 import SocialSignInButtons from '../components/SocialSignInButtons';
import { useNavigation } from "@react-navigation/core";

const SignUpScreen = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    const navigation = useNavigation();
 
    const onRegisterPressed = () => {
        navigation.navigate('ConfirmEmailScreen'); 
    };

    const onSignInPressed = () => {
        navigation.navigate('SignInScreen');
    }; 
    
     const OnTermsOfUsePressed = () => {
         console.warn('OnTermsOfUsePressed');
     };

    const OnPrivacyPressed = () => {
        console.warn('OnPrivacyPressed');
   };

    

    return (
        
        <ScrollView showVerticalScrollIndicator={false}>

         <View style= {styles.root}>
            <Text style={styles.title}>
               Create an account
            </Text>

              <CustomInput
             placeholder= "Username" 
             value={username} 
             setValue={setUsername}/>

             <CustomInput
             placeholder= "Email" 
             value={email} 
             setValue={setEmail}/>
               
             <CustomInput 
             placeholder= "Password"  
             value={password} 
             setValue={setPassword}
             secureTextEntry={true} />

             <CustomInput 
             placeholder= " Repeat Password"  
             value={passwordRepeat} 
             setValue={setPassword}
             secureTextEntry={true} />

             <CustomButton
              text="Register" 
              onPress={onRegisterPressed} /> 

            <Text style={styles.text}>
             
           <Text style={styles.link} onPress={OnTermsOfUsePressed}>Terms of Use </Text> and{' '}
          <Text style={styles.link} onPress={OnPrivacyPressed}>Privacy Policy </Text>
 
            </Text>

             <SocialSignInButtons/>
            
              <CustomButton
              text="Have an account? Sign In"
              onPress={onSignInPressed }
              bgColor='white'
              fgColor='#B2B0B0'
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



export default SignUpScreen; 