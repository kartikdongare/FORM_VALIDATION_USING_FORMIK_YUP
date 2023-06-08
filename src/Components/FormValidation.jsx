import { Field, Form, Formik,ErrorMessage } from 'formik'
import React, { useState } from 'react'
import * as yup from 'yup'
const FormValidation = () => {

    // let initialData = {
    //     name: '',
    //     email: '',
    //     mobile:'',
    //     password: '',
    //     confirmPassword:'',
    //     gender:''
    // }
    const [initialData,setInnitialData]=useState({name: '',
    email: '',
    mobile:'',
    password: '',
    confirmPassword:'',
    gender:'',
    check:false,
    transport:''
})

    const handleSubmit=(value)=>{
        // e.preventDefault();
        alert('Login successfully')
        console.log('values',value);
        setInnitialData(value);
    }
    let loginSchema=yup.object().shape({
        name:yup.string().min(2,'very short').max(10,'very long').required('Nama must be required'),
        mobile:yup.string().min(10).max(13).required('mobile no must be required'),
        email:yup.string().matches(/@[^.]*|\./).required('mail must be valid format'),
        password:yup.string().matches(/^[a-zA-Z0-9!@#$%^&*]{6,16}$/).required('password shoud be in valid format'),
        confirmPassword:yup.string().matches(initialData.password).required('confirm password must be same as before passwowrd'),
        gender:yup.string().required('please select gender'),
        check:yup.boolean().oneOf([true],'Please accept term and conddtion'),
        transport:yup.string().required()
    })
    return (
        <div>
            <Formik
                initialValues={initialData}
              validationSchema={loginSchema}
              onSubmit={handleSubmit}
            >
                <Form>
                    <div><label>Name:-</label>
                        <Field type='text' name='name' className='input' placeholder='Enter Name'/>
                        <div className='dgr'><ErrorMessage name='name'/></div>
                    </div>
                    <div>
                        <label>Email id:-</label>
                        <Field type='email' name='email' className='input'  placeholder='Enter email' />
                        <div className='dgr'><ErrorMessage name='email'></ErrorMessage></div>
                    </div>
                    <div>
                        <label>Mobile No:-</label>
                        <Field type='tel' name='mobile' className='input' placeholder='Enter number' />
                        <div className='dgr'><ErrorMessage name='mobile'></ErrorMessage></div>
                    </div>
                    <div>
                        <label>Password:-</label>
                        <Field type='password' name='password' className='input' placeholder='Enter password' />
                        <div className='dgr'><ErrorMessage name='password'/></div>
                    </div>
                    <div>
                        <label>Confirm Password:-</label>
                        <Field type='password' name='confirmPassword' className='input' placeholder='Enter confirm password' />
                        <div className='dgr'><ErrorMessage name='confirmPassword'/></div>
                    </div>
                    <div>
                        <label>Gender:-</label>&nbsp;&nbsp;
                        <Field component='select' name='gender'>
                        <option value='' disabled>Please select</option>
                        <option value='male'>Male</option>
                        <option value='female'>Female</option>
                        </Field>
                        <div className='dgr'><ErrorMessage name='gender'/></div>
                    </div>
                    <div>
                        <label>
                            <Field type='checkbox' name='check'></Field>&nbsp;&nbsp;
                            Please accept term and condition
                        </label>
                        <div className='dgr'><ErrorMessage name='check'/></div>
                    </div>
                    <div>
                        <label>Transport:-&nbsp;&nbsp;&nbsp;</label>
                        <label>
                            <Field type='radio' name='transport' value='bike'/>&nbsp;&nbsp;&nbsp;Bike
                        </label>&nbsp;&nbsp;&nbsp;
                        <label>
                            <Field type='radio' name='transport' value='car'/>&nbsp;&nbsp;&nbsp;Car
                        </label>
                        <div className='dgr'><ErrorMessage name='transport'/></div>
                    </div>
                    <button type='submit'>Submit</button>
                </Form>
            </Formik>
        </div>
    )
}
export default FormValidation
