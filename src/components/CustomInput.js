import { useField } from 'formik'
import React from 'react'

function CustomInput({label, ...props}) {
  const [field,meta]= useField(props);
  console.log(meta);
  console.log(field);
  return (
    <>
    <div className='signinput'>
      <label>{label}</label>
      <input {...field} {...props} 
      className={meta.error ? "inputerrors" : ""}
      />
      {meta.error && <div className='errors'>{meta.error}</div>}

    </div>
    </>
  )
}

export default CustomInput