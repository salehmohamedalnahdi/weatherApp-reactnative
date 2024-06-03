import React, { useEffect, useState } from 'react';
import {Text, View ,ScrollView,ImageBackground} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import WheatherToday from "../components/wheatherToday"
import Form from "../components/form"
import Forecast from "../components/forecast"



export default function HomeScreen({ navigation }) {
  const [dataCurrent,setDataCurrent]=useState("")
  const [dataForecast,setDataForecast]=useState("")
  const [load,setLoad]=useState(false)
 
  const handleSearch = async (city) => {
    if (city){
      setLoad(true)
    }
    try {
            const responseWeather= await fetch(`https://wheatherapp-backend.onrender.com/weather/${city}`);
            setLoad(false)
            const resultWeather= await responseWeather.json();
            setDataCurrent(resultWeather)
      
            //forcast
            const responseForecast= await fetch(`https://wheatherapp-backend.onrender.com/forecast/${city}`);
            const resultForecast= await responseForecast.json();
            setDataForecast(resultForecast)
         } catch (error) {
               console.error(error);
             }
  
  }
    return (
      <ImageBackground
      source={require('../assets/sky3.jpg')}
      resizeMode="cover"
      >
    <View style={tw `flex justify-center`}>
      <View style={tw `mt-4 text-2xl flex flex-col font-semibold`}>
         <ScrollView>
            <Form onSearch={handleSearch} />
            <WheatherToday data={dataCurrent} load={load}/>
            <Forecast data={dataForecast} /> 
         </ScrollView>
      </View>
    </View>
    </ImageBackground>
  )
}



