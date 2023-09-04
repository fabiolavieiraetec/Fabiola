import { StatusBar } from "expo-status-bar";
import { StyleSheet,Text, view} from "react-native";
import react from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import TelaScreen from './src/TelaScreen';

const Index= () => {
   return (
    <SafeAreaView>
        <TelaScreen/>
    </SafeAreaView>

   );

};

const styles = StyleSheet.create({
    cintainer: {
        flex:1,
    }
});

export default App;