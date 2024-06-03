import {Text, TouchableOpacity, View,Button, Image  } from 'react-native';
import tw from 'tailwind-react-native-classnames';



export default function WheatherToday({data,load}) {
  //const urlImg= data.weather[0].icon

  return (
     <View style={tw `flex flex-col justify-center items-center`}>
         {load && <Text>loading...</Text>}
         {data && (
            <>
               <Text style={tw ` pb-2 text-gray-100 text-3xl`} >Today</Text>
               <Text style={text} >{data.name}</Text>      
               <Image 
                  source={{ uri: "http://openweathermap.org/img/wn/"+data.weather[0].icon+".png"}}
                  style={tw `w-40 h-40`}
                  resizeMode="cover"
                   alt=""
                   // borderRadius={10}
               />
               <Text style={text} >{data.weather[0].main}</Text>
               <Text style={text} >{data.main.temp}°C</Text>
                        
               <Text style={text} >Wind: {data.wind.speed} KM/H</Text>
               <Text style={text} >Humidity: {data.main.humidity}</Text>   
            </>
          )}
 
         </View>
  );
}
const text=tw `pt-2 text-lg`