import React from 'react'
import { useFormik } from 'formik';

export default function FormValid() {
    const validateFormik = empData =>{
        const errors = {};
        if(!empData.name){
            errors.name="enter name";
        }
        else if(empData.name.length > 10){
            errors.name= "max length 10 char";
        }
        if(!empData.salary){
            errors.salary="enter salary";
        }
        if(!empData.location){
            errors.location="enter location";
        }
        else if(empData.location.length > 8){
            errors.location= "max length 8 char";
        }
        return errors;
    }
    const formik = useFormik({
        initialValues:{
            name:'',
            salary:'',
            location:''
        },
        validate: validateFormik,
        onSubmit:values=>{
            alert(JSON.stringify(values));
        }

    })
    return (
        <div style={{textAlign:"center"}}>
            <h1>employee data</h1>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label>Eployee Name:</label>
                    <input type='text' placeholder='name' name="name"
                       value={formik.values.name}
                       onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                     /><br/><br/>
                     {formik.touched.name && formik.errors.name?
                     <span style={{color:"red"}}>{formik.errors.name}</span>:null}
                </div>
                <div>
                    <label>Employee Salary:</label>
                    <input type='number' placeholder='salary' name='salary'
                    value={formik.values.salary}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                     /><br/><br/>
                      {formik.touched.salary && formik.errors.salary?
                     <span style={{color:"red"}}>{formik.errors.salary}</span>:null}
                </div>
                <div>
                    <label>Employee Location:</label>
                    <input type='text' placeholder='location' name='location'
                    value={formik.values.location}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                     /><br/><br/>
                      {formik.touched.location && formik.errors.location?
                     <span style={{color:"red"}}>{formik.errors.location}</span>:null}
                </div>
                <button type='submit'>Submit</button>
            </form>
            
        </div>
    )
}
