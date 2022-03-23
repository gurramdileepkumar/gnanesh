import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'

export default function Yup() {
    const formik = useFormik({
        initialValues:{
            name:"",
            surname:"",
            mobileno:""
        },
        validationSchema:yup.object({
            name:yup.string().min(5,"too short!").max(10,"too long!").required('enter name'),
            surname:yup.string().min(5,"too short!").max(8,"too long!").required('enter surname'),
            mobileno:yup.string().min(10,"too short!").max(10,"too long!").required('enter mobileno')

        }),
        onSubmit:values=>{
            alert(JSON.stringify(values));
        }
    })
  return (
    <div style={{textAlign: 'center'}}>
        <form onSubmit={formik.handleSubmit}>
            <label>Name:</label>
            <input type="text" name="name" {...formik.getFieldProps('name')} /><br/><br/>
            {formik.touched.name && formik.errors.name ?
            <div style={{color:"red"}}>{formik.errors.name}</div>:null
            }
             <label>SurName:</label>
            <input type="text" name="surname" {...formik.getFieldProps('surname')} /><br/><br/>
            {formik.touched.surname && formik.errors.surname ?
            <div style={{color:"red"}}>{formik.errors.surname}</div>:null
            }
            <label>Mobile No:</label>
            <input type="text" name="mobileno" {...formik.getFieldProps('mobileno')} /><br/><br/>
            {formik.touched.mobileno && formik.errors.mobileno ?
            <div style={{color:"red"}}>{formik.errors.mobileno}</div>:null
            }
            <button type="submit">submit</button>
        </form>
      
    </div>
  )
}
