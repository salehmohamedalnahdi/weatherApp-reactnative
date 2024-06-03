import {Text, Image , View } from 'react-native';
import tw from 'tailwind-react-native-classnames';


export default function Forecast({data}) {

    return (
      <View >
         {data && (
                <>
                   <View style={tw ` m-1 p-2 flex  items-center  border border-black `} >    
                       <Text style={text} >Tomorow:</Text>
                       <Image 
                           source={{ uri: "http://openweathermap.org/img/wn/"+data.list[0].weather[0].icon+".png"}}
                           style={tw `w-20 h-20`}
                           resizeMode="cover"
                            alt=""
                       />
                       <Text style={text} >Max Temp: {data.list[0].main.temp_max}°C</Text>
                       <Text style={text} >Min Temp: {data.list[0].main.temp_min}°C</Text>
                   </View>     
                </>
             )}   
        </View>
    );
  }
const text=tw `text-white`  
