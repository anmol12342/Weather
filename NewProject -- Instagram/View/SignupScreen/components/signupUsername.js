import { Text, View, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import {React, useState,useMemo} from 'react'
import styles from './style'

const SignupUsername = (props) => {
  const [username, setUsername] = useState("")
    
  const isFormValid = useMemo(() => {
      return username.length > 0 
    }, [username]);
  
  return (
      <SafeAreaView style={styles.container}>
      <View style={styles.signup}>
      <Text style={styles.primaryText}>Choose username</Text>
      <Text style={styles.secondaryStyle} >You can always change it later</Text>
      <TextInput placeholder = "Username"
            placeholderTextColor={'grey'}
            style={styles.inputStyle}
            autoCapitalize= "none"
            autoCorrect={false}
            value={username}
            onChangeText={(actuallUsername) => setUsername(actuallUsername)}/>
      <TouchableOpacity  style={[styles.buttonStyle,
            {   
                backgroundColor : isFormValid ? "#458eff" : "grey", 
            },
         ]}
         disabled= {!isFormValid}
         onPress={() => props.IndexSet()}>
            <Text style={{color:'white'}}>Next</Text>
        </TouchableOpacity>
        </View>
    </SafeAreaView>
      
    )
  }


export default SignupUsername