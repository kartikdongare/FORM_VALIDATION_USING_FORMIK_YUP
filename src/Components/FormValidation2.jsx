import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, { useState } from 'react'
import * as yup from 'yup'
const FormValidation2 = () => {
    const [initialData,setInnitialData]=useState({ name:'',
        email:'',
        mobile:'',
        gender:'',
        transport:'',
        password:'',
        confirmpassword:'',
        check:false
    })
    let loginSchema=yup.object().shape({
        name:yup.string().min(3).max(12).required('Name must be required'),
        email:yup.string().matches(/@[^.]*|\./).required().email('email should be in valid format'),
        mobile:yup.string().min(10).max(13).required(),
        gender:yup.string().required(),
        transport:yup.string().required(),
        password:yup.string().matches('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})').required(),
        confirmpassword:yup.string().required().matches('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})'),
        check:yup.boolean().oneOf([true],'please accept term and condition')
    })

    const handleSubmit=(value)=>{
        alert('login successfully submit')
        console.log('Data',value);
    }
  return (
    <div className='main-form'>
      <Formik 
      initialValues={initialData}
      validationSchema={loginSchema}
      onSubmit={handleSubmit}

      >
        <Form>
        <div className='A'>
            <label className='B'>Full Name:-</label>
            <Field type='text' name='name' className='inpt1' placeholder='Enter your name'/>
            <div className='error'><ErrorMessage name='name' /></div>
        </div>
        <div className='A'>
            <label  className='B'>Email I'd:-</label>
            <Field type='email' name='email' className='inpt1' placeholder='Enter your email'/>
            <div  className='error'><ErrorMessage name='email'/></div>
        </div>
        <div className='A'>
            <label  className='B'>Mobile No:-</label>
            <Field type='tel' name='mobile' className='inpt1' placeholder='Enter your Mobile no'/>
            <div className='error'><ErrorMessage name='mobile' /></div>
        </div>
        <div className='A'>
            <label>Gender</label>
            <label>
                <Field type='radio' name='gender' value='Male'  />&nbsp;&nbsp;&nbsp;Male&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Field type='radio' name='gender' value='Female'/>&nbsp;&nbsp;&nbsp;Female
            </label>
            <div className='error'><ErrorMessage name='gender' /></div>
        </div>
        <div className='A'>
            <label>Transport:-</label>
            <Field component='select' name='transport' >
                <option value='' disabled>Please select</option>
                <option value='bike'>Bike</option>
                <option value='car'>Car</option>
                <option value='pick up'>Pick Up</option>
            </Field>
            <div className='error'><ErrorMessage name='transport' /></div>
        </div>
        <div className='A'>
            <label  className='B'>Password</label>
            <Field type='password' name='password' className='inpt1' placeholder='Enter Password'/>
            <div className='error'><ErrorMessage name='password' /></div>
        </div>
        <div className='A'>
            <label  className='B'>Confirm Password</label>
            <Field type='password' name='confirmpassword' className='inpt1' placeholder='Enter your Confirm Password'/>
            <div className='error'><ErrorMessage name='confirmpassword' /></div>
        </div>
        <div className='A'>
            <label>
                <Field type='checkbox' name='check' />&nbsp;&nbsp;&nbsp;
                Accept Terms and Condition
            </label>
            <div className='error'><ErrorMessage name='check' /></div>
        </div>
        <div className='btn'><button type='submit' className='btn1'>Submit</button></div>
        </Form>
      </Formik>
    </div>
  )
}

export default FormValidation2;
