import React, {useState} from "react";
import {View, Text, Image, StyleSheet, useWindowDimensions, ScrollView,type} from 'react-native';
import logo from '../assets/images/food-logo-smile-label-company-grocery-store-friendly-vector-illustration-smiling-mouth-symbol-135565322.jpg';
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import SocialSignInButtons from "../components/SocialSignInButtons";
import { useNavigation } from "@react-navigation/native";

const SignInScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    const onSignInPressed = () => {
        
        navigation.navigate('Home');
    };

    const onForgotPasswordPressed = () => {
        navigation.navigate('ForgotPasswordScreen');
    };

    const onSignUpPress = () => {
        navigation.navigate('SignUpScreen');
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{backgroundColor : 'white'}}>
            <Image source={require('../assets/images/food-logo-smile-label-company-grocery-store-friendly-vector-illustration-smiling-mouth-symbol-135565322.jpg')} 
             style={{width: 325, height: 180, backgroundColor:'white', 
             alignSelf: 'center', marginLeft: 25, justifyContent: "center", marginTop:5,
             paddingLeft:60 , paddingRight :60 ,
             }} />
            </View>
        <View  style= {styles.root}>

             <CustomInput
             placeholder= "Username" 
             value={username} 
             setValue={setUsername}/>
               
             <CustomInput 
             placeholder= "Password"  
             value={password} 
             setValue={setPassword}
             secureTextEntry={true} />

             <CustomButton
              text="Sign In" 
              onPress={onSignInPressed} />

             <CustomButton
              text="Forgot password ?"
              onPress={onForgotPasswordPressed}
              bgColor='white'
              fgColor='#B2B0B0'
              />

              <SocialSignInButtons />

              <CustomButton
              text="Don't have an account? create one "
              onPress={onSignUpPress} 
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
        padding: 5,
        backgroundColor: 'white',
        
    },
});

export default SignInScreen; 