import { StyleSheet, Text, View, SafeAreaView, TextInput, Button, ImageBackground, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'

const HomePagescreen = (props) => {
  //°C
  
  return (
      <SafeAreaView>
      <View styles={styles.conatiner}>
      <View style={styles.searchConatiner}>
      <TouchableOpacity
      onPress = {props.enableSearch}>
      <Image
        source={require('../../../../assets/searchIcon.png')} 
        style={styles.searchIconImageStyle}/>
      </TouchableOpacity>
      {props.enableInput && <TextInput placeholder = "Enter a location?"
            placeholderTextColor={'grey'}
            style={styles.inputStyle}
            autoCapitalize= "none"
            value={props.location}
            onChangeText={(actualllocation) => props.setLocation(actualllocation)}/>}
        </View>
      <View style={styles.weatherContainer}>
        <ImageBackground
        source={require('../../../../assets/clouds.jpg')} 
        resizeMode="cover"
        style={styles.imageStyle}>
        <Text style={styles.weatherText}>{props.weather.temp}°C</Text> 
        <Text style={styles.weatherconatinerText}>{props.weather.descp}</Text>
        <Text style={styles.weatherconatinerText}>Feels like {props.weather.feel}°C</Text>
        <Text style={styles.weatherconatinerText}> Day 27°C .Night 14°C</Text>
      </ImageBackground>
      </View>
      <View style={styles.forecastContainer}>
        <Text style={styles.forcastText}>Hourly forecast</Text>
        <FlatList
        horizontal
        data={props.forcast?.list}
        keyExtractor={item => item.dt_text}
        renderItem={({item}) => {
          return(
            <View style={styles.cardStyle}>
              <Text>This is test</Text>
            </View>
          );
        }} 
           />
        <Button
          //onPress={console.log("pressed")}
          title="See Details"
          color="#0000ff"/>
      </View>
      <View style={styles.ExtraContainer}>
        <Text>No data available at this time</Text>
      </View>
      <View style={styles.bottomContainer}>
      <Image
        source={require('../../../../assets/clock-1.jpeg')} 
        style={styles.bottomContainer1ImageStyle}/>
      <Image
        source={require('../../../../assets/calendar-2.png')} 
        style={styles.bottomContainer2ImageStyle}/>
      <Image
        source={require('../../../../assets/3.png')} 
        style={styles.bottomContainer2ImageStyle}/>
      <Image
        source={require('../../../../assets/4.png')} 
        style={styles.bottomContainer2ImageStyle}/>
      <Image
        source={require('../../../../assets/5.webp')} 
        style={styles.bottomContainer2ImageStyle}/>
      </View>
      </View>
      </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  conatiner:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    BackgroundColor: "red",
  },
  searchConatiner: {
    flexDirection: 'row'
  },
  inputStyle: {
    fontSize: 14,
    borderRadius: 5, //curves the border radius
    width: "70%",
    borderWidth: 2,
    borderColor: 'rgba(0,0,0,0.3)',
    padding: 10,
    
  },
  weatherContainer:{
    width: "95%",
    height: "22%",
   padding:10,
    marginHorizontal: 10,
    alignSelf: 'center',

  },
  weatherText:{
    fontSize: 25,
    fontWeight: "bold",
    color: `#ffffff`,
    marginVertical: 5

  },
  weatherconatinerText: {
    fontSize: 18,
    fontWeight: "400",
    color: `#ffffff`,
    marginVertical: 3
  },
  imageStyle:{
    flex: 1, 
    padding : 15
  },
  forecastContainer:{
    width: "97%",
    height: "30%",
    padding:10,
    marginVertical: 8,
    marginHorizontal: 10 ,
    backgroundColor: "white",
    alignSelf: 'center',

  },
  ExtraContainer: {
    width: "95%",
    height: "24%",
    padding:10,
    marginHorizontal: 10,
    backgroundColor: "#d3d3d3",
    alignSelf: 'center',

  },
  bottomContainer:{
    width: "95%",
    height: "7%",
    padding:10,
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: "white",
    marginTop: 60,
    alignSelf: 'center',
    flexDirection: 'row'


  },
  forcastText:{
    fontSize: 18,
    fontWeight: "500",
    color: `black`
  },
  searchIconImageStyle:{
    width:25,
    height:25,
    marginHorizontal:20,
    marginTop: 7
  },
  bottomContainer1ImageStyle: {
    width:37,
    height:37
  },
  bottomContainer2ImageStyle:{
    width:37,
    height:37,
    marginHorizontal:25
  },
  cardStyle:{
    height:100,
    width: 50,
    backgroundColor: 'black'
    
}


})

export default HomePagescreen





