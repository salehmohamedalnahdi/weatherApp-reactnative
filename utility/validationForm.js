import * as yup from "yup"


export default function ValidationForm (){
    const schemaValidation=yup.object({
        city: yup.string()
        .required()
        .min(3),
    })
    return schemaValidation;
}