import React from 'react';
import CustomInput from './CustomInput';
import { Form, Formik } from 'formik';
import { advencedFormik } from '../schema';
import CustomSelect from './CustomSelect';
import Checkbox from './Checkbox';
import { Link } from 'react-router-dom';
const onSubmit = async(values,actions) =>{
  await new Promise((resolve)=>{
    setTimeout(resolve,1000)
  })
  actions.resetForm()

};
function Login() {
  return (
    <>
    <div>
     <Formik
       initialValues={{ username: '', university:'', isAccepted: false }}
       onSubmit={onSubmit}
       validationSchema={advencedFormik}

     >
       {({isSubmitting}) => (
         <Form className='loginform'>
            <CustomInput  label="İstifadeçi adınız" type="text" name="username"  placeholder="İstifadeçi adınızı giriniz"/>
            <CustomSelect label="Universitet adlari" type="text" name="university" placeholder="univeristetiniz secin">
              <option value="">Universitetinizi seciniz</option>
              <option value="aztu">AZTU</option>
              <option value="adnsu">ADNSU</option>
              <option value="adu">ADU</option>
              <option value="unec">UNEC</option>
            </CustomSelect>
            <Checkbox type="checkbox" name="isAccepted" />  
          
            <button type="submit" disabled={isSubmitting} className={isSubmitting ? "submitbutton" : "signbutton"}>Kaydet</button>
            <Link className='link' to="/">Sign in</Link>

         </Form>
       )}
     </Formik>
    </div>
  
    
    </>
  );
}

export default Login