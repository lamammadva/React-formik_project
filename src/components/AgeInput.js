import { useField } from 'formik'
import React from 'react'

function AgeInput({label,...props}) {
    const [field,meta] =useField(props)
      return (
        <>
         <label>{label}</label>
         <input {...field} {...props} className={meta.error ? "inputerrors" :" "}/>
         {meta.error && <p className='errors'>{meta.error}</p>}
        </>
      )
    }

export default AgeInput