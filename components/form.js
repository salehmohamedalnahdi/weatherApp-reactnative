import React from 'react';
import {Text, View ,Button,TextInput} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { Formik } from 'formik';
import ValidationForm from "../utility/validationForm"
import Search from "./search"


export default function Form({ onSearch}) {
    const validation =ValidationForm()
    return (
    <View >
        <Formik
        initialValues={{ city: ''}}
        validationSchema={validation}
        onSubmit={(values, actions) => {
          actions.resetForm();
          onSearch(values.city);
          
        }}
      >
        {(props) => (
          <View >
            <View style={tw `flex flex-row justify-center items-center my-2 `}>
            <TextInput
              style={tw ` mr-1 rounded-lg text-lg border-2 border-gray-200 text-white text-center py-1 px-2 w-60`}
              placeholder='type city'
              onChangeText={props.handleChange('city')}
              value={props.values.city}
            />
            <Search onPress={props.handleSubmit} />
            </View>
            <Text style={tw `text-sm font-semibold text-red-500 ml-10 mb-2 `}>{props.errors.city}</Text>
          </View>
        )}
      </Formik>
    </View>
  )
}



