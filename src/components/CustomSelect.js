import { useField } from 'formik'
import React from 'react'

function CustomSelect({label, ...props}) {
  const [field,meta]= useField(props);
  // console.log(field);
  // console.log(meta);
  return (
    <>
    <div className='signinput'>
      <label>{label}</label>
      <select {...field} {...props} 
      className={meta.error ? "inputerrors":""}
      
      />
      {meta.error && <div className='errors'>{meta.error}</div>}

    </div>
    </>
  )
}

export default CustomSelect