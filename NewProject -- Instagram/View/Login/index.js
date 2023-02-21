import {useState, useEffect, useMemo} from 'react'
import { Alert } from 'react-native'
import Login from './Components/Login'

const LoginPage = ({navigation}) => {
    
        const [email, setEmail] = useState("")
        const [password, setPassword] = useState("")
        const [data , setData] = useState([]);
        const [list, setList] = useState("English (UK)")
        
        const getUserData = async () => {
            try {
               const response = await fetch("https://anmol12342.github.io/testApi/Logindata.json");
               const myData = await response.json();
               setData(myData)
            } catch (error) {
                console.log("error",error)
            }
        };
    
        useEffect(() => {
            getUserData();
        }, []);
        // useEffect(() => {
        //   first
        
        //   return () => {
        //     second
        //   }
        // }, [third])
        
    
         const pressSubmit = () => {
             if (data.find((element) => element.email === email && element.password === password)){
                const findEmailpassword = data.find((element) => element.email === email && element.password === password)
                Alert.alert("welcome");
                navigation.navigate("homeScreen", {
                                            Data: findEmailpassword
                                        });
                
            }
            else {ß
                Alert.alert("the password or username is wrong");
            }
        }
    
         const language = [
            {key:'1',value:'English (UK)'},
            {key:'2',value:'Deutsh'},
            {key:'3',value:'Espanol'},
            {key:'4',value:'English (USA)'},
          ];
        const isFormValid = useMemo(() => {
            return email.length > 0 && password.length > 0;
        }, [email, password]);

        const handleDonthaveaccount = () =>{
            navigation.navigate("signupScreen")
        }
    
    return (
        <Login 
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        data={data}
        setData={setData}
        list={list}
        setList={setList}
        pressSubmit={pressSubmit}
        language={language}
        isFormValid={isFormValid}
        handleDonthaveaccount={handleDonthaveaccount}
        />
    )}
export default LoginPage
