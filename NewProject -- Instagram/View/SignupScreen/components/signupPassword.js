import {SafeAreaView,Text, View, TextInput, TouchableOpacity } from 'react-native'
import {React, useState,useMemo} from 'react'
import CheckBox from '@react-native-community/checkbox';
import styles from './style'

const SignupPassword = (props) => {
  const [password, setPassword] = useState("")
  const [isSelected, setSelected] = useState(true)

  const isFormValid = useMemo(() => {
    return password.length > 0 
  }, [password]);

  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.signup}>
      <Text style={styles.primaryText}>Create a password</Text>
      <Text style={styles.secondaryText}>For Security, your password must be six character or more</Text>
      <TextInput placeholder = "Password"
            placeholderTextColor={'grey'}
            style={styles.inputStyle}
            autoCapitalize= "none"
            autoCorrect={false}
            value={password}
            onChangeText={(actuallpassword) => setPassword(actuallpassword)}/>
      <View style={styles.wrapper}>
        <Checkbox  
        value={isSelected}
          onValueChange= {() => setSelected(!isSelected)}
          color= {isSelected ? "Blue" : "black"}
          />
          <Text>    Remember password</Text>
          </View>
          <TouchableOpacity  style={[styles.buttonStyle,
            {   
                backgroundColor : isFormValid ? "black" : "grey", 
            },
         ]}
         disabled= {!isFormValid}
         onPress={() => props.NextSet()}>
            <Text style={{color:'white'}}>Next</Text>
        </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default SignupPassword;