import { useState } from "react";

export const useForm = (initialFormData={}) => {
    const [formData, updateFormData] = useState(initialFormData)

    const handleField = ({target}) =>{
        updateFormData({...formData, [target.name]: target.value})
    };

    return {formData, handleField}
}


// // Setup form
// import { useState } from "react";
// // button type="button" on form elements
// export const useForm = (initialFormData={}) => {
//     const [formData, updateFormData] = useState(initialFormData)

//     const checkValidationError = () =>{
//         const keys = Object.keys(formData)
//         const isvalid = keys.every(key => {
//             if(formData[key]?.errorMessage === ""){
//                 return true;
//             }
//             return false;
//         })
//         return isvalid;
//     }


//     const handleField = (e, schema) =>{
//         let errorMessage = ""
//         if(schema){
//             try {
//                 schema.validateSync(e.target.value)
//             } catch (error) {
//                 errorMessage = error.message
//             }
//         }


        
//         updateFormData({
//             ...formData, 
//             [e.target.name]: {
//                 value: e.target.value,
//                 errorMessage,
//             }
//         })
//     };

//     return {formData, handleField, checkValidationError}
// }


// // Usage example

// import {number} from "yup"
// const {formData: myForm, handleField: setField, checkValidationError:checkValidity1} = useForm({
//     workingDays: null,
//     workingHours: null,
//     totalSubjects: null,
//     subjectsPerDay: null
// });

// <div className="form-group mb-3">
//     <label htmlFor="totalSubjects">Total Subjects</label>
//     <input
//         name="totalSubjects"
//         type="number"
//         className={`form-control ${myForm['totalSubjects']?.errorMessage === "" ? 'is-valid': 'is-invalid'}`}
//         id="totalSubjects"
//         placeholder="Total Subjects"
//         onChange={e=>setField(e, number().transform(value => (isNaN(value)? undefined : value)).required().positive().integer().min(1))}
//     />
//     <div className="invalid-feedback">{myForm['totalSubjects']?.errorMessage}</div>
// </div>
