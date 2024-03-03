import React from 'react'
import { Form,Formik} from 'formik';
import { baseSchema } from '../schema';
import { Link } from 'react-router-dom';
import EmailInput from './EmailInput';
import AgeInput from './AgeInput';
import Password from './Password';
import ConfirmPassword from './ConfirmPassword';
const onSubmit = async(actions) =>{
  await new Promise((resolve)=>{
    setTimeout(resolve,1000)
  })
  actions.resetForm()

};
function Signin() {
    
  return (
   <>
     <Formik
       initialValues={{ email: '', age: '', password: '', confirmPassword: '' }}
       onSubmit={onSubmit}
       validationSchema={baseSchema}
     >
       {({isSubmitting}) => (
         <Form>
           <EmailInput label="Email" type="email" name="email" placeholder="Email daxil edin"/>
           <AgeInput label="Age" name="age" placeholder="Yasinizi daxil edin"/>
           <Password label="Password" name="password" placeholder="Sifreni daxil edin"/>
           <ConfirmPassword label="Confirm Password" name="confirmPassword" placeholder="Sifreni yeniden daxil edin"/>
           <button type='submit' disabled={isSubmitting} className={isSubmitting ? 'submitbutton' : "signbutton"}>Button</button>
           <Link className='link' to="/login">Login </Link>
         </Form>
       )}
     </Formik>
   
   </>
  )
}

export default Signin