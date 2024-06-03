import React from 'react';
import {Text, View ,TouchableOpacity,TextInput} from 'react-native';
import tw from 'tailwind-react-native-classnames';

export default function Search({onPress}) {

    return(
        <TouchableOpacity onPress={onPress}>
            <View style={tw `items-center bg-red-500 rounded-full px-2 py-1`}>
                <Text style={tw `text-white `}>Search</Text>
            </View>
        </TouchableOpacity>
    )
    
}