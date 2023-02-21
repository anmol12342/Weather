import {SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import {React, useState} from 'react'
import SignupPassword from './components/signupPassword'
import SignupEmail from './components/SignupEmail'
import SignupUsername from './components/signupUsername'



const SignupScreen = () => {
  const [index, setIndex] = useState(true)
  const [next, setNext] = useState(false)
  const [check,setCheck] = useState(false)

  

const Indexset = () => {
  setIndex(false);
  setNext(true);
}

const Nextset = () => {
  setNext(false);
  setCheck(true);
}

  
  return(
    <SafeAreaView style={{flex : 1}}>
    {index && <SignupUsername IndexSet={Indexset}/>}
    {next && <SignupPassword NextSet={Nextset}/>}
    {check && <SignupEmail/>}
    </SafeAreaView>
    //  index? <SignupPassword/>:
    // <SignupUsername index={false} setIndex={setIndex}/>
    
  )
  
}



export default SignupScreen;