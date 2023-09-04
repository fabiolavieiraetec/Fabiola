import React, {useState} from "react";
import { View,Text,TextInput,Button,StyleSheet} from "react-native";

const LoginScreen = () =>{
const [email, setEmail] = useState('');
const [passWord, setPassWord] = useState('');

const handleLogin = () => {
    console.log(`login com email: ${email} e senha: ${password}`);
};

};

