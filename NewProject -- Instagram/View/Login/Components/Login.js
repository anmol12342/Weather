import {SafeAreaView ,Image, Text, View, TextInput, TouchableOpacity, Linking, Alert} from 'react-native'
import { SelectList } from 'react-native-dropdown-select-list'
import styles from './styles';

const Login = (props) => {
  return (
    <SafeAreaView style={styles.container}>
        <SelectList 
        setSelected={(val) => props.setList(val)} 
        data={props.language} 
        save="value"
        defaultOption={{key:'1',value:'English (UK)'}}
    />
      <View style={styles.loginForm}>
        <Image style={styles.iglogo}
        source={require("../../../../assets/Instagram_logo.png")}
        />
        <TextInput placeholder = "Phone number, Email adress or username"
            placeholderTextColor={'grey'}
            style={styles.inputStyle}
            autoCapitalize= "none"
            autoCorrect={false}
            value={props.email}
            onChangeText={(actuallEmail) => props.setEmail(actuallEmail)}/>
        <TextInput placeholder = "Password"
            placeholderTextColor={'grey'}
            style={styles.inputStyle}
            autoCapitalize= "none"
            autoCorrect={false}
            secureTextEntry={true}
            value={props.password}
            onChangeText={(actuallpassword) => props.setPassword(actuallpassword)}/>
        <TouchableOpacity 
            style={[styles.buttonStyle,
            {   
                backgroundColor : props.isFormValid ? "#458eff" : "grey", 
            },
         ]}
         disabled= {!props.isFormValid}
         onPress={() => props.validation()}>
            <Text style={{color:'white'}}>Log in</Text>
        </TouchableOpacity>
        <Text style={styles.primaryText}>
            forgottten your Login details?
        <Text style={styles.secondaryText}>Get help Logging in.</Text>
        </Text>
        <View style={styles.lowerContainer}>
            <View style={styles.lineStyle}>
            </View>
            <Text style={{color: 'grey', fontWeight: '600', fontSize:15, padding:5 }} >OR</Text>
            <View style= {styles.lineStyle}>
            </View>
        </View>
        <View style = {{height:50, justifyContent:'center', alignItems:'center'}}>
            <TouchableOpacity style={styles.facebookButton}
            onPress={() => Linking.openURL('https://Facebook.com') }>
             <Image style={{width:40, height:40, }}
            source={require("../../../../assets/Facebook_Logo.png")}/>
            <Text style={{alignSelf: 'center', fontSize: 13, color:'white'}}>   Login with facebook</Text>
            </TouchableOpacity>
        </View>
      </View>
      <View style={styles.lowerPage}>
        <View // this view is used to create a line
        style={styles.lineCreate}
        ></View>
        <TouchableOpacity 
        onPress={() => props.handleDonthaveaccount()}>
       <Text style={styles.primaryText}>
            Don't have an account?
        <Text style={styles.secondaryText}>Sign up.</Text>
        </Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  )
};



export default Login
 